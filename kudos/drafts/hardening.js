// Template: Hardening / remove unneeded stuff. Fill in every [[prompt]] with what your team actually did.
window.INJECT_TYPES.push({
  "id": "hardening",
  "name": "Hardening / remove unneeded stuff",
  "description": "Hardening checklists, configuring to a list of guidelines, unnecessary software audits, cleaning up attacker debris, legacy Windows services and protocols, and SMB hardening.",
  "variants": [
    {
      "id": "checklist",
      "name": "Hardening checklist with industry controls",
      "subject": "Server Hardening",
      "to": "Network Operations Management",
      "vars": [],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "win",
          "heading": "Windows-Based Devices",
          "text": "",
          "evidence": [
            "Windows Defender Firewall enabled for domain, private, and public networks",
            "Local users audited (Get-LocalUser)",
            "Unnecessary services disabled"
          ],
          "table": {
            "columns": [
              "Hardening Technique",
              "Industry Control",
              "Implementation on Team {{team}} Devices"
            ],
            "rows": [
              [
                "Changing Default Credentials",
                "",
                ""
              ],
              [
                "Windows Defender Firewall",
                "",
                ""
              ],
              [
                "Disable SSH / unused remote access",
                "",
                ""
              ],
              [
                "",
                "",
                ""
              ],
              [
                "Disable Unnecessary Services",
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "lin",
          "heading": "Linux-Based Devices",
          "text": "",
          "evidence": [
            "Local users audited (awk -F: '$3 >= 1000 {print $1}' /etc/passwd)",
            "Host firewall rules",
            "SSH configuration"
          ],
          "table": {
            "columns": [
              "Hardening Technique",
              "Industry Control",
              "Implementation on Team {{team}} Devices"
            ],
            "rows": [
              [
                "Changing Default Credentials",
                "",
                ""
              ],
              [
                "Update Device",
                "",
                ""
              ],
              [
                "Host-Based Firewall",
                "",
                ""
              ],
              [
                "SSH Configuration",
                "",
                ""
              ],
              [
                "",
                "",
                ""
              ],
              [
                "Disable Unnecessary Services",
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "steps",
          "heading": "Steps Followed",
          "on": false,
          "text": "[[Write this section: Steps Followed]]\n\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n\n[[Write this section: Steps Followed]]\n\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n\n[[Write this section: Steps Followed]]"
        }
      ]
    },
    {
      "id": "unnecessary-software",
      "name": "Unnecessary software / services audit",
      "subject": "Removal of Unnecessary Applications",
      "to": "CTO",
      "vars": [],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "table",
          "heading": "Unnecessary Service Audit",
          "text": "",
          "table": {
            "columns": [
              "IP",
              "Name",
              "OS",
              "Unneeded Services/Applications",
              "Unneeded Ports"
            ],
            "hostRows": {
              "filter": "all",
              "cells": [
                "{{host_ip}}",
                "{{host}}",
                "{{host_os}}",
                "",
                ""
              ]
            },
            "rows": []
          }
        },
        {
          "id": "note",
          "heading": "",
          "text": "[[Write this paragraph]]"
        },
        {
          "id": "proof",
          "heading": "Proof of Removal",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "perHost": {
            "filter": "all",
            "label": "{{host}}:",
            "evidence": [
              "Unneeded services on {{host}} before removal",
              "Services stopped and removed on {{host}}"
            ]
          }
        }
      ]
    },
    {
      "id": "attacker-debris",
      "name": "Clean up attacker debris",
      "subject": "Removal of Malicious Remnants",
      "to": "IT Manager",
      "vars": [
        {
          "key": "actor",
          "label": "Who left it",
          "default": "the attacker"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "table",
          "heading": "",
          "text": "",
          "evidence": [
            "Malicious scheduled task / service removed",
            "Unauthorized sudo users removed"
          ],
          "table": {
            "columns": [
              "Hostname",
              "IP",
              "OS",
              "Remnants",
              "Resolution"
            ],
            "hostRows": {
              "filter": "all",
              "cells": [
                "{{host}}",
                "{{host_ip}}",
                "{{host_os}}",
                "",
                ""
              ]
            },
            "rows": []
          }
        }
      ]
    },
    {
      "id": "legacy-services",
      "name": "Legacy / unneeded Windows services",
      "subject": "Windows AD Server Unneeded Services",
      "to": "IT Director",
      "vars": [
        {
          "key": "server",
          "label": "Server audited",
          "default": "Windows 2019 AD/DNS server"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "how",
          "heading": "",
          "text": "[[Write this paragraph]]"
        },
        {
          "id": "needed",
          "heading": "Services",
          "text": "[[Describe what was done and what the evidence below shows]]\n\n- [[Item]]\n- [[Item]]\n\n[[Describe what was done and what the evidence below shows]]\n\n- [[Item]]\n- [[Item]]\n- [[Item]]",
          "evidence": [
            "Legacy services disabled on the {{server}}"
          ]
        },
        {
          "id": "ports",
          "heading": "Required Ports",
          "text": "[[Write this section: Required Ports]]",
          "table": {
            "columns": [
              "Service",
              "Port"
            ],
            "rows": [
              [
                "DNS",
                ""
              ],
              [
                "Kerberos",
                ""
              ],
              [
                "RPC Endpoint Mapper",
                ""
              ],
              [
                "LDAP",
                ""
              ],
              [
                "SMB",
                ""
              ],
              [
                "LDAP Global Catalog",
                ""
              ]
            ]
          }
        },
        {
          "id": "policy",
          "heading": "",
          "on": false,
          "text": "[[Write this paragraph]]"
        }
      ]
    },
    {
      "id": "smb",
      "name": "SMB hardening",
      "subject": "SMB Hardening",
      "to": "COO",
      "vars": [
        {
          "key": "share",
          "label": "Share",
          "default": "FTPRoot"
        },
        {
          "key": "server",
          "label": "Server",
          "placeholder": "the FTP server"
        },
        {
          "key": "client",
          "label": "Test client",
          "placeholder": "Cortex"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "steps",
          "heading": "Steps Taken",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{share}} connected over SMB",
            "{{share}} shared to the network",
            "Sharing disabled",
            "No {{share}} access over SMB"
          ]
        },
        {
          "id": "why",
          "heading": "Why This Matters",
          "text": "[[Write this section: Why This Matters]]"
        }
      ]
    },
    {
      "id": "guideline-sections",
      "name": "Configure to a list of guidelines (one section each)",
      "new": true,
      "subject": "Network Defensive Features",
      "to": "CISO",
      "vars": [
        {
          "key": "point_1",
          "label": "Guideline 1 (copy from the request)"
        },
        {
          "key": "point_2",
          "label": "Guideline 2"
        },
        {
          "key": "point_3",
          "label": "Guideline 3"
        },
        {
          "key": "point_4",
          "label": "Guideline 4 (if any)"
        },
        {
          "key": "point_5",
          "label": "Guideline 5 (if any)"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "g1",
          "heading": "{{point_1}}",
          "text": "### What This Guideline Asks For\n\n[[Write this section: Guideline 1]]\n\n### What We Configured\n\n[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Guideline 1 on an example Linux server",
            "Guideline 1 on an example Windows server"
          ]
        },
        {
          "id": "g2",
          "heading": "{{point_2}}",
          "text": "### What This Guideline Asks For\n\n[[Write this section: Guideline 2]]\n\n### What We Configured\n\n[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Guideline 2 on an example Linux server",
            "Guideline 2 on an example Windows server"
          ]
        },
        {
          "id": "g3",
          "heading": "{{point_3}}",
          "text": "### What This Guideline Asks For\n\n[[Write this section: Guideline 3]]\n\n### What We Configured\n\n[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Guideline 3 on an example Linux server",
            "Guideline 3 on an example Windows server"
          ]
        },
        {
          "id": "g4",
          "heading": "{{point_4}}",
          "on": false,
          "text": "### What This Guideline Asks For\n\n[[Write this section: Guideline 4]]\n\n### What We Configured\n\n[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Guideline 4 on an example Linux server",
            "Guideline 4 on an example Windows server"
          ]
        },
        {
          "id": "g5",
          "heading": "{{point_5}}",
          "on": false,
          "text": "### What This Guideline Asks For\n\n[[Write this section: Guideline 5]]\n\n### What We Configured\n\n[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Guideline 5 on an example Linux server",
            "Guideline 5 on an example Windows server"
          ]
        },
        {
          "id": "assure",
          "heading": "Assurance That All Servers Are Configured",
          "text": "[[Write this section: Assurance That All Servers Are Configured]]",
          "table": {
            "columns": [
              "Host",
              "OS",
              "Guidelines Applied",
              "How Verified"
            ],
            "hostRows": {
              "filter": "all",
              "cells": [
                "{{host}}",
                "{{host_os}}",
                "",
                ""
              ]
            },
            "rows": []
          }
        }
      ]
    },
    {
      "id": "verify-protocol",
      "name": "Verify use of a legacy protocol (e.g. NetBEUI)",
      "new": true,
      "subject": "Verification of {{protocol}}",
      "to": "CISO",
      "vars": [
        {
          "key": "protocol",
          "label": "Protocol",
          "default": "NetBEUI"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "how",
          "heading": "Where We Checked",
          "text": "1. **[[Place checked]]:** [[Describe]]\n1. **[[Place checked]]:** [[Describe]]\n1. **[[Place checked]]:** [[Describe]]\n1. **[[Place checked]]:** [[Describe]]"
        },
        {
          "id": "hosts",
          "heading": "Results on Each Server",
          "text": "",
          "perHost": {
            "filter": "windows",
            "label": "{{host}}:",
            "text": "[[Optional notes for {{host}}]]",
            "evidence": [
              "{{protocol}} check on {{host}}"
            ]
          }
        },
        {
          "id": "conclusion",
          "heading": "Conclusion",
          "text": "[[Write this section: Conclusion]]"
        },
        {
          "id": "disable",
          "heading": "Disabling {{protocol}}",
          "on": false,
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{protocol}} disabled"
          ]
        }
      ]
    }
  ]
});
