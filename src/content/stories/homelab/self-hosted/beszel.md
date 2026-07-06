---
title: "Beszel"
description: "Server monitoring software."
pubDate: 2025-06-12
image: "/images/stories/self-hosted/beszel.webp"
imageAlt: "Lightweight Server Monitoring Dashboard"
---

*Lightweight Server Monitoring Dashboard*

Beszel is a lightweight server monitoring solution that provides real-time insights into your server's performance and health.

## Key Features

- Real-time server monitoring
- Resource usage tracking (CPU, RAM, Disk)
- Clean and intuitive dashboard
- Lightweight and efficient

## Why I Use It

Beszel is what I recommend to anyone who wants server monitoring without the setup overhead of a full Prometheus and Grafana stack. Installing an agent on each host and pointing it at the Beszel server is genuinely all it takes — the metrics start flowing immediately and the dashboard just works. The trade-off compared to Grafana is flexibility: you can not build completely custom queries or panels, but for standard CPU, memory, disk, and network monitoring, everything you need is already there out of the box. Agent-to-server communication is encrypted, it runs in Docker with minimal resources, and it does not get in the way of what it is monitoring.

## Installation Notes

I run Beszel in a Docker container on my Proxmox environment. It's incredibly easy to set up and requires minimal configuration.

---

**Links:** [GitHub](https://github.com/henrygd/beszel) · [Official Site](https://beszel.dev)
