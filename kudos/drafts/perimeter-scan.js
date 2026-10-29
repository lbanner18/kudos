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
      "id": "nmap-config",
      "name": "Nmap configuration for the external perimeter (explain each option)",
      "description": "TOOL19T Develop NMAP Configuration (MWCCDC Invitational #1 2026): a command line that quickly finds TCP and UDP services on the external perimeter, every option explained with why it is used, and proof that it works. Not a vulnerability scan. The Invitational answer scanned internal addresses, had no UDP command, and explained only some of the options.",
      "subject": "Nmap Configuration for the External Perimeter",
      "to": "New Team Member",
      "vars": [
        {
          "key": "target",
          "label": "External perimeter address(es)"
        },
        {
          "key": "scanner",
          "label": "Scanning host"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "scope",
          "heading": "What We Scan and From Where",
          "text": "[[Which external address(es), scanned from where, and why the scan must come from outside the firewall]]"
        },
        {
          "id": "tcp",
          "heading": "TCP Command Line",
          "text": "```\n[[TCP command]]\n```"
        },
        {
          "id": "udp",
          "heading": "UDP Command Line",
          "text": "```\n[[UDP command]]\n```"
        },
        {
          "id": "options",
          "heading": "Each Option and Token Explained",
          "text": "[[One row per option or token in both commands, including the target]]",
          "table": {
            "columns": [
              "Option / Token",
              "What It Does",
              "Why We Use It"
            ],
            "rows": [
              [
                "",
                "",
                ""
              ],
              [
                "",
                "",
                ""
              ],
              [
                "",
                "",
                ""
              ],
              [
                "",
                "",
                ""
              ],
              [
                "",
                "",
                ""
              ],
              [
                "",
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "fast",
          "heading": "Efficient and Time-Constrained",
          "text": "[[How the commands stay within the time limit, and what that trades away]]"
        },
        {
          "id": "proof",
          "heading": "Evidence of a Working Command",
          "text": "[[What the output shows]]",
          "evidence": [
            "TCP scan of {{target}} from {{scanner}}",
            "UDP scan of {{target}} from {{scanner}}"
          ]
        }
      ],
      "checklist": [
        "Command-line configuration for NMAP against the external perimeter",
        "TCP and UDP command lines",
        "Each command-line option/token: what it does and the rationale",
        "Efficient and time-constrained",
        "Evidence of a working command"
      ]
    },
    {
      "id": "external-eval",
      "name": "External service evaluation (is each service needed?)",
      "description": "EVAL14A External Service Evaluation (MWCCDC Invitational #1 2026): scan the POD's external interface, name the tool, list the services and protocols an attacker could use, and decide whether each needs to be exposed. Risk Assessment scored 65 there: the scan ran against internal addresses and no service was judged needed or not. Scan from outside the firewall.",
      "subject": "External Service Evaluation",
      "to": "CISO",
      "vars": [
        {
          "key": "tool",
          "label": "Scanning tool"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "tool",
          "heading": "Tool Used",
          "text": "[[Which tool, why, run from where, against which external addresses]]\n\n```\n[[Paste the commands]]\n```",
          "evidence": [
            "{{tool}} scan of the external interface"
          ]
        },
        {
          "id": "services",
          "heading": "Services Available From Outside",
          "text": "[[Every service the scan found on the external interface]]",
          "table": {
            "columns": [
              "External IP",
              "Host",
              "Port / Protocol",
              "Service",
              "How an Attacker Could Use It",
              "Needs to Be Exposed?"
            ],
            "rows": [
              [
                "",
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
                "",
                ""
              ],
              [
                "",
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
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "udp",
          "heading": "UDP Results",
          "text": "[[What the UDP scan showed, including open|filtered results and how they were confirmed]]"
        },
        {
          "id": "assess",
          "heading": "Assessment and Recommendations",
          "text": "[[For each service that does not need to be exposed: what to change. For each that does: why it must stay and how it is protected]]"
        }
      ],
      "checklist": [
        "Identify the tool used to scan the POD's external interface",
        "Available services and protocols an attacker may leverage",
        "Assessment and recommendation: whether each service needs to be exposed externally"
      ]
    },
    {
      "id": "internal-vuln",
      "name": "Internal vulnerability scan (OpenVAS)",
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
