---
title: "InfluxDB"
description: "Purpose-built time-series database for metrics and events."
pubDate: 2025-06-12
image: "/images/stories/self-hosted.svg"
imageAlt: "Self-Hosted illustration"
---

*Time-Series Database*

InfluxDB is a purpose-built time-series database designed for handling high write and query loads for metrics, events, and analytics.

## Key Features

- High-performance time-series storage
- SQL-like query language
- Data retention policies
- Continuous queries
- Built-in web interface
- Integration with Grafana

## Why I Use It

InfluxDB handles time-series data that works better with a push model — things like network device metrics, sensor readings, and data from services that write out to InfluxDB natively. Grafana queries it alongside Prometheus, so I can mix data sources within a single dashboard. The retention policies let me keep high-resolution data for a short window and automatically downsample older data, which keeps storage from growing unbounded. It is a focused tool that does one thing well and integrates cleanly with the rest of my monitoring stack.

---

**Links:** [GitHub](https://github.com/influxdata/influxdb) · [Official Site](https://www.influxdata.com)
