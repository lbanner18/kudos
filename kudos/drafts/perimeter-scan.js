// Template: Perimeter scan. Fill in every [[prompt]] with what your team actually did.
window.INJECT_TYPES.push({
  "id": "perimeter-scan",
  "name": "Perimeter scan",
  "description": "Masscan the perimeter, Nmap the hosts it finds, and table what should be exposed; Nmap per server; internal vulnerability scans.",
  "variants": [
    {
      "id": "masscan-nmap",
      "name": "Masscan → Nmap perimeter assessment",
      "subject": "Perimeter Assessment",
      "to": "CISO",
      "vars": [
        {
          "key": "public_net",
          "label": "Public network",
          "placeholder": "172.25.27.0/24"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "masscan",
          "heading": "Masscan",
          "text": "```\n[[Paste the commands, script, or output]]\n```\n\n[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Masscan command and results"
          ]
        },
        {
          "id": "nmap",
          "heading": "Nmap on Hosts Discovered by Masscan",
          "text": "```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "Nmap TCP scan results",
            "Nmap UDP scan results"
          ]
        },
        {
          "id": "table",
          "heading": "Results",
          "text": "[[Write this section: Results]]",
          "table": {
            "columns": [
              "Hostname",
              "OS / Version",
              "Private IP",
              "Public IP",
              "Services",
              "Ports",
              "Should it be exposed externally?"
            ],
            "hostRows": {
              "filter": "all",
              "cells": [
                "{{host}}",
                "{{host_os}}",
                "{{host_ip}}",
                "",
                "",
                "",
                ""
              ]
            },
            "rows": []
          }
        },
        {
          "id": "action",
          "heading": "Actions Taken",
          "on": false,
          "text": "[[Write this section: Actions Taken]]"
        }
      ]
    },
    {
      "id": "nmap-per-server",
      "name": "Nmap exposed services, one section per server",
      "new": true,
      "subject": "Exposed Services of Each Server",
      "to": "CISO",
      "vars": [
        {
          "key": "public_net",
          "label": "Public network",
          "placeholder": "172.25.27.0/24"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "process",
          "heading": "Process and Tool Used",
          "text": "[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```"
        },
        {
          "id": "hosts",
          "heading": "",
          "text": "",
          "perHost": {
            "filter": "all",
            "label": "{{host}} ({{host_ip}})",
            "text": "[[Services found on {{host}} and whether each needs to be exposed]]",
            "evidence": [
              "Nmap discovering services on {{host}}"
            ],
            "table": {
              "columns": [
                "Service",
                "Protocol",
                "Port",
                "Needed Externally?",
                "Mitigation"
              ],
              "rows": [
                [
                  "",
                  "",
                  "",
                  "",
                  ""
                ],
                [
                  "",
                  "",
                  "",
                  "",
                  ""
                ]
              ]
            }
          }
        },
        {
          "id": "fw",
          "heading": "Why No Unneeded Services Were Found",
          "on": false,
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Firewall rules limiting exposed services"
          ]
        }
      ]
    },
    {
      "id": "internal-vuln",
      "name": "Internal vulnerability scan (OpenVAS)",
      "new": true,
      "subject": "Assessment of Internal Device Vulnerabilities",
      "to": "CISO",
      "vars": [
        {
          "key": "tool",
          "label": "Scanner",
          "default": "OpenVAS"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "process",
          "heading": "Process and Tool Used",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]"
        },
        {
          "id": "scope",
          "heading": "Scan Scope",
          "text": "[[Write this section: Scan Scope]]"
        },
        {
          "id": "evidence",
          "heading": "Evidence of the Scan",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{tool}} scan running",
            "{{tool}} scan results"
          ]
        },
        {
          "id": "table",
          "heading": "Findings",
          "text": "",
          "table": {
            "columns": [
              "Device",
              "Service",
              "Analysis of Vulnerabilities"
            ],
            "hostRows": {
              "filter": "all",
              "cells": [
                "{{host}} ({{host_ip}})",
                "",
                ""
              ]
            },
            "rows": []
          }
        },
        {
          "id": "mitigate",
          "heading": "Mitigations",
          "on": false,
          "text": "[[Write this section: Mitigations]]"
        }
      ]
    }
  ]
});
