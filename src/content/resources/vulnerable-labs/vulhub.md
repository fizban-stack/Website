---
title: "Vulhub"
tagline: "Pre-built vulnerability environments for CVEs"
description: "Massive collection of 200+ pre-built vulnerable Docker environments for real-world CVEs, making vulnerability research and PoC testing accessible."
website: "https://vulhub.org/"
github: "https://github.com/vulhub/vulhub"
labType: "Docker Compose"
image: "/images/resources/vulnerable-labs/vulhub.webp"
imageAlt: "Vulhub logo"
---

Vulhub is a comprehensive collection of pre-built vulnerable environments based on Docker-Compose, covering 200+ real-world CVEs.

## Overview

Vulhub makes vulnerability research accessible by providing ready-to-deploy vulnerable environments for testing exploits, developing security tools, and learning about real vulnerabilities.

## Coverage

- **200+ Vulnerabilities**: Real CVEs with PoCs
- **Multiple Categories**: Web, infrastructure, applications
- **Active Maintenance**: Regular updates
- **One-Command Deploy**: Simple setup

## Categories

### Web Applications
- WordPress, Drupal, Joomla vulnerabilities
- CMS exploits
- Web framework issues

### Infrastructure
- Apache, Nginx misconfigurations
- Redis, MongoDB vulnerabilities
- Database exploits

### Applications
- Java deserialization
- PHP vulnerabilities
- Python framework issues

### Services
- SMB, FTP vulnerabilities
- Mail server exploits
- DNS issues

## Deployment

```bash
# Clone repository
git clone https://github.com/vulhub/vulhub.git
cd vulhub

# Navigate to specific vulnerability
cd [vulnerability-directory]

# Deploy
docker-compose up -d
```

## Use Cases

- CVE research and analysis
- Exploit development
- Security tool testing
- Vulnerability scanning validation
- Security training
- Bug bounty preparation

## Features

- Isolated environments
- Reproducible setups
- Documented vulnerabilities
- Version-specific targets
- Easy cleanup

Essential for security researchers, penetration testers, and anyone involved in vulnerability assessment.
