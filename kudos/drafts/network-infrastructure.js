// Template: Network infrastructure. Fill in every [[prompt]] with what your team actually did.
window.INJECT_TYPES.push({
  "id": "network-infrastructure",
  "name": "Network infrastructure",
  "description": "Connectivity checks, default gateway verification, secure SNMP, IPv6, multicast design, QoS, and ARP poisoning mitigation.",
  "variants": [
    {
      "id": "connectivity",
      "name": "Verify network connectivity",
      "subject": "Network Connectivity",
      "to": "Management",
      "vars": [],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "hosts",
          "heading": "",
          "text": "",
          "perHost": {
            "filter": "all",
            "label": "{{host}}",
            "evidence": [
              "External connectivity from {{host}}",
              "Internal connectivity from {{host}}"
            ]
          }
        },
        {
          "id": "ticket",
          "heading": "",
          "text": "[[Write this paragraph]]"
        }
      ]
    },
    {
      "id": "snmp",
      "name": "Plan & implement secure SNMP",
      "subject": "Securing SNMP",
      "to": "CISO",
      "vars": [
        {
          "key": "devices",
          "label": "Devices configured",
          "default": "both Palo Alto firewalls"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "versions",
          "heading": "Choosing an SNMP Version",
          "text": "[[Write this section: Choosing an SNMP Version]]"
        },
        {
          "id": "auth",
          "heading": "Users, Authentication, and Encryption",
          "text": "[[Write this section: Users, Authentication, and Encryption]]"
        },
        {
          "id": "view",
          "heading": "View Configuration",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "SNMP view on device 1",
            "SNMPv3 user on device 1",
            "SNMP view on device 2",
            "SNMPv3 user on device 2"
          ]
        },
        {
          "id": "src",
          "heading": "Sources",
          "level": 2,
          "text": "- [[Item]]\n- [[Item]]"
        }
      ]
    },
    {
      "id": "snmp-v2c",
      "name": "SNMPv2c read-only access for an external monitor",
      "description": "SA103 Implement SNMP (MWCCDC Invitational #1 2026): SNMPv2c read-only on every server and network device, reachable from the external network by a monitoring provider. Put the table the deliverable asks for first. External IP means the address the provider queries from outside, so check each device's address is right for it. The Invitational table listed internal addresses and repeated one IP for several devices.",
      "subject": "SNMP Implementation",
      "to": "CISO",
      "vars": [],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "devices",
          "heading": "SNMP Read-Only Access by Device",
          "text": "",
          "table": {
            "columns": [
              "Host Name",
              "External IP Address",
              "Read-Only Community String"
            ],
            "hostRows": {
              "filter": "all",
              "cells": [
                "{{host}}",
                "",
                ""
              ]
            },
            "rows": []
          }
        },
        {
          "id": "config",
          "heading": "SNMPv2c Configuration",
          "text": "### Linux Servers\n[[What was installed and configured]]\n\n### Windows Servers\n[[What was installed and configured]]\n\n### Network Devices\n[[What was configured]]",
          "evidence": [
            "SNMP configuration on a Linux server",
            "SNMP community settings on a Windows server",
            "SNMP settings on a network device"
          ]
        },
        {
          "id": "fw",
          "heading": "Firewall and NAT Changes",
          "text": "[[What lets the provider reach each device from outside, and what limits it to SNMP]]",
          "table": {
            "columns": [
              "Rule / NAT",
              "Source",
              "Destination",
              "Protocol / Port",
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
              ]
            ]
          },
          "evidence": [
            "Firewall rule allowing SNMP from the external network"
          ]
        },
        {
          "id": "verify",
          "heading": "Verification From the External Network",
          "text": "[[Query each external IP from outside and show the reply]]",
          "evidence": [
            "SNMP query to an external IP answered"
          ]
        },
        {
          "id": "risk",
          "heading": "Security Considerations",
          "on": false,
          "text": "[[What SNMPv2c exposes and how access is limited]]"
        }
      ],
      "checklist": [
        "SNMPv2c configured on each server and network device",
        "Read-only access available from the external network",
        "Table for each device: host name, external IP address, read-only community string"
      ]
    },
    {
      "id": "ipv6",
      "name": "Implement IPv6 (dual stack)",
      "subject": "IPv6 Implementation",
      "to": "CISO",
      "vars": [
        {
          "key": "prefix",
          "label": "IPv6 prefix",
          "placeholder": "fd00:20:240::/48"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "plan",
          "heading": "Addressing Plan",
          "text": "[[Write this section: Addressing Plan]]",
          "table": {
            "columns": [
              "Host",
              "IPv4",
              "IPv6"
            ],
            "hostRows": {
              "filter": "all",
              "cells": [
                "{{host}}",
                "{{host_ip}}",
                ""
              ]
            },
            "rows": []
          }
        },
        {
          "id": "win",
          "heading": "Windows",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "perHost": {
            "filter": "windows",
            "label": "{{host}}:",
            "evidence": [
              "IPv6 configured on {{host}}"
            ]
          }
        },
        {
          "id": "lin",
          "heading": "Linux",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "perHost": {
            "filter": "linux",
            "label": "{{host}}:",
            "evidence": [
              "IPv6 configured on {{host}}"
            ]
          }
        },
        {
          "id": "test",
          "heading": "Testing",
          "text": "",
          "evidence": [
            "IPv6 ping between hosts"
          ]
        }
      ]
    },
    {
      "id": "multicast",
      "name": "Design a multicast solution",
      "subject": "Multicast Network Solution",
      "to": "IT Director",
      "vars": [],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "switch",
          "heading": "Switch Requirements",
          "text": "[[Write this section: Switch Requirements]]\n\n- [[Item]]\n- [[Item]]\n- [[Item]]"
        },
        {
          "id": "mc",
          "heading": "Setting Up Multicast",
          "text": "[[Write this section: Setting Up Multicast]]"
        },
        {
          "id": "vrrp",
          "heading": "Firewall Failover Redundancy",
          "text": "[[Write this section: Firewall Failover Redundancy]]"
        }
      ]
    },
    {
      "id": "arp",
      "name": "Mitigate ARP cache poisoning",
      "subject": "Mitigate ARP Cache Poisoning",
      "to": "CISO",
      "vars": [
        {
          "key": "gw_ip",
          "label": "Gateway IP",
          "placeholder": "172.20.240.254"
        },
        {
          "key": "gw_mac",
          "label": "Gateway MAC",
          "placeholder": "bc:24:11:cb:6c:a8"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "what",
          "heading": "What Is ARP Poisoning?",
          "text": "[[Write this section: What Is ARP Poisoning?]]"
        },
        {
          "id": "how",
          "heading": "Static ARP Entries",
          "text": "[[Write this section: Static ARP Entries]]\n\n[[Write this section: Static ARP Entries]]\n\n```\n[[Paste the commands, script, or output]]\n```\n\n[[Write this section: Static ARP Entries]]\n\n```\n[[Paste the commands, script, or output]]\n```"
        },
        {
          "id": "hosts",
          "heading": "Completion on Each Device",
          "text": "",
          "perHost": {
            "filter": "all",
            "label": "{{host}}:",
            "evidence": [
              "Permanent ARP entry on {{host}}"
            ]
          }
        },
        {
          "id": "router",
          "heading": "Router Configuration",
          "text": "",
          "evidence": [
            "Static ARP entries on the router"
          ]
        }
      ]
    },
    {
      "id": "gateway-check",
      "name": "Verify the default gateway (suspicious ARP entry)",
      "subject": "Verification of the Default Gateway",
      "to": "CISO",
      "vars": [
        {
          "key": "claimed_mac",
          "label": "MAC address in question"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "params",
          "heading": "Default Gateway Parameters",
          "text": "",
          "table": {
            "columns": [
              "Segment",
              "Gateway IP",
              "Gateway MAC",
              "Device"
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
              ]
            ]
          }
        },
        {
          "id": "evidence",
          "heading": "Evidence",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "ARP table on a workstation",
            "MAC address of the gateway interface"
          ]
        },
        {
          "id": "judgment",
          "heading": "Judgment on {{claimed_mac}}",
          "text": "[[Write this section: Judgment]]"
        },
        {
          "id": "src",
          "heading": "Sources",
          "level": 2,
          "text": "- [[Item]]\n- [[Item]]"
        }
      ]
    },
    {
      "id": "l2-decode",
      "name": "Decode a Layer 2 capture (no IP addresses)",
      "description": "SOCS09A LAN Switch Question (MWCCDC Invitational #1 2026): a capture between two switches with no IP addresses. One section per ask. The decode table should turn every field, bit pattern and flag into what it means, not just name the fields. Also fits CDP, LLDP, STP or VTP captures.",
      "subject": "LAN Switch Capture Analysis",
      "to": "LAN Management Team",
      "vars": [
        {
          "key": "protocol",
          "label": "Protocol in the capture"
        },
        {
          "key": "capture",
          "label": "Capture file"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "noip",
          "heading": "Why There Are No IP Addresses",
          "text": "[[Which layer this protocol runs at and what that means for addressing]]"
        },
        {
          "id": "what",
          "heading": "What {{protocol}} Is and What It Does",
          "text": "[[What the protocol is, what it does, and what this exchange represents]]"
        },
        {
          "id": "decode",
          "heading": "Full Decode of {{capture}}",
          "text": "[[Field by field, for every frame: the raw value and what it means. Translate each bit pattern and flag]]",
          "table": {
            "columns": [
              "Header / Field",
              "Raw Value (hex or bits)",
              "Meaning"
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
            "Packet details with every field expanded"
          ]
        },
        {
          "id": "unique",
          "heading": "What Is Unique About This Segment",
          "text": "[[What the decoded values say about the link between these two switches]]"
        },
        {
          "id": "risk",
          "heading": "Security Risk and Recommendation",
          "on": false,
          "text": "[[The risk this exposes and how to close it]]"
        }
      ],
      "checklist": [
        "Why there are no IP addresses",
        "What protocol this is, what it does, what it represents",
        "Full decode: bit patterns and flags translated to meaning",
        "What is unique about the segment connecting the two switches"
      ]
    },
    {
      "id": "ha-firewall",
      "name": "High-availability firewall design (+ second ISP)",
      "description": "DSGN17A Design a High Availability Solution (MWCCDC Invitational #1 2026): every component needed for no single point of failure from the external connection to the internal segments, how failures are detected and failover stays transparent, your own drawing, and how two Internet providers change hardware, configuration and addressing. Design scored 51 there. The hardware list stopped at the firewall pair, the drawing was copied from the web, and addressing for two providers was not covered.",
      "subject": "High Availability Firewall Design",
      "to": "CIO",
      "vars": [
        {
          "key": "fw",
          "label": "Firewall",
          "default": "Palo Alto"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "current",
          "heading": "Current Design and Single Points of Failure",
          "text": "[[Follow the path from the Internet connection to each internal segment and name every single point of failure]]"
        },
        {
          "id": "hardware",
          "heading": "Hardware Needed",
          "text": "[[Every component, not only the second firewall, so nothing on that path is a single point of failure]]",
          "table": {
            "columns": [
              "Component",
              "Quantity",
              "Purpose",
              "Single Point of Failure It Removes"
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
          "id": "detect",
          "heading": "Detecting a Failure",
          "text": "[[What is monitored (the device, its links, the paths beyond it), by what mechanism and over which link, and how quickly a failure is declared]]"
        },
        {
          "id": "failover",
          "heading": "Seamless Failover",
          "text": "[[What is kept in sync so sessions survive, what happens to addresses when the standby takes over, and what happens when the primary returns]]"
        },
        {
          "id": "drawing",
          "heading": "Drawing of Components and Wiring",
          "text": "[[Draw it yourself: every component, cable and HA link labeled]]",
          "evidence": [
            "HA topology: components and wiring"
          ]
        },
        {
          "id": "isp",
          "heading": "Two Internet Providers",
          "text": "[[One paragraph on what changes overall]]"
        },
        {
          "id": "isp-hw",
          "heading": "Hardware With Two Providers",
          "level": 2,
          "text": "[[Write this section: Hardware With Two Providers]]"
        },
        {
          "id": "isp-cfg",
          "heading": "Configuration With Two Providers",
          "level": 2,
          "text": "[[Write this section: Configuration With Two Providers]]"
        },
        {
          "id": "isp-addr",
          "heading": "Addressing With Two Providers",
          "level": 2,
          "text": "[[Write this section: Addressing With Two Providers]]"
        },
        {
          "id": "src",
          "heading": "Sources",
          "level": 2,
          "text": "- [[Item]]"
        }
      ],
      "checklist": [
        "Every hardware component needed so there is no single point of failure",
        "Technology that detects a failure",
        "Seamless, transparent failover",
        "Drawing of the components and wiring",
        "Two Internet providers: hardware",
        "Two Internet providers: configuration",
        "Two Internet providers: addressing"
      ]
    },
    {
      "id": "qos",
      "name": "QoS for management traffic under peak load",
      "subject": "Preserving Network Integrity in Peak Loads",
      "to": "IT Director",
      "vars": [],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "overview",
          "heading": "Solution Overview",
          "text": "[[Write this section: Solution Overview]]"
        },
        {
          "id": "devices",
          "heading": "Devices Changed",
          "text": "",
          "table": {
            "columns": [
              "Device",
              "Change Made",
              "Traffic Prioritized"
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
              ]
            ]
          }
        },
        {
          "id": "config",
          "heading": "Configuration Changes",
          "text": "### {{device_1}}\n\n[[Describe what was done and what the evidence below shows]]\n\n### {{device_2}}\n\n[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "QoS configuration on {{device_1}}",
            "QoS configuration on {{device_2}}"
          ]
        },
        {
          "id": "verify",
          "heading": "Verification",
          "on": false,
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Prioritized traffic under load"
          ]
        }
      ]
    }
  ]
});
