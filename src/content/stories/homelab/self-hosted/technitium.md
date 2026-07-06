---
title: "Technitium DNS Server"
description: "Self-hosted DNS server with web interface."
pubDate: 2025-06-12
image: "/images/stories/self-hosted/technitium.webp"
imageAlt: "Advanced DNS Server"
---

*Advanced DNS Server*

Technitium DNS Server is an open-source authoritative and recursive DNS server with advanced features and a web-based management interface.

## Key Features

- DNS server with web UI
- Ad blocking and filtering
- DHCP server support
- DNS-over-HTTPS and DNS-over-TLS
- Conditional forwarding
- Query logging and analytics

## Why I Use It

Running my own DNS server gives me control over name resolution across my entire network that you simply cannot get from using an upstream resolver. Technitium handles split-horizon DNS so my internal services resolve to private IPs from inside the network, custom local records for services and VMs, and conditional forwarding for different domains. The built-in ad and tracker blocking works at the DNS level across every device on the network without needing client-side software. The query logging and analytics show me exactly what every device is resolving, which is useful both for troubleshooting and for spotting anything unexpected on the network.

---

**Links:** [GitHub](https://github.com/TechnitiumSoftware/DnsServer) · [Official Site](https://technitium.com/dns)
