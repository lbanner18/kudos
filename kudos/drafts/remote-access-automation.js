// Template: Remote access / automation. Fill in every [[prompt]] with what your team actually did.
window.INJECT_TYPES.push({
  "id": "remote-access-automation",
  "name": "Remote access / automation",
  "description": "RDP on a Linux box with a user guide, Ansible playbooks/roles, and a set of Ansible playbooks run from a central host.",
  "variants": [
    {
      "id": "rdp-linux",
      "name": "RDP on a Linux machine",
      "subject": "RDP on {{server}}",
      "to": "CTO",
      "vars": [
        {
          "key": "server",
          "label": "Linux server",
          "placeholder": "Explorer"
        },
        {
          "key": "server_ip",
          "label": "Server IP",
          "placeholder": "192.168.220.240"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "install",
          "heading": "Installation of RDP on {{server}}",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]",
          "evidence": [
            "Firewall allowing port 3389",
            "xrdp installed",
            "xrdp active and running"
          ]
        },
        {
          "id": "config",
          "heading": "Configuring xrdp",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "xrdp.ini session configuration",
            "Successful RDP session"
          ]
        },
        {
          "id": "debug",
          "heading": "Debugging Tips",
          "text": "[[Write this section: Debugging Tips]]"
        },
        {
          "id": "win",
          "heading": "Using RDP on Windows",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n\n[[Write this section: Using RDP on Windows]]"
        },
        {
          "id": "lin",
          "heading": "Using RDP on Linux",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]"
        }
      ]
    },
    {
      "id": "ansible",
      "name": "Ansible playbooks / roles",
      "subject": "Infrastructure Automation with Ansible",
      "to": "CTO",
      "vars": [
        {
          "key": "role",
          "label": "Role / playbook name",
          "placeholder": "rdp_server"
        },
        {
          "key": "target",
          "label": "Target host(s)",
          "placeholder": "Explorer"
        },
        {
          "key": "admin_user",
          "label": "SSH user",
          "default": "ccdcuser1"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "layout",
          "heading": "Creation of the {{role}} Role",
          "text": "[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```\n\n- **site.yaml** [[Describe]]\n- **hosts** [[Describe]]\n- **main.yaml** [[Describe]]",
          "evidence": [
            "site.yaml",
            "hosts inventory",
            "roles/{{role}}/tasks/main.yaml"
          ]
        },
        {
          "id": "run",
          "heading": "Running the Role",
          "text": "[[Write this section: Running the Role]]\n\n```\n[[Paste the commands, script, or output]]\n```\n\n[[Write this section: Running the Role]]"
        },
        {
          "id": "proof",
          "heading": "Verifying Successful Installation",
          "text": "[[Describe what was done and what the evidence below shows]]",
          "evidence": [
            "Software removed manually",
            "Ansible run completing successfully",
            "Service working after the Ansible run"
          ]
        },
        {
          "id": "attached",
          "heading": "",
          "on": false,
          "text": "[[Write this paragraph]]"
        }
      ]
    },
    {
      "id": "playbooks",
      "name": "Ansible playbooks from a central host (+ Vault)",
      "new": true,
      "subject": "Infrastructure Automation",
      "to": "CTO",
      "vars": [
        {
          "key": "control_host",
          "label": "Central host"
        },
        {
          "key": "admin_user",
          "label": "SSH user",
          "default": "ccdcuser1"
        }
      ],
      "summary": "[[One or two sentences: what was requested and what this memo provides]]",
      "sections": [
        {
          "id": "setup",
          "heading": "Central Host Setup",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]",
          "evidence": [
            "Ansible installed on {{control_host}}"
          ]
        },
        {
          "id": "inventory",
          "heading": "Inventory",
          "text": "[[Describe what was done and what the evidence below shows]]\n\n```\n[[Paste the commands, script, or output]]\n```"
        },
        {
          "id": "vault",
          "heading": "Securing Credentials With Ansible Vault",
          "text": "[[Describe how the credentials are stored. Never print the vault password.]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "Encrypted vault file"
          ]
        },
        {
          "id": "pb1",
          "heading": "Playbook 1: CPU and Memory Usage",
          "text": "[[Write this section: Playbook 1]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "Playbook 1 run against the network"
          ]
        },
        {
          "id": "pb2",
          "heading": "Playbook 2: Storage Usage",
          "text": "[[Write this section: Playbook 2]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "Playbook 2 run against the network"
          ]
        },
        {
          "id": "pb3",
          "heading": "Playbook 3: {{playbook_3}}",
          "text": "[[Write this section: Playbook 3]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "Playbook 3 run against the network"
          ]
        },
        {
          "id": "pb4",
          "heading": "Playbook 4: {{playbook_4}}",
          "text": "[[Write this section: Playbook 4]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "Playbook 4 run against the network"
          ]
        },
        {
          "id": "pb5",
          "heading": "Playbook 5: {{playbook_5}}",
          "text": "[[Write this section: Playbook 5]]\n\n```\n[[Paste the commands, script, or output]]\n```",
          "evidence": [
            "Playbook 5 run against the network"
          ]
        },
        {
          "id": "usage",
          "heading": "Usage Guide",
          "text": "1. [[Step]]\n1. [[Step]]\n1. [[Step]]\n1. [[Step]]"
        },
        {
          "id": "attached",
          "heading": "",
          "on": false,
          "text": "[[Write this paragraph]]"
        }
      ]
    }
  ]
});
