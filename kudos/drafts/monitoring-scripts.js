// Template: Monitoring scripts. Fill in every [[prompt]] with what your team actually did.
window.INJECT_TYPES.push({
  "id": "monitoring-scripts",
  "name": "Monitoring scripts",
  "description": "Disk space monitoring on Windows and Linux, DoS detection, incomplete TCP connection monitoring, and a process priority tool.",
  "variants": [
    {
      "id": "disk-windows",
      "name": "Windows disk space monitor",
      "subject": "Windows Script to Monitor Disk Space",
      "to": "IT Director",
      "vars": [
        {
          "key": "threshold",
          "label": "Alert threshold",
          "default": "10% free space"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "how",
          "heading": "",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Alert example tested with a low threshold",
            "The task in Task Scheduler"
          ]
        },
        {
          "id": "script",
          "heading": "Appendix 1: The PowerShell Script",
          "text": "```\n[[Paste the commands, script, or output]]\n```"
        }
      ]
    },
    {
      "id": "disk-linux",
      "name": "Linux disk space monitor",
      "subject": "Monitoring Disk Space on Linux",
      "to": "CISO",
      "vars": [],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "how",
          "heading": "",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "The disk monitor script"
          ]
        },
        {
          "id": "test",
          "heading": "Testing",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Test run of the disk usage script"
          ]
        },
        {
          "id": "cron",
          "heading": "Deployment",
          "text": "[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "perHost": {
            "filter": "linux",
            "label": "{{host}}:",
            "evidence": [
              "Cron entry for the disk monitor on {{host}}"
            ]
          }
        }
      ]
    },
    {
      "id": "dos",
      "name": "DoS detection script (Linux)",
      "subject": "Linux DoS Mitigation Script",
      "to": "CISO",
      "vars": [],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "script",
          "heading": "noDos.py",
          "text": "```\n[[Paste the commands, script, or output]]\n```"
        },
        {
          "id": "systemd",
          "heading": "Service and Timer",
          "text": "```\n[[Paste the commands, script, or output]]\n```\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "dosdetect timer",
            "dosdetect service"
          ]
        },
        {
          "id": "hosts",
          "heading": "Installation Evidence",
          "text": "",
          "perHost": {
            "filter": "linux",
            "label": "{{host}}:",
            "evidence": [
              "dosdetect timer active on {{host}}"
            ]
          }
        },
        {
          "id": "logs",
          "heading": "Evidence of the Script Running",
          "text": "",
          "evidence": [
            "Script output logged in journalctl"
          ]
        }
      ]
    },
    {
      "id": "half-open-tcp",
      "name": "Incomplete TCP connection monitor (cron)",
      "subject": "Script to Monitor Incomplete TCP Connections",
      "to": "CISO",
      "vars": [
        {
          "key": "log_file",
          "label": "Alert log file"
        },
        {
          "key": "interval",
          "label": "How often it runs",
          "placeholder": "every 5 minutes"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "how",
          "heading": "How the Script Works",
          "text": "[[Write this section: How the Script Works]]"
        },
        {
          "id": "script",
          "heading": "The Script",
          "text": "```\n[[Paste the commands, script, or output]]\n```"
        },
        {
          "id": "cron",
          "heading": "Scheduling",
          "text": "[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```"
        },
        {
          "id": "hosts",
          "heading": "Installed on Each Linux Server",
          "text": "",
          "perHost": {
            "filter": "linux",
            "label": "{{host}}:",
            "evidence": [
              "Cron job on {{host}}"
            ]
          }
        },
        {
          "id": "proof",
          "heading": "Proof of Functionality",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Alerts written to {{log_file}}"
          ]
        },
        {
          "id": "windows",
          "heading": "Windows Version",
          "on": false,
          "text": "```\n[[Paste the commands, script, or output]]\n```\n\n[[Describe what was done and what the evidence below shows]]",
          "perHost": {
            "filter": "windows",
            "label": "{{host}}:",
            "evidence": [
              "Scheduled task on {{host}}"
            ]
          }
        }
      ]
    },
    {
      "id": "process-priority",
      "name": "Process priority manager script (CLI tool)",
      "subject": "Script to Manage Process Priorities",
      "to": "CISO",
      "vars": [
        {
          "key": "command",
          "label": "Command name"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "script",
          "heading": "The Script",
          "text": "```\n[[Paste the commands, script, or output]]\n```"
        },
        {
          "id": "cli",
          "heading": "Making It a Command-Line Tool",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n\n```\n[[Paste the commands, script, or output]]\n```"
        },
        {
          "id": "f1",
          "heading": "Function 1: View Current Processes and Their Priorities",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Viewing processes and their priorities with {{command}}"
          ]
        },
        {
          "id": "f2",
          "heading": "Function 2: Change the Priority of a Process",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Changing the priority of a process with {{command}}",
            "The new priority confirmed"
          ]
        },
        {
          "id": "hosts",
          "heading": "Installed on Each Linux Server",
          "on": false,
          "text": "",
          "perHost": {
            "filter": "linux",
            "label": "{{host}}:",
            "evidence": [
              "{{command}} on {{host}}"
            ]
          }
        }
      ]
    }
  ]
});
