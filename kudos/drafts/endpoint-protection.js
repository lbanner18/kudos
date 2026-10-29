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
      "description": "SRVA07A Implement Anti-malware Tool on End Devices (MWCCDC Invitational #1 2026): an open-source tool on every Linux and Windows device (one per platform is fine), screenshots on one device per platform, and a list of every device. The prompt says open-source: fill in the license column to check that each tool you name is.",
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
          "id": "tools",
          "heading": "Tools Selected",
          "text": "[[Which tool on each platform and why it was chosen]]",
          "table": {
            "columns": [
              "Platform",
              "Tool",
              "Open-Source License",
              "Why This Tool"
            ],
            "rows": [
              [
                "Linux",
                "{{linux_tool}}",
                "",
                ""
              ],
              [
                "Windows",
                "{{windows_tool}}",
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "linux",
          "heading": "Implementation on Linux: {{linux_example}}",
          "text": "[[Install, signature updates, scheduled or real-time scanning, and what the screenshots show]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "{{linux_tool}} installed on {{linux_example}}",
            "Signature update and a test scan on {{linux_example}}",
            "Scheduled or real-time scanning on {{linux_example}}"
          ]
        },
        {
          "id": "windows",
          "heading": "Implementation on Windows: {{windows_example}}",
          "text": "[[Install, signature updates, scheduled or real-time scanning, and what the screenshots show]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "{{windows_tool}} installed on {{windows_example}}",
            "Signature update and a test scan on {{windows_example}}",
            "Scheduled or real-time scanning on {{windows_example}}"
          ]
        },
        {
          "id": "devices",
          "heading": "Devices With the Tool Installed",
          "text": "",
          "table": {
            "columns": [
              "Device",
              "OS",
              "Tool",
              "Version",
              "Signatures Updated",
              "Scan Schedule"
            ],
            "hostRows": {
              "filter": "all",
              "cells": [
                "{{host}}",
                "{{host_os}}",
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
          "id": "detections",
          "heading": "Detections",
          "on": false,
          "text": "[[Anything the first scans found, and what was done]]"
        }
      ],
      "checklist": [
        "Open-source anti-malware tool selected (per platform if needed)",
        "Implemented on all Linux and Windows devices",
        "Screenshots of the implementation on one Linux device",
        "Screenshots of the implementation on one Windows device",
        "List of all devices the tool is implemented on"
      ]
    }
  ]
});
