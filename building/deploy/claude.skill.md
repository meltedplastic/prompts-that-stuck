---
name: deploy
description: "Deploy a local project folder to Railway with optional password protection. Use this skill whenever the user wants to deploy, ship, or push a local project to Railway — including phrases like 'deploy to railway', 'push to railway', 'deploy this', '/deploy', 'make this live', 'host this on railway', or any request to get a local folder running on a public URL via Railway. Also trigger when the user mentions Railway deployment issues or wants to redeploy."
---

# Deploy to Railway

Deploy any local project folder to Railway with a public URL. Handles everything from git init to live deployment, with optional password protection via HTTP basic auth.

## Workflow Overview

The deployment is a pipeline with interactive checkpoints. Move through each phase in order, but skip steps that are already done (e.g., don't re-init git if it's already a repo).

## Phase 1: Git Setup

Check if the current directory is a git repo:

```bash
git rev-parse --is-inside-work-tree 2>/dev/null
```

If not, initialize one:
```bash
git init
```

Then check for a remote:
```bash
git remote -v
```

If no remote exists, ask the user:
- Do they have a GitHub repo URL to use?
- Or should we create one? (requires `gh` CLI)

To create a new repo:
```bash
gh repo create <repo-name> --public --source=. --push
```

## Phase 2: Detect Project Type

Look at what's in the directory to determine the project type:

| Signal | Type |
|--------|------|
| `package.json` with a `start` script | Node.js (ready to go) |
| `package.json` without `start` script | Node.js (needs start script) |
| `requirements.txt` or `*.py` | Python |
| `*.html` files only (no package.json) | Static site |
| `Dockerfile` | Docker (Railway auto-detects) |

**For static sites (HTML only):** These need a server because Railway runs processes, not static file hosts. Create a lightweight Node.js Express server. Ask the user if they want password protection before generating the server.

## Phase 3: Create Server (Static Sites Only)

If the project is a static HTML site, generate these files:

### package.json
```json
{
  "name": "project-name",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### server.js (without auth)
```javascript
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

// Serve the main HTML file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'INDEX_FILE'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Replace `INDEX_FILE` with the actual main HTML file (e.g., `index.html`, `ita-menu.html`, etc.). If there are multiple HTML files, ask the user which is the entry point.

### server.js (with basic auth)
```javascript
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const AUTH_USER = process.env.AUTH_USER || 'admin';
const AUTH_PASS = process.env.AUTH_PASS || 'changeme';

app.use((req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Protected"');
    return res.status(401).send('Authentication required');
  }
  const [user, pass] = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');
  if (user === AUTH_USER && pass === AUTH_PASS) return next();
  res.setHeader('WWW-Authenticate', 'Basic realm="Protected"');
  res.status(401).send('Invalid credentials');
});

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'INDEX_FILE'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

When using auth, the credentials should be set as Railway environment variables (not hardcoded). After deployment, set them with:
```bash
railway variables set AUTH_USER=<username> AUTH_PASS=<password>
```

### .gitignore
```
node_modules/
.DS_Store
.env
```

After generating files, run `npm install` to create the lockfile.

## Phase 4: Commit & Push

Stage all relevant files and push:

```bash
git add .
git commit -m "Prepare for Railway deployment"
git push origin main
```

If the branch name isn't `main`, detect it with `git branch --show-current`.

## Phase 5: Railway Setup

### Check Railway CLI
```bash
railway --version 2>/dev/null
```

If not installed:
```bash
npm install -g @railway/cli
```

### Check login status
```bash
railway whoami 2>/dev/null
```

If not logged in:
```bash
railway login
```
This opens a browser — tell the user to complete the login flow.

### Initialize or link project
Ask the user: create a new Railway project or link to an existing one?

```bash
railway init          # new project (interactive)
railway link          # existing project (interactive)
```

## Phase 6: Deploy

```bash
railway up --detach
```

This uploads and builds. The `--detach` flag returns immediately — tell the user the build is in progress and they can check the build logs at the URL printed.

## Phase 7: Domain & Environment Variables

Generate a public domain:
```bash
railway domain
```

If password protection is enabled, set the credentials:
```bash
railway variables set AUTH_USER=<username> AUTH_PASS=<password>
```

Then trigger a redeploy so the env vars take effect:
```bash
railway up --detach
```

## Phase 8: Summary

Print a summary for the user:
- Live URL
- Credentials (if auth enabled)
- GitHub repo URL
- How to redeploy: `railway up --detach`
- How to check logs: visit the Railway dashboard link

## Interactive Checkpoints

Ask the user before proceeding at these points:
1. **Git remote** — which repo to use or whether to create one
2. **Password protection** — yes/no, and if yes, username + password (offer to generate a memorable password)
3. **Main HTML file** — if multiple HTML files exist, which is the entry point
4. **Railway project** — new or existing

## Redeployment

If the project is already set up (has git, server, Railway link), the redeploy flow is just:
```bash
git add . && git commit -m "Update" && git push
railway up --detach
```

Detect this by checking if `railway status` returns a linked project.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails: "could not determine how to build" | Missing `package.json` — make sure it's committed and pushed |
| Build fails: "start script not found" | Add `"start": "node server.js"` to package.json scripts |
| 502 after deploy | Check `railway logs` — usually a crash in server.js |
| Auth not working | Verify env vars: `railway variables` — then redeploy |
| Domain not resolving | Wait 1-2 minutes for DNS propagation |
