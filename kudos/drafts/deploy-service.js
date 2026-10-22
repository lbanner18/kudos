// Template: Deploy a business service. Fill in every [[prompt]] with what your team actually did.
window.INJECT_TYPES.push({
  "id": "deploy-service",
  "name": "Deploy a business service",
  "description": "Chat platforms, file shares/SFTP, network management tools, research software + Docker, PowerShell on Linux, comparing two solutions (incl. WSL vs Docker Desktop), an IDS, and a TFTP server.",
  "variants": [
    {
      "id": "chat",
      "name": "Internal chat / communication platform",
      "subject": "Company Communication Platform",
      "to": "CTO",
      "vars": [
        {
          "key": "app",
          "label": "Platform",
          "default": "Nextcloud Talk"
        },
        {
          "key": "server",
          "label": "Server",
          "placeholder": "Cowbuntu"
        },
        {
          "key": "app_url",
          "label": "URL",
          "placeholder": "http://10.100.105.98"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "deploy",
          "heading": "Deployment/Technical Guide",
          "text": "[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```\n\n[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{app}} installed and running on {{server}}"
          ]
        },
        {
          "id": "user",
          "heading": "User Guide",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n\n[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Login screen",
            "Navigation bar Talk button",
            "Communication menu",
            "New conversation form"
          ]
        }
      ]
    },
    {
      "id": "file-share",
      "name": "File share / SFTP drop box",
      "subject": "File Share Solution",
      "to": "CTO",
      "vars": [
        {
          "key": "app",
          "label": "Solution",
          "default": "Nextcloud"
        },
        {
          "key": "server",
          "label": "Server",
          "placeholder": "Ubuntu server"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "why",
          "heading": "Why",
          "text": "[[Write this section: Why]]"
        },
        {
          "id": "deploy",
          "heading": "Steps to Deploy",
          "text": "[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```\n\n[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{app}} running on {{server}}"
          ]
        },
        {
          "id": "sftp",
          "heading": "SFTP Service Setup",
          "on": false,
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "sshd_config SFTP block",
            "Successful SFTP connection"
          ]
        },
        {
          "id": "user",
          "heading": "User Guide",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]",
          "evidence": [
            "Login screen",
            "Files page"
          ]
        }
      ]
    },
    {
      "id": "nms",
      "name": "Install a network management tool",
      "subject": "Install a Network Management Tool",
      "to": "CISO",
      "vars": [
        {
          "key": "tool",
          "label": "Tool",
          "default": "LibreNMS"
        },
        {
          "key": "server",
          "label": "Server",
          "placeholder": "Ubuntu Workstation"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "prep",
          "heading": "Preparing the System",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "System updated and time zone verified",
            "Network connectivity"
          ]
        },
        {
          "id": "install",
          "heading": "Installation",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{tool}} database user and configuration",
            "{{tool}} web interface"
          ]
        },
        {
          "id": "devices",
          "heading": "Monitored Devices",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Devices added to {{tool}}"
          ]
        }
      ]
    },
    {
      "id": "research",
      "name": "Research a new software platform (talking points)",
      "subject": "{{software}} Overview",
      "to": "CEO",
      "vars": [
        {
          "key": "software",
          "label": "Software",
          "placeholder": "NeuroDebian"
        },
        {
          "key": "server",
          "label": "Where it would run",
          "placeholder": "Debian 12 (hera)"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "intro",
          "heading": "[Intro]",
          "text": "[[Write this section: [Intro]]]"
        },
        {
          "id": "helps",
          "heading": "[How It Helps the Company]",
          "text": "1. [[Step]]\n1. [[Step]]"
        },
        {
          "id": "conclusion",
          "heading": "[Conclusion]",
          "text": "[[Write this section: [Conclusion]]]"
        },
        {
          "id": "qa",
          "heading": "[Common Questions]",
          "text": "[[Write this section: [Common Questions]]]\n\n[[Write this section: [Common Questions]]]\n\n[[Write this section: [Common Questions]]]"
        }
      ]
    },
    {
      "id": "docker",
      "name": "Deploy software in a Docker container",
      "subject": "{{software}} Docker Container",
      "to": "IT Manager",
      "vars": [
        {
          "key": "software",
          "label": "Software",
          "placeholder": "NeuroDebian"
        },
        {
          "key": "image",
          "label": "Docker image",
          "placeholder": "neurodebian:latest"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "install",
          "heading": "Docker Installation",
          "text": "1. [[Step]]\n1. [[Step]]\n\n```\n[[Paste the commands, script, or output]]\n```\n\n1. [[Step]]\n\n```\n[[Paste the commands, script, or output]]\n```\n\n[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Image pulled",
            "Shell inside the running container"
          ]
        },
        {
          "id": "tools",
          "heading": "Tools",
          "text": "[[Write this section: Tools]]\n\n### Tool 1\n\n[[Write this section: Tools]]\n\n### Tool 2\n\n[[Write this section: Tools]]"
        }
      ]
    },
    {
      "id": "powershell-linux",
      "name": "PowerShell on Linux",
      "subject": "PowerShell on Linux",
      "to": "IT Manager",
      "vars": [
        {
          "key": "server",
          "label": "Linux host",
          "placeholder": "Hermes (Ubuntu 25.04)"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "steps",
          "heading": "Installation",
          "text": "[[Describe what was done and what the evidence below shows]]\n\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]",
          "evidence": [
            "PowerShell successfully installed on {{server}}"
          ]
        },
        {
          "id": "use",
          "heading": "Using PowerShell",
          "text": "[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "Running the command shows the OS of {{server}}"
          ]
        }
      ]
    },
    {
      "id": "compare-solutions",
      "name": "Compare two solutions and recommend one",
      "subject": "Comparison of {{solution_a}} and {{solution_b}}",
      "to": "CISO",
      "vars": [
        {
          "key": "solution_a",
          "label": "First solution"
        },
        {
          "key": "solution_b",
          "label": "Second solution"
        },
        {
          "key": "pick",
          "label": "Recommended solution"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "a",
          "heading": "{{solution_a}}",
          "text": "[[Write this section: {{solution_a}}]]"
        },
        {
          "id": "b",
          "heading": "{{solution_b}}",
          "text": "[[Write this section: {{solution_b}}]]"
        },
        {
          "id": "table",
          "heading": "Benefits and Limitations",
          "text": "",
          "table": {
            "columns": [
              "",
              "{{solution_a}}",
              "{{solution_b}}"
            ],
            "rows": [
              [
                "Benefits",
                "",
                ""
              ],
              [
                "Limitations",
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "test",
          "heading": "Testing",
          "on": false,
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{solution_a}} running",
            "{{solution_b}} running"
          ]
        },
        {
          "id": "rec",
          "heading": "Recommendation: {{pick}}",
          "text": "[[Write this section: Recommendation]]"
        },
        {
          "id": "just",
          "heading": "Justification",
          "text": "- [[Item]]\n- [[Item]]\n- [[Item]]"
        }
      ]
    },
    {
      "id": "wsl-docker",
      "name": "Compare WSL and Docker Desktop",
      "description": "Run Linux business apps on Windows for disaster recovery (VIRT01A): WSL and Docker Desktop (the container option), benefits and limitations of each, then recommend one and justify it.",
      "subject": "Develop a Solution to Run a Linux App on Windows",
      "to": "CISO",
      "vars": [
        {
          "key": "solution_a",
          "label": "First solution",
          "default": "WSL"
        },
        {
          "key": "solution_b",
          "label": "Second solution",
          "default": "Docker Desktop"
        },
        {
          "key": "pick",
          "label": "Recommended solution"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "a",
          "heading": "{{solution_a}}",
          "text": "[[Write this section: {{solution_a}}]]"
        },
        {
          "id": "b",
          "heading": "{{solution_b}}",
          "text": "[[Write this section: {{solution_b}}]]"
        },
        {
          "id": "table",
          "heading": "Benefits and Limitations",
          "text": "",
          "table": {
            "columns": [
              "",
              "{{solution_a}}",
              "{{solution_b}}"
            ],
            "rows": [
              [
                "Benefits",
                "",
                ""
              ],
              [
                "Limitations",
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "test",
          "heading": "Testing",
          "on": false,
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{solution_a}} running",
            "{{solution_b}} running"
          ]
        },
        {
          "id": "rec",
          "heading": "Recommendation: {{pick}}",
          "text": "[[Write this section: Recommendation]]"
        },
        {
          "id": "just",
          "heading": "Justification",
          "text": "- [[Item]]\n- [[Item]]\n- [[Item]]"
        }
      ]
    },
    {
      "id": "ids",
      "name": "Install an IDS (selection, install, operations guide)",
      "subject": "Intrusion Detection System",
      "to": "System Administrator",
      "vars": [
        {
          "key": "ids",
          "label": "Chosen IDS"
        },
        {
          "key": "option_2",
          "label": "Option considered"
        },
        {
          "key": "option_3",
          "label": "Option considered"
        },
        {
          "key": "ids_host",
          "label": "IDS server"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "why",
          "heading": "Why We Chose {{ids}}",
          "text": "[[Write this section: Why We Chose {{ids}}]]"
        },
        {
          "id": "compare",
          "heading": "Options Considered",
          "text": "",
          "table": {
            "columns": [
              "",
              "{{ids}}",
              "{{option_2}}",
              "{{option_3}}"
            ],
            "rows": [
              [
                "Detection method",
                "",
                "",
                ""
              ],
              [
                "Benefits",
                "",
                "",
                ""
              ],
              [
                "Limitations",
                "",
                "",
                ""
              ]
            ]
          }
        },
        {
          "id": "install",
          "heading": "Installation in Our Environment",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]",
          "evidence": [
            "{{ids}} installed on {{ids_host}}",
            "{{ids}} service running"
          ]
        },
        {
          "id": "hosts",
          "heading": "Data Gathered From Each Host",
          "text": "",
          "table": {
            "columns": [
              "Host",
              "IP",
              "How Data Is Gathered",
              "Status"
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
          "id": "running",
          "heading": "{{ids}} Running in the Environment",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "{{ids}} receiving data from the hosts",
            "{{ids}} alert"
          ]
        },
        {
          "id": "incompat",
          "heading": "Hosts the IDS Could Not Monitor",
          "text": "[[Write this section: Hosts the IDS Could Not Monitor]]"
        },
        {
          "id": "guide",
          "heading": "Guide to Operating {{ids}}",
          "text": "### Bringing {{ids}} Back Up\n\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n\n### Pulling Information Off {{ids}}\n\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n\n### Finding an Intrusion\n\n[[Write this section: Finding an Intrusion]]",
          "evidence": [
            "Restarting {{ids}}",
            "Exporting data from {{ids}}"
          ]
        }
      ]
    },
    {
      "id": "tftp",
      "name": "Install a TFTP server",
      "subject": "TFTP Server on {{server}}",
      "to": "CISO",
      "vars": [
        {
          "key": "server",
          "label": "TFTP server"
        },
        {
          "key": "tftp_dir",
          "label": "TFTP directory"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "why",
          "heading": "Server Selected and Why",
          "text": "[[Write this section: Server Selected and Why]]"
        },
        {
          "id": "software",
          "heading": "Software Added",
          "text": "[[Write this section: Software Added]]\n\n```\n[[Paste the commands, script, or output]]\n```"
        },
        {
          "id": "fw",
          "heading": "Firewall and Security Policy Changes",
          "text": "",
          "table": {
            "columns": [
              "Device / Policy",
              "Change",
              "Protocol",
              "Port",
              "Allowed From"
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
            "Firewall rule for TFTP"
          ]
        },
        {
          "id": "dir",
          "heading": "Security Profile of {{tftp_dir}}",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Permissions on {{tftp_dir}}"
          ]
        },
        {
          "id": "overrun",
          "heading": "Protections From Being Overrun With Files",
          "text": "[[Write this section: Protections From Being Overrun With Files]]"
        },
        {
          "id": "proof",
          "heading": "Evidence of the TFTP Service’s Functionality",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "File downloaded from {{server}} over TFTP",
            "File uploaded to {{server}} over TFTP"
          ]
        }
      ]
    }
  ]
});
