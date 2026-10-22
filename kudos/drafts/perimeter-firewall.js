// Template: Perimeter firewall. Fill in every [[prompt]] with what your team actually did.
window.INJECT_TYPES.push({
  "id": "perimeter-firewall",
  "name": "Perimeter firewall",
  "description": "Least-privilege rule rewrites, policies as found vs. changed, policy inventories, rule-base evaluations, screening firewalls, inter-segment rules and isolation design, NAT/PAT, SSL decryption, and exports for auditors.",
  "variants": [
    {
      "id": "least-privilege",
      "name": "Rewrite policy to least privilege + IPS",
      "subject": "Perimeter Firewall Configuration",
      "to": "Network Operations Management",
      "vars": [
        {
          "key": "fw1",
          "label": "Firewall 1",
          "default": "Palo Alto"
        },
        {
          "key": "fw2",
          "label": "Firewall 2",
          "default": "Cisco FTD"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "before",
          "heading": "",
          "text": "[[Write this paragraph]]"
        },
        {
          "id": "fw1",
          "heading": "{{fw1}} Firewall",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{fw1}} security policy",
            "Dropped packets being logged on the {{fw1}}",
            "IPS security profile attached to each rule"
          ]
        },
        {
          "id": "fw2",
          "heading": "{{fw2}} Firewall",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{fw2}} access control rules",
            "Intrusion policy enabled on each rule"
          ]
        }
      ]
    },
    {
      "id": "inventory",
      "name": "Security policy inventory tables",
      "subject": "Security Policy Inventory",
      "to": "System Administrator",
      "vars": [
        {
          "key": "fw1",
          "label": "Firewall 1",
          "default": "Palo Alto"
        },
        {
          "key": "fw2",
          "label": "Firewall 2",
          "default": "Cisco FirePower"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "fw1",
          "heading": "Outside to Inside Traffic Flow – {{fw1}}",
          "text": "",
          "table": {
            "columns": [
              "Host IP Address or Network Address",
              "Application Protocol, Transport Protocol, or Port Number",
              "Which Rule in the FW Policy Implements",
              "Additional Notes"
            ],
            "hostRows": {
              "filter": "linux",
              "cells": [
                "{{host_ip}} ({{host}})",
                "",
                "",
                ""
              ]
            },
            "rows": []
          }
        },
        {
          "id": "fw1-notes",
          "heading": "",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{fw1}} security policy with security profiles and logging"
          ]
        },
        {
          "id": "fw2",
          "heading": "Outside to Inside Traffic Flow – {{fw2}}",
          "text": "",
          "table": {
            "columns": [
              "Host IP Address or Network Address",
              "Application Protocol, Transport Protocol, or Port Number",
              "Which Rule in the FW Policy Implements",
              "Additional Notes"
            ],
            "hostRows": {
              "filter": "windows",
              "cells": [
                "{{host_ip}} ({{host}})",
                "",
                "",
                ""
              ]
            },
            "rows": []
          }
        },
        {
          "id": "fw2-notes",
          "heading": "",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{fw2}} rules with intrusion and file policy icons highlighted"
          ]
        },
        {
          "id": "transport",
          "heading": "Transport-Level Rules",
          "on": false,
          "text": "[[Write this section: Transport-Level Rules]]"
        }
      ]
    },
    {
      "id": "evaluate",
      "name": "Evaluate firewall rule base",
      "subject": "Firewall & Rule Base",
      "to": "CISO",
      "vars": [
        {
          "key": "fw1",
          "label": "Firewall",
          "default": "Palo Alto Firewall 1"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "in",
          "heading": "{{fw1}}: Inbound Firewall Rules",
          "text": "",
          "table": {
            "columns": [
              "Service",
              "Firewall Rule",
              "IPS Enabled",
              "Assessment"
            ],
            "rows": [
              [
                "Web",
                "",
                "",
                ""
              ],
              [
                "Mail (SMTP / POP3)",
                "",
                "",
                ""
              ],
              [
                "Workstation (no services)",
                "",
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "out",
          "heading": "{{fw1}}: Outbound Firewall Rules",
          "text": "",
          "table": {
            "columns": [
              "Service",
              "Firewall Rule",
              "IPS Enabled",
              "Assessment"
            ],
            "rows": [
              [
                "Web",
                "",
                "",
                ""
              ],
              [
                "Workstation (no services)",
                "",
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "updated",
          "heading": "Updated Rules",
          "text": "",
          "evidence": [
            "All updated firewall rules on {{fw1}}"
          ]
        }
      ]
    },
    {
      "id": "screening",
      "name": "Build a screening firewall (router)",
      "subject": "Build a Screening Firewall",
      "to": "CISO",
      "vars": [
        {
          "key": "router",
          "label": "Router",
          "default": "VyOS router"
        },
        {
          "key": "siem",
          "label": "SIEM",
          "default": "Splunk"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "intro",
          "heading": "",
          "text": "[[Write this paragraph]]"
        },
        {
          "id": "cmds",
          "heading": "Configured Commands for Packet Filtering",
          "text": "[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```\n\n[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```\n\n[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```\n\n[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "Screening firewall configuration on the {{router}}"
          ]
        },
        {
          "id": "logging",
          "heading": "Denied Packets Logging",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{siem}} forwarder installed and running on the {{router}}",
            "{{siem}} dashboard showing denied packet logs coming from the {{router}}"
          ]
        }
      ]
    },
    {
      "id": "inter-segment",
      "name": "Inter-segment security rules",
      "subject": "Limit Cross Segment Traffic",
      "to": "CISO",
      "vars": [
        {
          "key": "router",
          "label": "Device the rules are on",
          "default": "VyOS router"
        },
        {
          "key": "allowed",
          "label": "Traffic still allowed"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "rule",
          "heading": "Inter-Segment Rules",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Firewall rules on the {{router}} limiting cross-segment traffic"
          ]
        },
        {
          "id": "table",
          "heading": "Allowed Cross-Segment Traffic",
          "on": false,
          "text": "",
          "table": {
            "columns": [
              "Source Segment",
              "Destination",
              "Service / Port",
              "Business Reason"
            ],
            "rows": [
              [
                "",
                "",
                "",
                ""
              ]
            ]
          }
        }
      ]
    },
    {
      "id": "posture",
      "name": "Document network security posture",
      "subject": "Network Security Posture",
      "to": "COO",
      "vars": [
        {
          "key": "siem",
          "label": "SIEM",
          "default": "Splunk"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "netfw",
          "heading": "Network Firewall Configuration",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Network firewall configuration"
          ]
        },
        {
          "id": "hostfw",
          "heading": "Host Firewall Configuration (iptables, Windows Defender Firewall)",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Windows host firewall rules",
            "Linux host firewall rules"
          ]
        },
        {
          "id": "pw",
          "heading": "Domain Password Policy",
          "text": "[[Write this section: Domain Password Policy]]"
        },
        {
          "id": "siem",
          "heading": "Log Forwarding Using a SIEM",
          "text": "[[Write this section: Log Forwarding Using a SIEM]]"
        },
        {
          "id": "svc",
          "heading": "Disabling Unnecessary Services",
          "text": "[[Write this section: Disabling Unnecessary Services]]"
        },
        {
          "id": "tls",
          "heading": "Secure Web Connections",
          "on": false,
          "text": "[[Write this section: Secure Web Connections]]"
        },
        {
          "id": "backup",
          "heading": "Backing Up Essential Services and Information",
          "text": "[[Write this section: Backing Up Essential Services and Information]]"
        },
        {
          "id": "harden",
          "heading": "Hardening Individual Services",
          "text": "[[Write this section: Hardening Individual Services]]"
        }
      ]
    },
    {
      "id": "export",
      "name": "Export firewall policy for auditors",
      "subject": "Firewall Security Policy Export",
      "to": "Audit Team",
      "vars": [
        {
          "key": "fw1",
          "label": "Firewall(s)"
        },
        {
          "key": "export_file",
          "label": "Attached file name",
          "placeholder": "palo_policies.txt"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "how",
          "heading": "How the Policy Was Exported",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]",
          "evidence": [
            "Exported policy on the firewall",
            "Contents of the exported policy file"
          ]
        },
        {
          "id": "notes",
          "heading": "Notes for Auditors",
          "text": "[[Write this section: Notes for Auditors]]"
        }
      ]
    },
    {
      "id": "as-found",
      "name": "Firewall policy as found vs. changes made",
      "subject": "Perimeter Firewall Setup and Configuration",
      "to": "Network Operations Management",
      "vars": [
        {
          "key": "fw1",
          "label": "Firewall 1",
          "default": "Palo Alto"
        },
        {
          "key": "fw2",
          "label": "Firewall 2",
          "default": "Cisco FTD"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "found-fw1",
          "heading": "{{fw1}}: Policy As Found",
          "text": "",
          "table": {
            "columns": [
              "Rule",
              "Source",
              "Destination",
              "Application / Service",
              "Action"
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
              ],
              [
                "",
                "",
                "",
                "",
                ""
              ]
            ]
          },
          "evidence": [
            "{{fw1}} security policy as found"
          ]
        },
        {
          "id": "changes-fw1",
          "heading": "{{fw1}}: Changes Made",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "table": {
            "columns": [
              "Rule",
              "Change",
              "Reason"
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
              ]
            ]
          },
          "evidence": [
            "{{fw1}} security policy after changes",
            "Packet inspection enabled on {{fw1}} rules",
            "Denied packets logged on {{fw1}}"
          ]
        },
        {
          "id": "found-fw2",
          "heading": "{{fw2}}: Policy As Found",
          "text": "",
          "table": {
            "columns": [
              "Rule",
              "Source",
              "Destination",
              "Application / Service",
              "Action"
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
              ],
              [
                "",
                "",
                "",
                "",
                ""
              ]
            ]
          },
          "evidence": [
            "{{fw2}} security policy as found"
          ]
        },
        {
          "id": "changes-fw2",
          "heading": "{{fw2}}: Changes Made",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "table": {
            "columns": [
              "Rule",
              "Change",
              "Reason"
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
              ]
            ]
          },
          "evidence": [
            "{{fw2}} security policy after changes",
            "Packet inspection enabled on {{fw2}} rules",
            "Denied packets logged on {{fw2}}"
          ]
        }
      ]
    },
    {
      "id": "isolation-design",
      "name": "Design network isolation between segments",
      "subject": "Network Isolation Between Segments",
      "to": "CISO",
      "vars": [],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "req",
          "heading": "Requirement",
          "text": "[[Write this section: Requirement]]"
        },
        {
          "id": "caps",
          "heading": "Capabilities in Our Existing Infrastructure",
          "text": "- **[[Item]]:** [[Describe]]\n- **[[Item]]:** [[Describe]]\n- **[[Item]]:** [[Describe]]"
        },
        {
          "id": "design",
          "heading": "Design",
          "text": "[[Write this section: Design]]",
          "table": {
            "columns": [
              "Source Segment",
              "Destination Segment",
              "Allowed Service / Port",
              "Logged?"
            ],
            "rows": [
              [
                "",
                "",
                "",
                ""
              ],
              [
                "",
                "",
                "",
                ""
              ],
              [
                "",
                "",
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "impl",
          "heading": "Implementation Evidence",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Inter-segment rules",
            "Unexpected inter-segment packets being logged"
          ]
        },
        {
          "id": "logs",
          "heading": "Using the Logs to Find Compromised Machines",
          "text": "[[Write this section: Using the Logs to Find Compromised Machines]]"
        }
      ]
    },
    {
      "id": "nat-sessions",
      "name": "Examine NAT / PAT sessions",
      "subject": "Address Translation on the {{fw1}} Firewall",
      "to": "CISO",
      "vars": [
        {
          "key": "fw1",
          "label": "Firewall",
          "default": "Palo Alto"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "policy",
          "heading": "Address Translation Policy",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "NAT policy on the {{fw1}}"
          ]
        },
        {
          "id": "mapping",
          "heading": "Public and Private Addressing",
          "text": "",
          "table": {
            "columns": [
              "Host",
              "Private Address",
              "Public Address",
              "Translation"
            ],
            "hostRows": {
              "filter": "all",
              "cells": [
                "{{host}}",
                "{{host_ip}}",
                "",
                ""
              ]
            },
            "rows": []
          }
        },
        {
          "id": "natpat",
          "heading": "NAT or PAT?",
          "text": "[[Write this section: NAT or PAT?]]"
        },
        {
          "id": "diff",
          "heading": "Differences Between NAT and PAT",
          "text": "[[Write this section: Differences Between NAT and PAT]]"
        },
        {
          "id": "sessions",
          "heading": "Current Session Table",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Current session table on the {{fw1}}"
          ]
        }
      ]
    },
    {
      "id": "ssl-decryption",
      "name": "Configure SSL decryption (Palo Alto)",
      "subject": "SSL Decryption on the {{fw1}} Firewall",
      "to": "CISO",
      "vars": [
        {
          "key": "fw1",
          "label": "Firewall",
          "default": "Palo Alto"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "steps",
          "heading": "Configuration Steps",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]",
          "evidence": [
            "Self-signed certificate on the {{fw1}}",
            "Decryption profile",
            "Decryption policy rule"
          ]
        },
        {
          "id": "why",
          "heading": "Why SSL Decryption Is Useful",
          "text": "[[Write this section: Why SSL Decryption Is Useful]]"
        },
        {
          "id": "exclude",
          "heading": "Traffic That Should Not Be Decrypted",
          "text": "[[Write this section: Traffic That Should Not Be Decrypted]]",
          "table": {
            "columns": [
              "Traffic / Site Category",
              "Reason"
            ],
            "rows": [
              [
                "",
                ""
              ],
              [
                "",
                ""
              ],
              [
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "test",
          "heading": "Testing",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Decrypted traffic in the {{fw1}} logs"
          ]
        }
      ]
    }
  ]
});
