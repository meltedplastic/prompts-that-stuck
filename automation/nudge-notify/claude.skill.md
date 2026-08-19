---
name: nudge-notify
description: "Send branded emails as Nudge (nudge@eselfin.com) via n8n workflow. Use when the user asks to email someone, notify someone, send a message to a team member, ping Max, or any request involving outbound email communication. Also trigger for phrases like 'email Max about...', 'let them know...', 'send a nudge to...', 'notify about...', or '/nudge'."
---

# Nudge Notify

Send branded HTML emails as nudge@eselfin.com via the n8n Nudge Notify workflow.

## Setup

- **Workflow ID**: `X9C0LTNw6x6TPpUu`
- **Send as**: nudge@eselfin.com
- **Replies go to**: sam@eselfin.com (Gmail alias)
- **Sign-off**: "– Nudge"
- **Tool**: `execute_workflow` with type `webhook`

## Workflow

### Step 1: Draft the email

Before sending, ALWAYS show the user a preview:

```
**To:** recipient@example.com
**Subject:** Subject line here

Body content here...
```

Wait for user confirmation ("send", "yes", "looks good", etc.) before proceeding.

### Step 2: Build the HTML template

Use this template structure. Replace `{{SUBJECT}}`, `{{BODY_HTML}}`, and `{{BODY_PLAIN}}` with actual content.

```
AVATAR_URL = https://drive.google.com/uc?export=view&id=1M7YM5Y4APVMY8YKG2pV5rQDip-rO2mal
```

HTML template:

```html
<div style="font-family:-apple-system,system-ui,'Segoe UI',Roboto,sans-serif;max-width:560px;margin:0 auto;padding:20px;">
  <div style="background:#ffffff;border-radius:16px;border:1px solid #e5e5e5;overflow:hidden;">
    <div style="background:#111111;padding:32px 0;text-align:center;">
      <img src="{{AVATAR_URL}}" alt="Nudge" style="width:80px;height:80px;border-radius:50%;border:3px solid #333;" />
    </div>
    <div style="padding:32px 28px;">
      {{BODY_HTML}}
    </div>
    <div style="padding:0 28px 24px;border-top:1px solid #f0f0f0;padding-top:16px;">
      <p style="color:#999;font-size:13px;margin:0;">&ndash; Nudge</p>
    </div>
  </div>
</div>
```

Body HTML formatting rules:
- Paragraphs: `<p style="color:#444;font-size:15px;line-height:1.6;margin:0 0 16px;">`
- Bold: `<strong>`
- Code/IDs: `<code style="background:#f0f0f0;padding:2px 6px;border-radius:4px;font-size:13px;">`
- Lists: `<ul style="color:#444;font-size:15px;line-height:1.8;margin:0 0 16px;padding-left:20px;">`
- Metadata line: `<p style="color:#888;font-size:13px;line-height:1.5;margin:0 0 16px;">`
- Use `&mdash;` for em dashes, `&middot;` for separators

### Step 3: Send via execute_workflow

```javascript
execute_workflow({
  workflowId: "X9C0LTNw6x6TPpUu",
  inputs: {
    type: "webhook",
    webhookData: {
      method: "POST",
      body: {
        channel: "email",
        to: "recipient@example.com",
        subject: "Subject line",
        html: "<full HTML template>",
        body: "Plaintext fallback version",
        cc: ""  // optional
      }
    }
  }
})
```

### Step 4: Confirm delivery

Check the response:
- `success: true` → Tell user "Sent to [recipient]"
- `success: false` → Show error, suggest fallback (Gmail draft via `gmail_create_draft`)

## Email Style Guide

- **Tone**: Direct, technical, actionable
- **Structure**: Greeting → Context → Details → Next steps (if any)
- **Include GitHub issue links** when referencing dev work
- **No fluff** — get to the point
- **Always include plaintext body** as fallback

## Known Recipients

- **Max**: max@ampdlabs.io — dev requests, migrations, deployments, code reviews
- **Sam**: sam@eselfin.com — test emails, self-notifications

## Fallback

If the n8n workflow is unavailable (error, timeout), fall back to:
```
gmail_create_draft({ to, subject, body })
```
And tell the user: "Workflow unavailable — created a Gmail draft instead. Hit send manually."
