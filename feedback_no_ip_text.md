---
name: No IP address text in UI
description: Never show IP address related text in the app UI - user explicitly forbids it
type: feedback
---

Never display any IP address text in the app UI (logs, status messages, alerts).

**Why:** User explicitly said "不准有任何关于IP地址的提示" — no IP mentions anywhere in the UI.

**How to apply:** When writing log messages or status updates related to IP rotation, cooldown, or network switching, use generic messages like "系统冷却5分钟，请稍后再试" instead of mentioning IP addresses.
