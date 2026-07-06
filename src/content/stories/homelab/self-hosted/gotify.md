---
title: "Gotify"
description: "Self-hosted push notification service."
pubDate: 2025-06-12
image: "/images/stories/self-hosted/gotify.webp"
imageAlt: "Simple Notification Server"
---

*Simple Notification Server*

Gotify is a simple server for sending and receiving push notifications, allowing you to get notifications from your scripts and applications directly on your phone.

## Key Features

- REST API for sending messages
- WebSocket real-time delivery
- Android app support
- Message priorities
- Application tokens
- Plugin support

## Why I Use It

Gotify was the first notification service I set up in my homelab, and it became the central hub for alerts across everything. Proxmox supports it natively, so backup results, node alerts, and other system events flow straight in. For services that don't have built-in Gotify support, I route them through Apprise, which acts as a bridge — it speaks whatever notification format a service uses and forwards it to Gotify. That combination means pretty much anything can send me a notification, regardless of whether it knows what Gotify is. There is even a app available on the Google Play store.

---

**Links:** [GitHub](https://github.com/gotify/server) · [Official Site](https://gotify.net)
