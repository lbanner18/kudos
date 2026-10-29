// Template: Host firewalls. Fill in every [[prompt]] with what your team actually did.
window.INJECT_TYPES.push({
  "id": "host-firewalls",
  "name": "Host firewalls",
  "description": "Default-deny host firewalls on Windows and Linux, with rules per server and a review of dropped packets, or a per-server policy summary.",
  "variants": [
    {
      "id": "default-deny",
      "name": "Default-deny host firewalls + review drops",
      "subject": "Server Software Firewalls",
      "to": "CISO",
      "vars": [],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "linux",
          "heading": "Firewall Rules on Linux Devices",
          "text": "",
          "perHost": {
            "filter": "linux",
            "label": "{{host}}:",
            "text": "[[Optional notes for {{host}}]]",
            "evidence": [
              "iptables rules on {{host}}"
            ]
          }
        },
        {
          "id": "windows",
          "heading": "Firewall Rules on Windows Devices",
          "text": "",
          "perHost": {
            "filter": "windows",
            "label": "{{host}}:",
            "text": "[[Optional notes for {{host}}]]",
            "evidence": [
              "Inbound rules on {{host}}",
              "Outbound rules on {{host}}",
              "Default policy and logging settings on {{host}}"
            ]
          }
        },
        {
          "id": "drops",
          "heading": "Packet Log Analysis",
          "text": "[[Write this section: Packet Log Analysis]]",
          "table": {
            "columns": [
              "Hostname",
              "Packet Log Analysis"
            ],
            "hostRows": {
              "filter": "all",
              "cells": [
                "{{host}}",
                ""
              ]
            },
            "rows": []
          }
        }
      ]
    },
    {
      "id": "policy-summary",
      "name": "Per-server firewall policy summary",
      "subject": "Server-Based Firewalls",
      "to": "CISO",
      "vars": [
        {
          "key": "linux_example",
          "label": "Example Linux server"
        },
        {
          "key": "windows_example",
          "label": "Example Windows server"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "hosts",
          "heading": "Security Policy on Each Server",
          "text": "",
          "perHost": {
            "filter": "all",
            "label": "{{host}}:",
            "text": "- Permits inbound [[protocol / port, from where]]\n- Allows return traffic for [[...]]\n- Allows outbound [[queries this server makes]] and the expected return\n- Denies and logs [[everything else]]"
          }
        },
        {
          "id": "linux",
          "heading": "Example Linux Server: {{linux_example}}",
          "text": "[[Name the product or OS feature that implements the firewall, and what the screenshot shows]]",
          "evidence": [
            "Firewall rules on {{linux_example}}"
          ]
        },
        {
          "id": "windows",
          "heading": "Example Windows Server: {{windows_example}}",
          "text": "[[Name the product or OS feature that implements the firewall, and what the screenshot shows]]",
          "evidence": [
            "Firewall rules on {{windows_example}}"
          ]
        }
      ],
      "description": "SVRA05A Configure Server-based Firewalls (MWCCDC Invitational #1 2026): a policy description for every server (inbound, return traffic, outbound and its return), plus screenshots of one Windows and one Linux server showing the rules and the product or OS feature used.",
      "checklist": [
        "Security policy description for each server",
        "Inbound, return, and outbound traffic covered",
        "Both Linux and Windows servers",
        "Screenshot of one Windows server: rules and firewall product/feature",
        "Screenshot of one Linux server: rules and firewall product/feature"
      ]
    }
  ]
});
