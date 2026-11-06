// Template: Endpoint protection. Fill in every [[prompt]] with what your team actually did.
window.INJECT_TYPES.push({
  "id": "endpoint-protection",
  "name": "Endpoint protection",
  "description": "Wazuh agents and ClamAV (or RedBaron) on every host, with scans and dashboard evidence; open-source anti-malware on every Linux and Windows device.",
  "variants": [
    {
      "id": "wazuh-clamav",
      "name": "Deploy Wazuh agents + ClamAV",
      "subject": "Deploy End-Point Protection",
      "to": "CISO",
      "vars": [
        {
          "key": "wazuh_host",
          "label": "Wazuh dashboard host",
          "placeholder": "Ubuntu Workstation"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "dashboard",
          "heading": "Wazuh Dashboard",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Wazuh dashboard showing all agents connected"
          ]
        },
        {
          "id": "why",
          "heading": "Why ClamAV",
          "on": false,
          "text": "[[Write this section: Why ClamAV]]"
        },
        {
          "id": "linux",
          "heading": "Completion on Linux Devices",
          "text": "",
          "perHost": {
            "filter": "linux",
            "label": "{{host}}:",
            "evidence": [
              "Wazuh agent running on {{host}}",
              "ClamAV enabled and running on {{host}}",
              "Full system scan on {{host}}"
            ]
          }
        },
        {
          "id": "windows",
          "heading": "Completion on Windows Devices",
          "text": "",
          "perHost": {
            "filter": "windows",
            "label": "{{host}}:",
            "evidence": [
              "Wazuh agent running on {{host}}",
              "ClamAV installed on {{host}}",
              "Full system scan on {{host}}"
            ]
          }
        },
        {
          "id": "findings",
          "heading": "Malware Detection",
          "text": "[[Write this section: Malware Detection]]\n\n- [[Item]]"
        },
        {
          "id": "alt",
          "heading": "",
          "on": false,
          "text": "[[Write this paragraph]]"
        }
      ]
    },
    {
      "id": "open-source",
      "name": "Open-source anti-malware on Linux & Windows",
      "description": "An open-source tool on every Linux and Windows device (one per platform is fine), a screenshot on one device per platform, and a list of every device, with Linux and Windows in separate tables.",
      "subject": "Anti-Malware on End Devices",
      "to": "CISO",
      "vars": [
        {
          "key": "linux_tool",
          "label": "Linux tool"
        },
        {
          "key": "windows_tool",
          "label": "Windows tool"
        },
        {
          "key": "linux_example",
          "label": "Example Linux device"
        },
        {
          "key": "windows_example",
          "label": "Example Windows device"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "linux",
          "heading": "{{linux_tool}} Use and Installation",
          "text": "[[Why this tool for the Linux devices (it must be open-source), how it was installed, and how scans are scheduled]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "{{linux_tool}} installed and scanning on {{linux_example}}"
          ]
        },
        {
          "id": "windows",
          "heading": "{{windows_tool}} Use and Installation",
          "text": "[[Why this tool for the Windows devices (it must be open-source), how it was installed, and how scans are scheduled]]",
          "evidence": [
            "{{windows_tool}} installed and scanning on {{windows_example}}"
          ]
        },
        {
          "id": "linux-devices",
          "heading": "Linux Devices",
          "text": "",
          "table": {
            "columns": [
              "Device",
              "{{linux_tool}} Installation Status"
            ],
            "rows": [],
            "hostRows": {
              "filter": "linux",
              "cells": [
                "{{host}}",
                ""
              ]
            }
          }
        },
        {
          "id": "windows-devices",
          "heading": "Windows Devices",
          "text": "",
          "table": {
            "columns": [
              "Device",
              "{{windows_tool}} Installation Status"
            ],
            "rows": [],
            "hostRows": {
              "filter": "windows",
              "cells": [
                "{{host}}",
                ""
              ]
            }
          }
        }
      ]
    }
  ]
});
