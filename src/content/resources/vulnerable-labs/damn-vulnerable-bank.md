---
title: "Damn Vulnerable Bank"
tagline: "Mobile banking security and API vulnerabilities"
description: "Intentionally vulnerable Android banking application with backend API demonstrating mobile-specific vulnerabilities and backend API security issues for financial applications."
website: "https://github.com/rewanthtammana/Damn-Vulnerable-Bank"
github: "https://github.com/rewanthtammana/Damn-Vulnerable-Bank"
labType: "Android APK"
image: "/images/resources/vulnerable-labs/damn-vulnerable-bank.webp"
imageAlt: "Damn Vulnerable Bank logo"
---

Damn Vulnerable Bank is an intentionally vulnerable Android banking application with a backend API server, created to demonstrate both mobile client-side and server-side security vulnerabilities in financial applications.

## Overview

Created by Rewanth Tammana, Damn Vulnerable Bank provides a comprehensive platform for learning about mobile banking security, covering both the Android application vulnerabilities and API security issues. The architecture includes an Android client (APK), a Node.js/Express backend, a MySQL database, and Swagger API documentation.

## Key Features

- **Full-Stack Banking App**: Android client with backend API server
- **OWASP Mobile Top 10**: Complete mobile vulnerability coverage
- **OWASP API Security Top 10**: Backend API vulnerabilities included
- **Banking Business Logic Flaws**: Negative transfers, race conditions, transaction replay
- **Multiple Difficulty Levels**: Beginner through advanced challenges
- **Docker Support**: Quick backend deployment with docker-compose
- **Realistic Scenarios**: Mirrors vulnerabilities found in production banking apps

## Technology Stack

- **Mobile**: Java/Kotlin for Android
- **Backend**: Node.js, Express
- **Database**: MySQL
- **API**: RESTful JSON API
- **Auth**: JWT tokens

## Getting Started

```bash
# Clone and start backend
git clone https://github.com/rewanthtammana/Damn-Vulnerable-Bank.git
cd Damn-Vulnerable-Bank
docker-compose up -d

# Install the Android app
adb install DamnVulnerableBank.apk
```

## Vulnerability Categories

- Insecure Data Storage (SharedPreferences, SQLite, logs)
- Insecure Communication and Missing Certificate Pinning
- Weak Authentication and Predictable Session Tokens
- Insufficient Cryptography and Hardcoded Keys
- IDOR and Insecure Authorization
- Code Tampering, Root Detection Bypass, and Repackaging
- Reverse Engineering and Missing Obfuscation
- Exported Components (Activities, Broadcast Receivers, Content Providers)
- WebView JavaScript Interface Exploitation
- Broken Object Level Authorization
- JWT Secret Exposure and Token Manipulation
- Mass Assignment and Privilege Escalation
- SQL Injection and Command Injection
- Business Logic Flaws (Negative Transfers, Race Conditions, Integer Overflow)

## Use Cases

- **Mobile Security Training**: University courses and corporate workshops
- **Penetration Testing Practice**: Mobile banking assessment and API testing skills
- **Bug Bounty Preparation**: Practice finding real-world mobile vulnerability patterns
- **Certification Preparation**: eMAPT, GMOB, and related certifications
- **Security Tool Validation**: Test mobile and API security scanners
