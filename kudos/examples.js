// Kudos examples. Adds a team-written sample to a variant, without changing drafts/*.js.
// Each one is a scored submission transcribed as written (typos included), sanitized only: no wording added or fixed.
// The label says where it came from and READY, or FLAGGED with the one thing to watch.
// "Start from this example" loads it as your draft; sections it doesn't fill keep their [[prompt]].
// Keys are "typeId/variantId". Never paste real IPs, usernames, passwords or screenshots here: this repo is public.
window.KUDOS_EXAMPLES = {

  'login-banner/banner': {
    example: {
      status: 'incomplete',
      label: 'FLAGGED - key elements are one sentence, but the prompt says "enumerate" them (graders expect a list); "ISO 2001:2022" should be ISO 27001:2022 · from Team 07, Regionals 2026 (LEGP11T)',
      summary: 'A company login banner was implemented on each device which warns of disciplinary action for unauthorized access (ISO 2001:2022 Annex A 8.5).',
      sections: {
        why: { text: 'Thank you for expressing your concern regarding our computer systems’ login banners.\n\nWe have taken steps to implement login banners on our devices so that when someone logs in to access a device they are informed of our company’s acceptable use and security monitoring actions. Due to the Computer Fraud and Abuse Act, when someone unauthorized accesses one of our devices, they can now be prosecuted for the unauthorized access because they are warned about accessing devices without authorization.' },
        previous: { on: true, text: 'Our previous login banners provided information about our systems including the operating system in use. Our new login banners reference the company Acceptable Use Policy and emphasize the ability to prosecute misuse or unauthorized access.' },
        elements: { text: 'A Login Banner should include an expectation of privacy and a statement of acceptable use. It should likewise provide a warning of possible disciplinary action or legal repercussions as a  result of misuse. Our New Login Banner includes each of these key element.' },
        text: { text: '```\n******** WARNING ********\nThis system is the property of a private organization and is for authorized use only. By accessing this system, users agree to comply with the company’s Acceptable Use Policy.\nAll activities on this system may be monitored, recorded, and disclosed to authorized personnel for security purposes. There is no expectation of privacy while using this system.\nUnauthorized or improper use may result in disciplinary action or legal penalties. By continuing to use this system you indicate your awareness of and consent to these terms and conditions of use.\n*************\n```' },
        linux: { text: '[[Add your Linux hosts (section 2), then a screenshot of the login banner on each one]]', screenshots: ['Login banner on {{host}}'] },
        windows: { text: '[[Add your Windows hosts (section 2), then a screenshot of the login banner on each one]]', screenshots: ['Login banner on {{host}}'] },
      },
    },
  },

  'policies/ir-policy': {
    example: {
      status: 'review',
      label: 'FLAGGED - the closing paragraph says "up to and including orbital debris re-entry", copied from a different event\'s prompt (the original also spells the company two ways) · from Team 05, WRCCDC #5 2025-26 (Inject 01), adapted from the FRSecure public template it cites',
      summary: 'Below is the incident response policy and incident response form as requested.',
      sections: {
        purpose: { text: '### Purpose\n\nThe purpose of {{company}}\'s Incident Response Policy is to formalize the company\'s requirements for responding to security incidents.\n\n### Audience\n\nThis policy applies to all {{company}} employees, executives, contractors, and other partners; anyone with access to the organization\'s resources.\n\n### Policy\n\nAll individuals who use {{company}} information resources are responsible for reporting possible security incidents immediately to the IT/Cyber Division team.' },
        plan: { text: 'The incident response plan is initiated when the IT/Cyber Division team receives a security incident report. The plan will be handled as follows:\n\n1. **Identification:** The team will collect data about the security incident to verify that an incident occurred. We\'ll utilize Wazuh, our network-wide log indexing application, to identify related security events and identify ip addresses of the malicious actor(s).\n1. **Analysis:** The team will utilize the information discovered in the identification process to prioritize the next steps in handling the incident.\n1. **Contain:** The team will contain the affected systems to minimize damage caused by the incident. Damage to be minimized includes but is not limited to financial loss, theft of information, and service disruption.\n1. **Eradicate:** The team will eliminate threat caused by the incident through mitigating any exploited vulnerabilities, removing malware and any other unwanted results from the incident, and secure affected resources and systems to an improved security posture.\n1. **Recover:** The team will restore any affected systems quickly and securely to minimize any downtime and improve organizational security. Furthermore, additional monitoring will be implemented to improve response time and capabilities to any similar future incidents.\n1. **Review:** After the above steps have been complete, the team will work together to identify lessons learned, brainstorm ideas for future security incidents, and document the incident response process.' },
        comms: { text: 'The IT/Cyber Division Team is responsible for conducting and ensuring that communications regarding the incident reports and response processes are done both in a timely matter and appropriately based on regulatory and legal requirements and procedures in place. The information concerning security incidents is classified as confidential, therefore at no time should any details be discussed with anyone outside of {{company}}. If there is a situation that calls for communicating any information with someone outside of the organization, it must first be approved by the legal counsel and executive management.' },
        enforce: { text: 'Any individuals found to have violated this policy are subject to disciplinary action, including termination of employment and related civil or criminal penalties.' },
        refs: { text: '- NIST Cybersecurity Framework (CSF) 2.0\n- CISA Incident Response Plan (IRP) Basics\n\nOur team was able to find a sample Incident Response Policy from the following site:\n\nhttps://frsecure.com/incident-response-policy-template/' },
        form: {
          text: 'The following is the incident response form we will utilize to report incidents.',
          rows: [
            ['Date/Time', ''],
            ['Type of incident', '(Malware, Breach, Other)'],
            ['Description', '(Description of the incident)'],
            ['Affected Host(s)', '(Names and IPs of the affected host(s))'],
            ['Source IP Address', '(Source IP Address of the attacker if known)'],
            ['Attack Vector', '(Phishing, malware, outdated software)'],
            ['Impact on Services', '(What services were impacted)'],
            ['Service Downtime', '(How long was the service down)'],
            ['Impact on Information', '(What Information was compromised/modified)'],
            ['Remediation', '(How was this incident remediated)'],
          ],
        },
        close: { text: 'This incident response policy and incident response form will help {{company}} in case of incidents up to and including orbital debris re-entry. Furthermore, the incident response form will help track the who, what, when, where, why, and how regarding security incidents.' },
      },
    },
  },

  'policies/ir-elements': {
    example: {
      status: 'review',
      label: 'READY · from Team 07, Regionals 2026 (BCOM04T)',
      summary: 'The requested company incident response document is attached regarding the companies due diligence when it comes to handling breaches and security postures.',
      sections: {
        table: {
          text: 'The current company IR handling includes the following elements in order to get a comprehensive view of the situation and to provide clarity and transparency when it comes to responding and protecting the organizations assets. The PICERL framework is used which stands for Preparation, Identification, Containment, Eradication, Recovery and Lessons Learned. Such an outline for Incident Reports would certainly satisfy red team members as it clearly identifies the malicious IP addresses used, the actions taken within our systems, and means of remediation, ultimately showing our understanding of how we could have better secured our network.',
          rows: [
            ['Preparation', 'N/A', 'People, policies, tools, trainings, procedures, relationships, etc.'],
            ['Identification', 'Affected Hosts, Source IP(s), Destination IP(s), Ports & Services, log files.', 'Awareness, Unusual processes or events, log analysis, early alerts, etc.'],
            ['Containment', 'Proof of quarantine. I.E. firewall blocking C2 outbound requests, Windows Defender, etc.', 'Prioritize & categorize, change passwords kill backdoors, short-term & long-term solutions, notify management, etc.'],
            ['Eradication', 'Proof of removal. I.E. Windows Defender, removing scheduled tasks, etc.', 'Remove artifacts, identify root issue(s), restore backups, patch and update defenses, rescan network, etc.'],
            ['Recovery', 'Proof of services up and backups restored.', 'Return to normal operations monitor continue scanning for artifacts, etc.'],
            ['Lessons Learned', 'N/A', 'Document incidents, finalize reports, update procedures, etc.'],
          ],
        },
        info: { text: 'As we approach incidents, we write incident reports to track valuable information for both the organization’s knowledge and to help our team improve in our incident response capabilities.\n\nIn order to gather the information outlined below, we utilize Splunk, a Security Information Event Management tool that aggregates system, application, and network logs. This improves our teams capabilities with threat hunting, therefore leading to improved incident response capabilities.\n\nThe following information is used from these tools:\n\n- Affected Hosts\n- Source IP\n- Dest IP\n- Port(s) and Service(s)\n- Timestamps\n- Affected accounts\n- Lateral Movement from compromised accounts\n- Files and services accessed\n\nIncident Reports are extremely confidential and should not be discussed outside the organization.' },
      },
    },
  },

  'team-feedback/team-org': {
    example: {
      status: 'outdated',
      label: 'FLAGGED - area 4 of the prompt ("missing areas of coverage, or other improvements") is answered only as "we cover everything"; no improvement is named · from Team 03, MW Invitational #1 2025 (ORGR06T)',
      sections: {
        how: { text: 'Our security team works across multiple technical disciplines and professional responsibility. Eight full-time staff comprise the security team.\n\nTo best organize business needs and strengthened team efficacy, each team member has a primary responsibility and a secondary responsibility.\n\nTeam members spend most of their time developing skills and tools to aid their primary responsibility although they also work diligently to ensure that they are foundationally proficient in their secondary role. Team members practice consistently to develop these skills and maintain their effectiveness. In the case that an individual is unable to fulfill their primary responsibility, the secondary lead will step in and assume given role.\n\nThe team is also cross-trained in all responsibilities at a shallow level in order to best understand the cohesion of the business.' },
        table: {
          text: 'The following table identifies the primary and secondary responsibilities assigned to our team members, although not identifying them personally. The table also specifies the key skills that are associated with the roles undertaken by our security team.',
          columns: ['Primary', 'Secondary', 'Primary Key Skills & Knowledge'],
          rows: [
            ['Team Lead', 'Incident Investigation', 'Skills: Leadership, Business Prioritization, Professional Communication, each concept required for the team\nTools: Each tool required for the team'],
            ['Windows Administration', 'Linux Administration', 'Skills: Operating Systems, Incident Investigation, Networking\nTools: Active Directory, Domain Name Services, Windows Operating Systems, PowerShell, Windows Servers'],
            ['Firewalls', 'Team Lead', 'Skills: Networking, Subnetting\nTools: Palo Alto Firewalls, Cisco Firewalls, pfSense'],
            ['Network Engineering', 'Firewalls', 'Skills: Networking, Subnetting\nTools: ESXI, Cacti, ProxMoc'],
            ['Vulnerability Management', 'Network Engineering', 'Skills: Threat Intelligence, Adversary Emulation, Vulnerability Management\nTools: OpenVAS, Nmap, Wireshark'],
            ['Linux Administration', 'Threat Intelligence', 'Skills: Operating Systems, Incident Investigation, Networking, Mail\nTools: Linux Operating Systems,'],
            ['Organizational Communications', 'Windows Administration', 'Skills: Risk Management, Industry Standards, Business Communication, Professional Communications, Customer Success\nTools: Microsoft Office, Libre Office'],
            ['Incident Investigation', 'Organizational Communications', 'Skills: Security Information and Event Monitoring (SIEM), Incident Response, Operating Systems, Networking\nTools: Splunk'],
          ],
        },
        close: { text: 'With the current configuration of our security team and their associated responsibility, we adequately and comprehensively cover all essential aspects associated with the security of our organization.' },
      },
    },
  },

  'hardening/checklist': {
    example: {
      status: 'review',
      label: 'READY · from Team 07, MW Invitational #3 2025 (SVRA05T). The Implementation column was screenshots: add yours as evidence.',
      summary: 'This memo outlines the measures Team{{team}} has taken to harden our servers and each host device. These measures have been implemented on all windows and Linux servers in our topology. The main objective of these actions is to reduce the attack surface and strengthen the defenses against unauthorized access to our systems through defense-in-depth. We have sought to align our configurations with Industry Control Standards.\n\nThe following tables outline the initial hardening steps that we have followed to secure the individual devices on our network with the action’s associated Industry Control Standard along with screenshot evidence of implementation on each device.',
      sections: {
        win: {
          screenshots: ['Windows Defender Firewall on for the Domain, Private and Public networks', 'SSH not installed or running (Get-Service -Name ssh)', 'Members of the local Administrators group', 'List of running services after disabling unnecessary ones'],
          columns: ['Hardening Technique', 'Industrial Control', 'Implementation on Team-{{team}} devices'],
          rows: [
            ['Changing Default Credentials', 'IA-5: Change Default Passwords', '**Unable to show changes in passwords as it is insecure to send passwords in plain text via memo)'],
            ['Windows Firewall Defender', 'AC-4: Information Flow Enforcement', ''],
            ['SSH Configuration (disable)', 'AC-3: Access Enforcement\nCM-7: Least Functionality', ''],
            ['Restrict User Access (Principle of Least Privilege)', 'AC-6: Least Privilege', '**Only necessary accounts have access to Administrator Privileges**'],
            ['Disable Unnecessary services', 'CM-7: Least Functionality', ''],
          ],
        },
        lin: {
          screenshots: ['Default password changed (passwd)', 'System updated (e.g. sudo dnf upgrade --refresh)', 'Host-based firewall rules', 'SSH disabled', 'Members of the admin group (getent group wheel)', 'Unnecessary service disabled (systemctl disable --now)'],
          columns: ['Hardening Technique', 'Industrial Control', 'Implementation on Team-{{team}} devices'],
          rows: [
            ['Changing Default Credentials', 'IA-5: Change Default Passwords', ''],
            ['Update Device', 'SI-2: Flaw Remediation', ''],
            ['Host Based Firewall', 'AC-4: Information Flow Enforcement', ''],
            ['SSH Configuration (disable)', 'AC-3: Access Enforcement', ''],
            ['Restrict User Access (Principle of Least Privilege)', 'AC-6: Least Privilege', ''],
            ['Disable Unnecessary services', 'CM-7: Least Functionality', ''],
          ],
        },
      },
    },
  },

  'logging-siem/regex': {
    example: {
      status: 'review',
      label: 'READY · from Team 07, MW Invitational #3 2025 (SOCS18T). The submitted PDF lost "<src>" from the pattern; it is restored here.',
      sections: {
        pattern: { text: 'The written Regex expression is a filter meant to search through system logs and find entries specifically from the Linux firewall (iptables or netfilter). It looks for events where the firewall has blocked and discarded (DROPPED) a network packet.\n\n```\n[r"(?:iptables|netfilter).*DROP.*SRC=(?P<src>\\d{1,3}(?:\\.\\d{1,3}){3})",]\n```\n\nThis script is configured to automatically identify and extract the Source IP address of the computer that sent the blocked packet. This can be extremely helpful for our analysts to quickly identify who is sending malicious traffic.' },
        tokens: {
          rows: [
            ['(?:iptables|netfilter)', '"iptables" OR "netfilter"', 'This looks for log entries that contain either the word iptables or netfilter, which are the names of the firewall software components in Linux. The (?: ... ) makes it a non-capturing group.'],
            ['DROP', 'The word "DROP"', 'This matches the literal word DROP, which is the specific firewall action of blocking a packet without sending a response.'],
            ['SRC=', 'The text "SRC="', 'This matches the literal text SRC=, which signifies the start of the source IP address field in the log message.'],
            ['(?P<src>...)', 'Named Capture Group "src"', 'This is an instruction for Python to capture the information that follows and store it in src.'],
            ['\\d{1,3}(?:\\.\\d{1,3}){3}', 'IPv4 Address Pattern', 'This is the pattern for a standard IP address. It looks for a number with 1 to 3 digits (\\d{1,3}), followed by a group of a dot and 1 to 3 digits repeated exactly three times.'],
          ],
        },
        example: { text: 'Specifically, this REGEX pattern would match: `iptables DROP SRC=192.168.20.30` or\n\n```\nNov 1 10:15:22 perimeter-fw kernel: [AUDIT] iptables-denied: IN=eth0 OUT= MAC=00:0c:29:12:34:56 SRC=203.0.113.45 DST=10.0.1.10 TTL=242 ID=54321 PROTO=TCP ACTION=DROP\n```' },
      },
    },
  },

  'monitoring-scripts/disk-linux': {
    example: {
      status: 'review',
      label: 'FLAGGED - cites no sources, and the 2026 prompt says "Be sure to cite any sources used" · from Team 07, Regionals 2026 (LINX04T). Script and cron line typed from the screenshots; the text says "every minute" but the cron line runs hourly.',
      summary: 'This document details the implementation of a disk space monitoring script for the Linux servers on our network.',
      sections: {
        how: { text: 'The script is implemented using two Linux tools: df, which monitors disk space, and logger, which can send alerts to syslog. It sets a threshold to either 95% usage or the first argument passed to the script. Then, it checks the various mounts of the system using df and if the disk usage is greater than the threshold, it logs the mount, device, and usage percentage to the console and syslog.\n\n```\n#!/bin/bash\n\nTHRESHOLD=${1:-95}\n\ndf -h | awk -v ts="$THRESHOLD" \'NR>1 {sub(/%/,"",$5); if($5>=ts) print $1, $5, $6}\' | while read -r device usage mount; do\n\n        logger -s -p local0.crit "ALERT: Disk space on $device ($mount) is at ${usage}% (Threshold: ${THRESHOLD}%)"\n\ndone\n```', screenshots: ['The disk monitor script'] },
        test: { text: 'To test this script, a low threshold was utilized and ran the script on the Ubuntu Ecom machine. This gave an alert for two of the system devices.', screenshots: ['Test run of the disk usage script'] },
        cron: { text: 'The script was then set up to be run by cron, the scheduled task utility on Linux. A cronjob was set up to run the disk monitoring script once every minute with a threshold of 95% usage. The script was also moved to /usr/local/bin, given the correct permissions to access disk usage information, and marked executable using chmod.\n\n```\n0 * * * * /usr/local/bin/disk_monitor.sh 95\n```', screenshots: ['Cron entry for disk monitoring script'] },
      },
    },
  },

  'monitoring-scripts/disk-windows': {
    example: {
      status: 'review',
      label: 'FLAGGED - the variable $percentFull actually holds the FREE fraction (FreeSpace/Size); the thresholds work, but the name says the opposite · from Team 01, Qualifiers 2025 (WINS05T). Script typed from the screenshot.',
      sections: {
        how: { text: '### Overview\n\nAs requested, the security team has implemented a system that alerts administrators when the available disk space of a machine fills up to specified capacities. Additionally, the disk capacity alerts are logged to Windows event logs.\n\n### Details\n\nDetails of the script in Appendix 1:\n\n- Line 1 retrieves the storage capacity of the disks.\n- Lines 2-6 calculate the disk usage percentage.\n- Lines 7-11 trigger an alert when the disk usage is at 50 percent capacity.\n- Lines 12-16 trigger an alert when the disk usage is at 80 percent capacity.\n- Lunes 17-21 trigger an alert when the disk usage is at 90 percent capacity.\n\n### Script Execution\n\nThe script is executed every hour, using the Windows Task Scheduler program. This ensures that the script is reliably run on a consistent basis. Figure 1 below shows the custom disk usage script being executed every hour. When an alert is created, the event is also logged to Windows logs, as shown in Figure 2.\n\n### Conclusion\n\nThe newly implemented disk usage monitoring script will inform system administrators when disk capacity reaches the specified thresholds of 50%, 80%, and 90%. This will allow administrators to take appropriate action to manage the disk space, before disk space becomes a major issue.', screenshots: ['Windows Task Scheduler with custom disk usage monitoring script.', 'Windows Event Viewer with log entry from disk usage script.'] },
        script: { text: '```\n$disks = Get-WmiObject -class win32_logicalDisk -computername localhost\n$disks | foreach-object {\n    if ($_.Size -ne $null) {\n\n    $percentFull = $_.FreeSpace/$_.Size\n\n    if ($percentFull -lt .5 -and -not (Test-Path ./"$($_.DeviceID[0])50")) {\n        Write-EventLog -Logname Application -Source "Application" -EventID 8001 -EntryType Warning -Message "Disk usage at 50 percent full"\n        New-Item -Path ./"$($_.DeviceID[0])50"\n        write-host 50\n    }\n    if ($percentFull -lt .2 -and -not (Test-Path ./"$($_.DeviceID[0])80")) {\n        Write-EventLog -Logname Application -Source "Application" -EventID 8001 -EntryType Warning -Message "Disk usage at 80 percent full"\n        New-Item -Path ./"$($_.DeviceID[0])80"\n        write-host 80\n    }\n    if ($percentFull -lt .1 -and -not (Test-Path ./"$($_.DeviceID[0])90")) {\n        Write-EventLog -Logname Application -Source "Application" -EventID 8001 -EntryType Error -Message "Disk usage at 90 percent full"\n        New-Item -Path ./"$($_.DeviceID[0])90"\n        write-host 90\n    }\n    }\n\n}\n```' },
      },
    },
  },

  'integrity-scripts/web-hash': {
    example: {
      status: 'incomplete',
      label: 'FLAGGED - no alerting (it only writes a log file) and no schedule (no cron/timer), so nothing runs it automatically or tells anyone · from Team 07, MW Invitational #3 2025 (CRYP08T)',
      summary: 'This document contains a developed Python Script that detects changes in web page integrity.',
      sections: {
        dirs: { text: '- /var/www/html/opencart\n- /etc/apache2/' },
        script: { text: 'Here is the requested script with annotations:\n\n```\nimport hashlib\nimport json\nimport os\nimport sys\nimport time\n\nbaselinePath = \'.baseline\'\n\ndef hashFile(path):\n    with open(path, \'r\') as _file:\n        fileContents = _file.read()\n\n    enocdedFileContents = fileContents.encode(\'utf-8\')\n\n    hashString = hashlib.sha256(enocdedFileContents).hexdigest()\n\n    return hashString\n\ndef readBaselineFile():\n    with open(baselinePath, \'r\') as baseline:\n        hashes = json.load(baseline)\n\n    return hashes\n\ndef writeBaseline(path, hash):\n    with open(baselinePath, \'r\') as baseline:\n        hashes = json.load(baseline)\n        hashes.append({"path": path, "hash": hash})\n\n    with open(baselinePath, \'w\') as baseline:\n        json.dump(hashes, baseline)\n\ndef listFiles(directoryPath):\n    filePaths = []\n    subDirs = []\n\n    for root, dirs, paths in os.walk(directoryPath):\n        for path in paths:\n            fullPath = os.path.join(root, path)\n            filePaths.append(fullPath)\n\n    return filePaths\n\ndef grabHashes():\n\n    filesToVerify = []\n\n    for directory in directoriesToVerify:\n        directoryFiles = listFiles(directory)\n        filesToVerify += directoryFiles\n\n    hashes = []\n\n    for path in filesToVerify:\n        hash = hashFile(path)\n        hashes.append({"path": path, "hash": hash})\n\n    return hashes\n\ndef establishBaseline():\n\n    hashes = grabHashes()\n\n    for file in hashes:\n        writeBaseline(file["path"], file["hash"])\n\ndef verifyFiles():\n\n    current_hashes = grabHashes()\n\n    baseline_hashes = readBaselineFile()\n\n    for i in range(0, len(current_hashes)):\n        path = current_hashes[i]["path"]\n        currentHash = current_hashes[i]["hash"]\n        baselineHash = baseline_hashes[i]["hash"]\n\n        if currentHash != baselineHash:\n            with open("integrity_monitor.log", "a") as logFile:\n                logFile.write(f"{time.time()}: File {path} has detected a change!")\n\nif __name__ == "__main__":\n    args = sys.argv[1:]\n\n    directoriesToVerify = [\n        "/var/www/html/opencart",\n        "/etc/apache2/"\n    ]\n\n    if (args[0] == "--setup" or  args[0] == \'-s\'):\n        establishBaseline()\n\n    if (args[0] == "--monitor" or args[0] == \'-m\'):\n        verifyFiles()\n```' },
        how: { text: '- **hashFile()** The hashFile() function takes a file path and outputs the sha256 hash of the file.\n- **readBaselineFile()** The readBaselineFile() function reads the .baseline file where hashes and file paths are linked (see the writeBaseline() function below). It reads the JSON data, parses it, and returns a python list of hashes and file paths.\n- **writeBaseline()** The writeBaseline() function takes a path string and the hash of that file and writes that in the JSON syntax to the .baseline file.\n- **listFiles()** The listFiles() function takes a directory path and returns an array of the paths to all of the files inside of that directory and any subdirectories.\n- **grabHashes()** The grabHashes() function access the drectoriesToVerify list, and generates a hash of all of the files in those directories.\n- **establishBaseline()** The establishBaseline() function calls grabHashes(), gets a list of file paths and the associated hash, and calls writeBaseline() to store that in the .baseline file.\n- **verifyFiles()** The verifyFiles() function calls grabHashes() to get the current state of the monitored directories, calls readBaselineFile() to get the previously saved states.' },
        proof: { screenshots: ['Screenshot of working script: --setup, a file changed, then --monitor and the log entry it wrote'] },
      },
    },
  },

  'policies/ir-procedure': {
    example: {
      status: 'review',
      label: 'READY · from Team 01, Qualifiers 2026 (SCEN20T(E)), full points in the 2026 review',
      summary: 'Team {{team}} created an incident response plan procedure to assist with responding to future incidents involving malware from a web site or phishing email campaign infecting a system. The procedure outlines the process for responding to cybersecurity incidents, following SANS Incident Response Plan outlined on their website at https://www.sans.org/media/score/504-incident-response-cycle.pdf.',
      sections: {
        prep: { text: 'Implement various safeguard to assist the organization in managing cyber-security risks. This includes the following:\n\n- Create a security policy that identifies and outlines rules and procedures to be implemented in order to further protect the organizations data, systems, and other assets.\n- Classify systems and data based on the sensitivity of the information and applicable laws and regulations such as HIPAA and PCI DSS to help prioritize and identify severity of the compromise.\n- Regularly backup data and test backups.\n- Incident response team should engage in tabletop exercises to brainstorm response strategies and capabilities.' },
        ident: { text: 'Monitor servers and network traffic to improve detection abilities. Utilize an IDS to assist with malware detection along with antivirus tools that can detect malware based on behavior.\n\nCollect additional evidence such as the source of the malware, user targeted, other systems affected, and any child processes spawned from the malware.' },
        contain: { text: 'Isolate the system or device from the network to further prevent the malware populating across the network and then capture a forensic image of the system.' },
        erad: { text: 'Remove the malware and any associated artifacts such as running processes, cron jobs, and other identified processes that spawned from the malware.\n\nIdentify the goal of the malware and whether data was exfiltrated from the system; if so, identify the classification of the data breached.' },
        recover: { text: 'After securely removing the malware and any associated artifacts, bring the affected system online.\n\nIf any user passwords were breached, reset the affected user\'s password. Test the affected system to ensure they are functioning as anticipated.' },
        lessons: { text: 'Consider new phishing education campaigns and trainings for Company employees.\n\nWithin two weeks of the incident, the incident response team should conduct a incident analysis and overview with the goal of improving their response plan. Additionally, they should have completed an incident report documenting the incident.' },
        src: { text: '- https://www.sans.org/media/score/504-incident-response-cycle.pdf' },
      },
    },
  },

  'business-memos/log-evidence': {
    example: {
      status: 'incomplete',
      label: 'FLAGGED - never answers the prompt\'s actual question ("any concerns with the file you prepared being admitted?"), so Concerns stays empty · from Team 01, Qualifiers 2025 (LEGP05A). "not been monitored" (means modified) is as written.',
      summary: 'As requested, the security team has explained the process for filtering and exporting logs, proven the admissibility of logs in court, provided defense for Palo Alto’s logs, and provided chain of custody instructions to be followed.',
      sections: {
        hearsay: { text: '1. Hearsay exception: Computer generated logs are generally admissible under the business records exception rule. See #1 in resources.' },
        admissibility: { text: '1. Authentication: Log files must be properly authenticated to be admissible. See #2 in resources.\n\n### Defense for Palo Alto Firewall Logs\n\n1. Log reliability: Palo Alto Networks is a reputable and well-tested vendor. Their logging mechanisms have been audited and are considered reliable for industry.\n1. Upon extraction and filtering of logs, system administrators should immediately create and store a SHA1 or SHA256 file hash of the logs, document the hash, and save it to an external device. This hash will be used to validate that logs have not been monitored since the export.' },
        extract: { text: '- Within Palo Alto, navigate to Monitor > Logs > Traffic\n- Set the time range to the last 24 hours\n- Click “Export” and choose the format “CSV”\n- Generate a file hash of logs to prove integrity using Powershell:\n\n```\nGet-FileHash -Path "logs.log" -Algorithm SHA1\n```\n\n- Use the filter function to show only rows with the 4 target external IP addresses\n- Save the filtered data as a new CSV\n- Generate a second file hash to prove integrity of filtered logs:\n\n```\nGet-FileHash -Path "logs_filtered.log" -Algorithm SHA1\n```', screenshots: ['Palo Alto filtering rule from source.', 'Palo Alto setup of filtering rule.'] },
        custody: { text: '1. The system administrator overseeing this process should send logs to a secure centralized log management system. For your company, the logs are forwarded to the Splunk machine in real time.\n1. Enable audit trails and access controls for users accessing the firewall system or Splunk logs. This has been implemented for both Palo Alto and the Splunk server.\n1. Thoroughly document each step taken during the log filtering and exporting process.\n1. Save a copy of logs to an external offline storage device, such as a flash drive.\n1. The storage device should be kept in a secure facility, and an access log must be maintained tracking:\n\n- People who enter the facility\n- Times of access\n- Reason for accessing facility\n- What was accessed inside the facility', screenshots: ['Palo Alto full log forwarding configuration.', 'Palo Alto partial log forwarding configuration.'] },
        src: { text: '1. https://sherloc.unodc.org/cld/zh/education/tertiary/cybercrime/module-6/key-issues/digital-evidence-admissibility.html\n1. https://jatheon.com/blog/digital-evidence-examples/' },
      },
    },
  },

  'business-memos/breach-regulation': {
    example: {
      status: 'incomplete',
      label: 'FLAGGED - says affected individuals must be notified within 72 hours; under GDPR the 72 hours is for the supervisory authority (Art. 33), individuals are "without undue delay" (Art. 34) · from Team 01, Qualifiers 2025 (LEGP09A). Cites no sources.',
      sections: {
        framework: { text: 'Your organization has detected exfiltration of network packets that contain individual customer data. This includes profiles from citizens of France, Germany, and Italy. These countries have strict data protection regulations. Your organization must comply with the obligations of data protections and notifications of these countries.\n\nThe main regulatory framework involved is the General Data Protection Regulation (GDPR). This governs the collection, processing, and transfer of personal data of citizens in the EU.' },
        steps: { text: '### #1 Notification of Data Breach\n\n- Within 72 hours, the relevant data protection authorities in France, German, and Italy must be notified of the breach discovery.\n- Impacted individuals must also be notified within 72 hours.\n\n### #2 Data Security Measures\n\n- Immediately implement measures to secure the compromised data and prevent further unauthorized access and exfiltration.\n- The security team must conduct a thorough investigation to identify the source and scope of the breach.\n\n### #3 Review Data Handling Practices\n\n- After the incident, the security team must assess and update policies and procedures for data handling to ensure compliance with GDPR, and other relevant laws and regulations.' },
        penalty: { text: 'Failure to comply with GDPR requirements will likely result in substantial fines. This includes penalties up to 20 million euros, or 4% of your organization’s global annual turnover, whichever is higher.\n\nPrompt action is necessary to mitigate the impacts of the breach, and to ensure compliance with GDPR regulations. Your organization must act swiftly to ensure compliance and avoid severe financial and other consequences.' },
      },
    },
  },

  'policies/policy-vs-procedure': {
    example: {
      status: 'incomplete',
      label: 'FLAGGED - the PAM procedure is technically wrong: the same pam_pwquality line is repeated, one copy is put in common-auth (belongs in common-password), and "maxlen" is not a pam_pwquality option · from Team 01, Qualifiers 2025 (LEGP17A)',
      sections: {
        diff: { text: 'The difference between a policy and a procedure is that a policy outlines your organization\'s security requirements and needs. On the other hand, procedures are the technical implementation and steps in order to execute said policy.' },
        policy: { text: 'It is crucial to use secure, complex passwords. Complex passwords prevent a malicious hacker from guessing your password and gaining unauthorized access to the organization\'s computers. Hackers can access your personal data or the company\'s resources if non-complex passwords are used. Here are some guidelines for how to create a complex secure password.\n\nPasswords should have the following characteristics to be considered complex and secure. These characteristics come from the National Institute of Standards and Technology (NIST) security standards (https://pages.nist.gov/800-63-3/sp800-63b.html) and the Microsoft Security Standards (https://support.microsoft.com/en-us/windows/create-and-use-strong-passwords-c5cebb49-8c53-4f5e-2bc4-fe357ca048eb) .\n\n1. User-generated passwords should be at least 8 characters long, and the key space for users should support up to at least 64 characters.\n1. Passwords should contain a combination of uppercase letters, lowercase letters, numbers, and symbols.\n1. Users should be able to create passwords at least 64 characters in length.\n1. Knowledge-based passwords or security questions, such as "What was the name of your first pet?" should not be used.\n1. Passwords should not have hints.\n1. Context-specific words, such as the name of the service for which the password will be used or the user\'s specific username, should not be permitted.\n\nTo generate a secure password, users can use a passphrase-based approach. A passphrase is a more secure form of a password. People use passphrases for the same reasons and in the same way as a password. A passphrase is typically longer and contains spaces. A passphrase can also contain symbols and does not need to be grammatically correct. (As defined by Okta, a security firm: https://www.okta.com/identity-101/password-vs-passphrase/).\n\nSeveral online sites can help you generate secure passwords and passphrases. The website https://www.useapassphrase.com/ details how to create a secure passphrase and helps generate secure passphrases. The website https://www.avast.com/en-us/random-password-generator details how to create a secure password, although these passwords are very complex and are hard to remember for a user.' },
        procedure: { text: 'In order to implement this in your environment, use the following commands within your environment:\n\n```\nsudo nano /etc/pam.d/common-password\npassword requisite pam_pwquality.so retry=3 minlen=8 maxlen=64\npassword requisite pam_pwquality.so retry=3 minlen=8 maxlen=64 minclass=4\nsudo nano /etc/pam.d/common-auth\npassword requisite pam_pwquality.so retry=3 minlen=8 maxlen=64 minclass=4 dictcheck=1\n```' },
        src: { text: '- https://pages.nist.gov/800-63-3/sp800-63b.html\n- https://support.microsoft.com/en-us/windows/create-and-use-strong-passwords-c5cebb49-8c53-4f5e-2bc4-fe357ca048eb\n- https://www.okta.com/identity-101/password-vs-passphrase/\n- https://www.useapassphrase.com/\n- https://www.avast.com/en-us/random-password-generator' },
      },
    },
  },

  'deploy-service/wsl-docker': {
    example: {
      status: 'review',
      label: 'FLAGGED - its own cons list says Docker Desktop does not support Windows Server 2019, which undercuts recommending it for the server · from Team 01, Qualifiers 2025 (VIRT01A)',
      vars: { solution_a: 'WSL', solution_b: 'Docker Desktop', pick: 'Docker Desktop' },
      summary: 'The security team has prepared and summarized two solutions to run Linux-based applications on Windows, as part of a disaster recovery plan—Windows Subsystem for Linux (WSL) and Docker Desktop. The security team recommends Docker Desktop as ideal for this business work environment.',
      sections: {
        a: { text: 'Windows Subsystem for Linux (WSL) is a plugin for Windows that allows Linux operating systems to run within the normal Windows environment. When configured correctly, Linux distributions can easily be installed from the Microsoft Store or downloaded from the internet. For best security, the security team advises downloading Linux distributions for WSL through the Microsoft Store. Refer to Figure 1 for the command to enable WSL in PowerShell.\n\nWSL would meet the requirements and needs of the company. However, it does fall short in a couple of key ways:\n\n1. WSL does not have native support for Linux GUI applications.\n1. WSL requires manual setting up of dependencies—not everything is included in the install.', screenshots: ['Enabling WSL using PowerShell.', 'Installing Ubuntu from the Microsoft Store.'] },
        b: { text: 'Docker is an open-source containerization platform and Docker Desktop is a GUI application to manage containers on that platform. Linux distributions can be installed within Docker, and can be utilized within Windows by use of Docker.' },
        table: {
          columns: ['', 'WSL', 'Linux docker image via Docker Desktop'],
          rows: [
            ['Pros', 'Lightweight\nCan be activated typing “wsl” into a command prompt', 'Lightweight (depending on image)\nVersatile prebuilt images for most common applications\nEasy to isolate and secure'],
            ['Cons', 'No native support for Linux GUI applications\nRequires more manual setup', 'No native support for Linux GUI applications\nDoes not support Windows server 2019 (would require running a windows 10/11 vm on windows server)'],
          ],
        },
        rec: { text: 'The security team recommends using Docker Desktop as the solution to run Linux applications on a Windows machine. Both WSL (Windows Subsystem for Linux) and Docker Desktop are proposed as viable options to accomplish this goal.' },
        just: { text: 'Docker Desktop is recommended as the ideal solution, for its versatility, security, and isolation.' },
      },
    },
  },

  'accounts-passwords/session-lock': {
    example: {
      status: 'incomplete',
      label: 'FLAGGED - says "after 30 minutes of activity"; it means inactivity · from Team 01, Qualifiers 2025 (WINS04T). No verification beyond a GPO screenshot.',
      summary: 'As requested, a new GPO was created to enforce session lockout with a screensaver after 30 minutes of activity.',
      sections: {
        gpo: { text: '- Open GPMC (Group Policy Management Console) by searching in the Windows search bar.\n- Create a new GPO titled “Session Locking Policy”.\n- Navigate to User Configuration > Policies > Administrative Templates > Control Panel > Personalization.\n- Enable the setting “Screen Saver Timeout” and set the value to 1800 seconds (30 minutes).\n- Enable the setting “Password Protect the Screen Saver”.', screenshots: ['Showing GPO configuration that enforces session lockout.'] },
        scope: { text: 'This applies to all machines connected to the Windows domain.' },
      },
    },
  },

  'business-memos/job-description': {
    example: {
      status: 'review',
      label: 'READY · from Team 07, RMCCDC 2024 (ORGR03A "Hiring a New Staff Member"; same variant as ORGR04T). Its "shift left" figure is not included: add your own evidence.',
      vars: { position: 'Security Threat Hunter' },
      summary: 'After reflecting on challenges faced by Team {{team}} and current business needs, Team {{team}} recommends the hiring of an additional staff member to serve as a team Threat Hunter. This will improve team performance by helping the security team be proactive in identifying potential weaknesses in our defenses. A job description to be used in the recruiting and hiring process is provided.',
      sections: {
        why: { text: '### Current Team Organization and Challenges\n\nThe current team organization is 8 primary I.T. specialists who each have a primary responsibility and a secondary responsibility. This ensures that if a member cannot fulfill their primary responsibility, the secondary staff can complete critical business tasks. There are also 4 alternates who fill in for the primary specialists as needed. The primary responsibilities for team members are shown in the table below:\n\n- Team Lead\n- Linux Systems\n- Firewalls\n- Windows Systems\n- Websites and Web Platforms\n- Network Engineering\n- Business Communication\n- Threat Intelligence (SIEM)\n\nA major challenge faced by the current team is that all team roles are blue team defense focused so often vulnerabilities or attack methods are not investigated. The attacking hackers that threaten our organization frequently find weaknesses in our systems that we do not have a team member able to find and patch beforehand.\n\n### Business Need for a Threat Hunter\n\nA threat hunter would provide a proactive element to our security posture by actively improving our infrastructure and finding problems before they become problems. Similar to how a software bug has the lowest cost to fix if it is discovered early on in the development process, finding a weakness in the organization’s cybersecurity proactively before it is abused by hackers is far more cost effective when compared to dealing with the problem after incident response. This represents a shift left in finding vulnerabilities which will reduce security costs as shown in the graphic below.\n\n### Expected Improvements to Team Performance\n\nA new staff member working as a threat hunter would be able to search for and track threats to the organization before they are used in attacks instead of addressing incidents that have already occurred as a traditional Incident Response team. We would expect to see the following improvements:\n\n- **Cost savings of at least 15%** due to reduced expenses of Incident Response activity\n- **Proactive defensive stance** instead of only reactionary actions\n- **Reduced vulnerabilities** across organization environment by **at least 1-2 vulnerabilities per week**\n\nBelow is the related job description designed for use in the recruiting and hiring process. Please reply if there are any additional actions Team {{team}} should perform at this time.', screenshots: ['Shift Left illustration of the increasing cost of finding vulnerabilities in production'] },
        summary: { text: '{{company}} is hiring for a Security Threat Hunter who will be responsible for identifying vulnerabilities in the organization’s security system and proactively contributing to the defensive posture of {{company}}.' },
        duties: { text: '- Search for security gaps by performing risk assessment, penetration testing, and identifying internal risks\n- Investigate the network systems or endpoints to identify threat patterns or indicate compromise and analyze the threat\n- Report the identified threats to the Security officer or Security Operations Center\n- Coordinate with the management team to resolve the cyber threats and patch the security system to prevent the same attack from recurring\n- Advance skills with the latest technologies and tools in cybersecurity' },
        tech: { text: 'Beneficial but not required:\n\n- Experience with more than one or more enterprise scale EDR and SIEM tool.\n- Experience with offensive security tools such as Cobalt Strike/Metasploit, techniques such as OSINT, and the methods used to compromise large enterprise networks.\n- Previous experience performing digital forensics or indecent response on major security incidents.' },
        soft: { text: '- Demonstrated ability to self-direct, with minimal supervision to achieve assigned goals.' },
        quals: { text: '- 2+ years of experience in a technical role in the areas of Security Operation, Incident Response, Offensive Security/Red Team, or Cyber Threat Intelligence\n- Experience analyzing system, network, and application logging for attack techniques at all stages of the cyber kill chain\n- Direct experience working with very large datasets and log analysis tools including but not limited to: Splunk, Python, Pandas, SQL, Hadoop, Hue\n\nThis job will be open and accepting applications for a minimum of seven days from the date of posting.\n\nThe following resources were used as references in the creation of this memo and job description:\n\n- https://www.infosectrain.com/blog/roles-and-responsibilities-of-a-threat-hunter/\n- https://careers.bankofamerica.com/en-us/job-detail/24003933/threat-hunter-multiple-locations' },
      },
    },
  },

  'hardening/smb': {
    example: {
      status: 'review',
      label: 'READY · from Team 02, WRCCDC Invitational #3 2025-26 (Inject 05 "SMB Hardening"). Figures 1-4 were screenshots: add yours as evidence.',
      vars: { share: 'FTPRoot' },
      sections: {
        steps: { text: 'We were able to connect to our FTP server over SMB from the Windows computer {{client}}.\n\nWe then checked the sharing settings of the FTP share folder and discovered that it was indeed shared.\n\nBy navigating to Advanced Sharing and unchecking the box "Share Folder" we were able to disable sharing.\n\nWe then checked if we could still access that folder over SMB from {{client}} and verified that we could not.', screenshots: ['{{share}} Connected Over SMB', '{{share}} Shared to the Network', 'Sharing Disabled', 'No {{share}} Access'] },
        why: { text: 'Our FTP server contains it\'s own system for checking whether or not a user should be able to access the share. By disabling SMB, we don\'t have to maintain an access list in two places, making it easier to make sure that only the people who should have access can access the share. Also, disabling SMB reduces the number of protocols an attacker could use to gain access to this machine.' },
      },
    },
  },

  'policies/incident-report': {
    example: {
      status: 'review',
      label: 'READY · from Team 03, MW Invitational #1 2025 (MWCCDC IR template). Figures 1-4 were screenshots: add yours as evidence.',
      summary: 'This report documents the actions of malicious actors within our systems and the steps taken to respond to these incidents and remediate the actions taken.\n\nTeam {{team}} would like to report evidence of a malicious actor in the domain controller attempting to move laterally through the network.\n\nWe identified that they were attempting to change remote code execution using psexec.exe.',
      sections: {
        details: {
          text: 'A malicious actor gained access to the company\'s domain controller and attempted to achieve remote code execution using PsExec.exe in order to compromise the domain controller machine.',
          rows: [
            ['Affected Host', 'Windows Server 2019 AD/DNS'],
            ['Source IP Address', '{{attacker_ip}}'],
            ['Destination IP Address', '{{dc_ip}}'],
            ['Port and Service', '445/SMB (PsExec)'],
            ['Initial Access Timestamp', '1:44 PM CST'],
            ['Service Downtime', 'None'],
            ['Remediated Timestamp', '1:55 PM CST'],
            ['Affected Account', 'Administrator'],
          ],
        },
        vuln: { text: 'The "Administrator" account had default, insecure, compromised credentials, and SMB was publicly accessible.' },
        access: { text: 'The attacker was able to login to the "Administrator" account with default credentials. Team {{team}} discovered this by using our Splunk indexer to look for service creation events on the domain controller (event code 7045), which are associated with PsExec, and then looking for remote login events (event code 4624) around the same time frame.', screenshots: ['Splunk search revealing malicious PsExec service creation (event code 7045)', 'Login to user "Administrator" from remote IP ({{attacker_ip}})'] },
        impact: { text: 'Team {{team}} was able to catch the malicious access to our systems and as a result was able to prevent any impact to our business services. Windows Defender caught and stopped their attempts to use PsExec to execute malicious commands by quarantining their execution scripts, which alerted us to their activity.', screenshots: ['Windows Defender Antivirus threat detected.'] },
        erad: { text: 'The account used by the malicious actor "Administrator" was disabled by Team {{team}}.' },
        remed: { text: 'Team {{team}} blocked SMB ports 445 and 139 along with the Remote Procedure Call port 135 on the VyOS Router.', screenshots: ['Firewall rules on VyOS.'] },
      },
    },
  },

  'logging-siem/central': {
    example: {
      status: 'incomplete',
      label: 'READY · from Team 03, MW Invitational #1 2025 (TOOL25T). Mostly figure captions: it shows the structure more than the wording. Add your screenshots as evidence.',
      summary: 'The following memo shares information regarding centralized logging using Splunk. This allows us to efficiently use the syslog and event log data produced by the servers, bringing all logging to one place.',
      sections: {
        repo: { text: 'The server hosting the central logging is the Splunk server at local IP Address {{siem_ip}} and public IP Address [[public IP]]. It is running Splunk Enterprise version 9.2.4 (upgraded to patch a severe security vulnerability).', screenshots: ['List of hosts (partial)'] },
        fw: { text: 'Firewall security policy changes in Cisco allowing Splunk ports 8000 and 9997 out.\n\nFirewall security policy changes in Palo Alto allowing Splunk ports 8000 and 9997 in to the server hosting Splunk.', screenshots: ['Firewall security policy changes in Cisco allowing Splunk ports 8000 and 9997 out.', 'Firewall security policy changes in Palo Alto allowing Splunk ports 8000 and 9997 in to the server hosting Splunk.'] },
        fwd: { text: 'Forwarding configured on Fedora Webmail.\n\nForwarding configured on Windows 2019', screenshots: ['Forwarding configured on {{host}}.'] },
        test: { text: 'Test-message records from Windows in the central repository.\n\nTest-message records from Fedora Webmail in the central repository.', screenshots: ['Test-message records from Windows in the central repository.', 'Test-message records from Fedora Webmail in the central repository.'] },
      },
    },
  },

  'vpn/research': {
    example: {
      status: 'incomplete',
      label: 'READY · from Team 01, WRCCDC Western #2 2024 (Inject 8 "Company VPN"). Its deployment and user-guide half is not included here; see the vpn/implement example for that part.',
      vars: { pick: 'PI VPN' },
      sections: {
        table: {
          columns: ['', 'Strengths', 'Weaknesses'],
          rows: [
            ['PI VPN', 'Quick and easy to install.\nEasy to connect to and use.', 'Limited configuration options.'],
            ['OpenVPN', 'Widely used and supported.\nWide range of configuration options.', 'Complicated and lengthy setup process.'],
            ['Wireguard', 'Fast and secure.\nWidely used on Linux.', 'Requires advanced knowledge to configure directly.'],
          ],
        },
        tests: { text: 'After considering, installing, and testing each of these options, our team concluded that PI VPN was the best VPN to use in this environment. PI VPN has the quickest and easiest setup process of all three considered options. We chose to install PI VPN on the “{{vpn_host}}” machine.' },
        rec: { text: 'As requested, Team {{team}} has researched and deployed a VPN solution for the company network. Our team considered three options: PI VPN, OpenVPN, and Wireguard.' },
      },
    },
  },

  'vpn/implement': {
    example: {
      status: 'review',
      label: 'READY · from Team 02, WRCCDC Invitational #3 2025-26 (Inject 08 "Tailscale VPN"). Its 36 screenshots are not included: add yours as evidence.',
      vars: { vpn: 'Tailscale', device1: 'Windows 2019 Server', device2: 'Windows 2022 server' },
      summary: 'This documents outlines the successful installation and implementation of Tailscale for our organization.\n\nTailscale was successfully installed on the {{device1}} and on the {{device2}}, having two devices to show full implementation.',
      sections: {
        install: { text: 'Tailscale was installed by:\n\n1. Navigating to https://tailscale.com/download and installing Tailscale for Windows or Linux, depending on host device.\n1. Selecting "tailscale-setup-1.90.6.exe"\n1. Allowing the file to execute by clicking ‘run’\n1. Allowing the application to make changes to the device.\n1. Agreeing to the license terms and conditions (after reading them), and choosing ‘install’.\n1. Choosing ‘Get Started’ after successful initial installation.\n1. Choosing ‘sign in to your network’\n1. Choosing to ‘Sign in with Google’ and logging in with our company email.\n1. Choosing ‘Connect’\n1. Repeating the process on a second device ({{device2}}) for proof of connection\n1. {{device1}} and {{device2}} are now connected to our network via VPN.\n\nThe Tailscale VPN is properly implemented on our network.', screenshots: ['A screenshot under each installation step (download page, installer, sign-in, connected), on both devices'] },
        guide: { text: '1. Install the box by following the installation process above. This guide assumes Tailscale is already installed on the user\'s device.\n1. Log in to your ‘{{company}}’ employee email by clicking the ‘Sign in to your network’ (this should appear immediately after Tailscale is installed) and selecting "Sign in with Google".\n1. Choose "Connect"\n1. Your device will now be connected to Tailscale. Your connection status can be seen by clicking the Tailscale Logo in your System tray\n1. Right click on the Tailscale logo to display the connection menu. Connect/Disconnect the Tailscale VPN at anytime by clicking the word "Tailscale" at the top of the menu.', screenshots: ['A screenshot under each step of the guide (sign-in, Connect, the system tray icon and its menu)'] },
      },
    },
  },

  'deploy-service/powershell-linux': {
    example: {
      status: 'review',
      label: 'FLAGGED - $DISK_USAGE is a string, so "-ge 90" compares as text and "100" -ge 90 comes out false · from Team 04, Regionals 2025 (LINX09T). The memo has no install commands; the script and output are typed from its screenshot.',
      vars: { server: 'Debian' },
      summary: 'As requested, Team {{team}} has implemented Power Shell on Linux.',
      sections: {
        steps: { text: 'The Debian machine was chosen to run Power Shell. Figure 1 shows the version of Power Shell installed on Debian (7.5.0).', screenshots: ['Showing Power Shell version to be 7.5.0.'] },
        use: { text: 'Figure 2 shows the file contents of the Power Shell disk usage monitoring script, and the result of running the script. Running the script in figure 2 showed the disk usage at 4%.\n\n```\n$THRESHOLD = 90\n\n$DISK_USAGE = (df / | Select-String -Pattern \'(\\d+)%\' | ForEach-Object { $_.Matches.Groups[1].Value })[0]\n\nif ($DISK_USAGE -ge $THRESHOLD) {\n        Write-Host "Disk space is running low! Current usage is ${DISK_USAGE}%"\n} else {\n        Write-Host "Disk space is still within acceptable limits. Current usage is ${DISK_USAGE}%"\n}\n```\n\n```\n$ pwsh ./diskmon.ps1\nDisk space is still within acceptable limits. Current usage is 4%\n```', screenshots: ['Showing the Power Shell disk usage script content, and the script running, with a result of 4% disk usage.'] },
      },
    },
  },

  'deploy-service/nms': {
    example: {
      status: 'incomplete',
      label: 'FLAGGED - says SNMP is secured, but its own command is SNMP v2c with community "public" · from Team 01, Qualifiers 2025 (SOFT02T)',
      vars: { server: 'Ubuntu Server 18' },
      sections: {
        install: { text: 'The security team has installed LibreNMS via a Docker Container. The chosen device to host LibreNMS was the Ubuntu Server 18. LibreNMS was configured to monitor all servers on the network to provide alerts if a device becomes unreachable. Once a host was added via SNMP, the following command was run on LibreNMS to confirm connectivity\n\n```\nsnmpwalk -v 2c -c public [[IP]]\n```\n\n### Securing LibreNMS\n\nSNMP was secured by restricting the IP address to only be readable from the LibreNMS server. This ensures the NMS server can poll interface packet rate statistics which preventing exploitation of the SNMP protocol across the network. Additionally, LibreNMS was configured to accept packets from specific hosts by IP address.', screenshots: ['Working LibreNMS environment', 'Current packet rate statistics for each server.', 'LibreNMS SNMP accepting packets from specific hosts by IP address', 'LibreNMS setup security'] },
        devices: {
          screenshots: ['SNMP installation process running on a server'],
          text: 'The screenshot in Figure 5 shows the SNMP installation process underway on an example server. Each of the servers was configured to report packet rate statistics to the NMS server via SNMP. The status of each server is outlined in Table 1 below.',
          columns: ['Service', 'IP Address', 'Hostname', 'SNMP Configured and Running'],
          rows: [
            ['Docker/Remote', '[[IP]]', '2019', 'No'],
            ['DNS/NTP', '[[IP]]', 'Debian 10', 'Yes'],
            ['Web', '[[IP]]', 'Ubuntu 18', 'N/A — Hosted Server'],
            ['AD/DNS/DHCP', '[[IP]]', '2019 AD', 'No'],
            ['DHCP', '[[IP]]', 'Ubuntu Workstation', 'Yes'],
            ['Splunk', '[[IP]]', 'Splunk', 'Yes'],
            ['E-comm', '[[IP]]', 'CentOS7', 'Yes'],
            ['Webmail/WebApps', '[[IP]]', 'Fedora 21', 'Yes'],
          ],
        },
      },
    },
  },

  'remote-access-automation/playbooks': {
    example: {
      status: 'incomplete',
      label: 'FLAGGED - the submitted memo printed the Ansible Vault password in plain text (that sentence is left out here; never put the vault password in a memo) · from Team 03, WRCCDC Invitational #1 2026-27 (Inject 06 "Infrastructure Automation"). Playbooks are as submitted, including the odd indentation in Playbook 5.',
      vars: { playbook_3: 'System_info', playbook_4: 'Network_info', playbook_5: 'Backup' },
      summary: 'Ansible has been deployed and tested on the central host **{{control_host}}** ([[IP]]). 5 tests have been created: cpu_memory, storage, system_info, network_info, and backup. These playbooks have been tested on our infrastructure and have been shown to accurately report device data.',
      sections: {
        vault: { text: 'The vault has been configured with every machine’s administrator login to properly run the reports. Below is the vault creation and encryption proof on host {{control_host}}:\n\nTo change the credentials associated with the ansible vault as passwords and users rotate, use command “ansible-vault edit group_vars/all.yml” from the /root/ansible directory. These can be changed at any time.', screenshots: ['Vault creation and encryption proof on host {{control_host}} (ls -l and head -n 1 of group_vars/all.yml, showing $ANSIBLE_VAULT;1.1;AES256)'] },
        pb1: { text: 'There are 5 playbooks currently assigned to this ansible host:\n\n1. **Cpu_memory**\n1. **Storage**\n1. **System_info**\n1. **Network_info**\n1. **Backup**\n\nEach playbook performs a different function. The first 2 playbooks do what was requested, measuring CPU/Memory and Storage.\n\n```\n- name: Collect CPU and memory usage statistics\n  hosts: linux\n  gather_facts: yes\n\n  tasks:\n    - name: Collect CPU and memory statistics\n      ansible.builtin.shell: |\n        echo "Hostname: $(hostname)"\n        echo "CPU cores: $(nproc)"\n        echo "Load average: $(awk \'{print $1, $2, $3}\' /proc/loadavg)"\n        echo\n        echo "CPU usage snapshot:"\n        top -bn1 | grep "Cpu(s)"\n        echo\n        echo "Memory usage:"\n        free -h\n      register: resource_stats\n      changed_when: false\n\n    - name: Display CPU and memory statistics\n      ansible.builtin.debug:\n        msg: "{{ resource_stats.stdout }}"\n```' },
        pb2: { text: '```\n---\n- name: Collect storage utilization statistics\n  hosts: linux\n  gather_facts: yes\n\n  tasks:\n    - name: Collect filesystem utilization\n      ansible.builtin.command:\n        cmd: df -hT\n      register: storage_stats\n      changed_when: false\n      failed_when: false\n\n    - name: Display filesystem utilization\n      ansible.builtin.debug:\n        msg: "{{ storage_stats.stdout }}"\n```' },
        pb3: { text: '**System_info** collects basic system information, such as Hostname, Operating System, Kernel, available RAM, etc.\n\n```\n- name: Collect system information\n  hosts: linux\n  gather_facts: yes\n\n  tasks:\n    - name: Display system information\n      ansible.builtin.debug:\n        msg:\n          - "Hostname: {{ ansible_hostname }}"\n          - "OS: {{ ansible_distribution }} {{ ansible_distribution_version }}"\n          - "Kernel: {{ ansible_kernel }}"\n          - "Architecture: {{ ansible_architecture }}"\n          - "CPU cores: {{ ansible_processor_vcpus }}"\n          - "Total memory: {{ ansible_memtotal_mb }} MB"\n          - "Uptime: {{ ansible_uptime_seconds }} seconds"\n```' },
        pb4: { text: '**Network_info** collects the machine’s network configuration, such as network interfaces, IP addresses, routing information, and default gateway\n\n```\n- name: Collect network information\n  hosts: linux\n  gather_facts: yes\n\n  tasks:\n    - name: Collect network configuration\n      ansible.builtin.shell: |\n        echo "Hostname: $(hostname)"\n        echo\n        echo "Network interfaces:"\n        ip -brief addr\n        echo\n        echo "Routing table:"\n        ip route\n      register: network_info\n      changed_when: false\n\n    - name: Display network information\n      ansible.builtin.debug:\n        msg: "{{ network_info.stdout }}"\n```' },
        pb5: { text: '**Backups** creates backup directories on the ansible host, under /root/ansible/backups/<hostname>\n\n```\n- name: Back up important Linux configuration files\n  hosts: linux\n  gather_facts: yes\n\n  tasks:\n    - name: Create host backup directory\n  ansible.builtin.file:\n    path: "/root/ansible/backups/{{ inventory_hostname }}"\n    state: directory\n    mode: "0700"\n  delegate_to: localhost\n\n- name: Back up hosts file\n  ansible.builtin.fetch:\n    src: /etc/hosts\n    dest: "/root/ansible/backups/{{ inventory_hostname }}/"\n    flat: yes\n  ignore_errors: yes\n\n- name: Back up SSH configuration\n  ansible.builtin.fetch:\n    src: /etc/ssh/sshd_config\n    dest: "/root/ansible/backups/{{ inventory_hostname }}/"\n    flat: yes\n  ignore_errors: yes\n```' },
        usage: { text: 'The Ansible central host **{{control_host}}** has a directory located at /root/ansible, which is where the Ansible vault and playbooks all live.\n\nThe playbooks were successfully run, which can be found here:', screenshots: ['The playbooks directory (ls -lh playbooks/)', 'Proof of running: the PLAY RECAP for each host'] },
        attached: { on: true, text: 'The full playbook scripts can be found in the submission .ZIP file.' },
      },
    },
  },

  'disaster-recovery/dr-facility': {
    example: {
      status: 'review',
      label: 'FLAGGED - the mysqldump option is printed with an em dash ("—all-databases"); it must be --all-databases or the command fails · from Team 01, Qualifiers 2025 (DSGN06T). backup.sh is typed from its screenshot.',
      vars: { server: 'Ubuntu Web Server' },
      sections: {
        scope: { text: 'This memo provides documentation of the Disaster Recovery Plan for the Ubuntu Web Server which hosts our publicly accessible E-Commerce website. If the server is made inoperable this solution enables the website to be restored and made available on another compatible server.' },
        backup: { text: '### 1. Maintain regular backups of website files and database\n\nIn order to restore the website, regular backups of the website files (/var/www/html directory) and the MySQL database must be kept so that the website data is available to be transferred to the new server which will host the restored website. Backups can be created by running the command: mysqldump —all-databases for MySQL and cp /var/www/html -r for the website files. Figure 1 below demonstrates these commands running on the Ubuntu Web Server.\n\n### 2. Copy backup of website files and database to new server\n\nThe database and website backup files must be copied to the new server so they are available to perform the website restore. This involves using **scp** to securely copy the files to the new server.\n\nTeam {{team}} designed a cron job (named backup.sh) which performs the backup (step 1) and copy (step 2) actions at a regular interval so that backup files are continually created of the Ubuntu Web Server and are stored on an additional VM (currently no IP address is known for the blank DR VM server).\n\n```\nsudo mysqldump --all-databases > ~/db_backup.sql\ncp -r /var/www/html ~/html\nzip -r html.zip ~/html\n\nscp db_backup.sql user@ip:.\nscp html.zip user@ip:.\n```', screenshots: ['Creating backups of the Ubuntu Web Server MySQL database and website files', 'backup.sh script to be run as cron job', 'Cron job to execute backup.sh'] },
        build: { text: '### 3. Install necessary software on new server\n\nThe software needed to run the website and database must be installed on the new server in order for the website to function properly. The following packages of software should be installed on the new server. This can be done by running the command: sudo apt install <package name>\n\n- apache2\n- mysql\n- php\n- phpmyadmin' },
        restore: { text: '### 4. Restore website on new server\n\nOnce the required software is installed (step 3) and backup files (step 1) are available on the new server (step 2), the website can be restored. This is performed by moving the copied /var/www/html directory into the apache2 /var/www/html directory where Apache2 looks for the root of a website and the supporting files. By moving the backup files to the web directory apache will begin to serve the content on the new server.\n\n### 5. Restore database on new server\n\nNow that the website files are restored and MySQL software is downloaded, the MySQL dump file can be restored so the database values are populated on the new server. This is done by running the following command: mysql -u <username> -p <db-name> < db_backup.sql and providing the password for the MySQL user.' },
        changes: { text: '### 6. Ensure networking allows public access to website\n\nOnce the website files and database backup values have been restored on the new server, the penultimate step is to adjust networking policies to ensure the network traffic coming to the website is redirected to the new server instead of the old Ubuntu Web Server. This can be performed by NAT translation on the perimeter Palo Alto router/firewall. NAT translation will redirect traffic from original server to the new server without end users being aware that the web server has changed.\n\nAdditionally, firewall rules on new server must allow HTTP inbound and outbound traffic on port 80. This can be set with ufw or IPTables.' },
        verify: { text: '### 7. Test restored website functionality\n\nFinally, visit the website from outside the network to ensure the NAT translation functions properly and that the website files and database are configured correctly. If the website is visible and functions properly the Disaster Recovery Plan for the Ubuntu Web Server has succeeded.\n\n### Considerations\n\n- The Ubuntu Web Server runs on the OS Ubuntu 18. Ideally a blank VM server also running Ubuntu 18 would provide the best compatibility.\n- Ensure the backup files are removed after restoration in order to prevent data loss of any sensitive files within the web directory or database.' },
      },
    },
  },

  'team-feedback/skills-gap': {
    example: {
      status: 'outdated',
      label: 'FLAGGED - no plan to close the gap (Plan to Close the Gaps stays empty) · from Team 01, Qualifiers 2025 (ORGR01T). Member initials replaced with Member 1-8.',
      sections: {
        needs: { text: 'Our team is responsible for actively defending multiple machines, including Windows Servers, Linux Servers, Linux workstations, Windows workstations, and a Palo Alto firewall.  Below is a list of the devices running required services/technologies:\n\n- Windows Server: Active Directory, DNS, Docker\n- Linux servers: HTTP servers, Splunk, DNS, SMTP, POP3\n- Firewall: QoS, port blocking' },
        matrix: {
          text: 'The security team works across multiple technical disciplines and professional responsibilities. Eight full-time staff comprise the security team.\n\nTo best organize business needs and strengthen team efficacy, each team member has a primary responsibility and a secondary responsibility. Team members spend most of their time developing skills and tools to aid their primary responsibility In the case that an individual is unable to fulfill their primary responsibility, the secondary lead will step in and assume responsibilities. The team is also cross-trained in all responsibilities at a shallow level in order to best understand the cohesion of the business.',
          columns: ['Individual (initials)', 'Primary', 'Secondary', 'Primary Key Skills & Knowledge'],
          rows: [
            ['Member 1', 'Team Lead', 'Incident Investigation', 'Skills: Leadership, Business Prioritization, Professional Communication, each concept required for the team\nTools: Each tool required for the team'],
            ['Member 2', 'Windows Administration', 'Linux Administration', 'Skills: Operating Systems, Incident Investigation, Networking\nTools: Active Directory, Domain Name Services, Windows Operating Systems, PowerShell, Windows Servers'],
            ['Member 3', 'Firewalls', 'Team Lead', 'Skills: Networking, Subnetting\nTools: Palo Alto Firewalls, Cisco Firewalls, pfSense'],
            ['Member 4', 'Network Engineering', 'Firewalls', 'Skills: Networking, Subnetting\nTools: ESXI, Cacti, ProxMoc'],
            ['Member 5', 'Vulnerability Management', 'Network Engineering', 'Skills: Threat Intelligence, Adversary Emulation, Vulnerability Management\nTools: OpenVAS, Nmap, Wireshark'],
            ['Member 6', 'Linux Administration', 'Threat Intelligence', 'Skills: Operating Systems, Incident Investigation, Networking, Mail\nTools: Linux Operating Systems,'],
            ['Member 7', 'Organizational Communications', 'Windows Administration', 'Skills: Risk Management, Industry Standards, Business Communication, Professional Communications, Customer Success\nTools: Microsoft Office, Libre Office'],
            ['Member 8', 'Incident Investigation', 'Organizational Communications', 'Skills: Security Information and Event Monitoring (SIEM), Incident Response, Operating Systems, Networking\nTools: Splunk'],
          ],
        },
        gaps: { text: 'One weakness our team has is bash scripting. This weakness has been highlighted in a few tasks, such as printing and modifying process priority in our Linux systems. Apart from that, many individual weaknesses are remedied through teammate collaboration and support.' },
      },
    },
  },

  'hardening/verify-protocol': {
    example: {
      status: 'review',
      label: 'FLAGGED - the PowerShell command used is never written in the text, only shown in screenshots · from Team 01, Qualifiers 2025 (WINS01T). Its 9 figures (3 per server) are not included: add yours under each server.',
      vars: { protocol: 'NetBEUI' },
      sections: {
        how: { text: '- First, the security team checked the network adapter properties for each of the Windows machines and confirmed that NetBEUI drivers were not installed.\n- Then the team confirmed that NetBEUI wasn’t running via PowerShell commands.\n- Finally, the team confirmed that there were no NetBEUI network devices in Device Manager. Screenshots proving this are visible in Figures 1 to 9 in the Appendix.' },
        conclusion: { text: 'As requested, the security has audited the systems and confirmed that the NetBEUI protocol is not being used anywhere in the network. This was verified through three separate vectors.' },
        hosts: { screenshots: ['A screenshot showing no NetBEUI drivers in the network adapter properties for {{host}}.', 'A screenshot showing no NetBEUI devices in Device Manager for {{host}}.', 'A screenshot showing no NetBEUI connections in PowerShell on {{host}}.'] },
      },
    },
  },

  'deploy-service/ids': {
    example: {
      status: 'incomplete',
      label: 'READY · from Team 06, WRCCDC Western #1 2024 (Inject 02 "Install IDS"). Its installation proof was screenshots: add yours as evidence.',
      vars: { ids: 'Suricata', option_2: 'Snort', option_3: 'Zeek' },
      summary: 'As requested, our team has identified and installed an intrusion detection system (IDS). We have chosen to use Suricata. This memo details our reasoning for choosing Suricata, proof of installation, details of incompatible hosts, and a guide for operating Suricata.',
      sections: {
        why: { text: 'Suricata, Snort, and Zeek all had similar features to each other. The main deciding factors were performance and platform support. Snort and Zeek are both single-threaded, significantly impairing performance for those IDS options. Whereas Suricata is multi-threaded, which is a major advantage for performance. Suricata and Snort both support current and legacy Operating Systems, whereas Zeek has limited support for legacy Operating Systems. This led us to choose Suricata for its advantages with performance and Operating System support.' },
        compare: {
          text: 'Our team researched a few different IDS options. The most viable options were Suricata, Snort, and Zeek. We identified the following pros and cons for each IDS.\n\n### Suricata\n\nPros:\n\n- Deep packet inspection. Suricata can analyze the contents of packets, not just the headers.\n- Real-time detection. Suricata can detect and block malicious behavior.\n- Multi-threaded. Suricata is multi-threaded, increasing performance of the IDS. This is especially important because network traffic can easily overwhelm an IDS that doesn’t use multi-threading.\n\nCons:\n\n- Complexity. To take full advantage of Suricata’s features, complex configurations are required. It may take significant time for network engineers to become familiar with using Suricata.\n- False positives. Suricata uses signatures and rules to identify threats. This can lead to false positives.\n\n### Snort\n\nPros:\n\n- Signature and behavioral based detection. Snort can easily identify known malware signatures. Snort can also do behavioral based detection.\n- Inspecting network traffic. Snort can inspect network traffic for patterns or signatures.\n- Platform support. Snort supports most operating systems, including many older/legacy operating systems.\n\nCons:\n\n- Performance impact. Snort is single-threaded, which can lead to a negative performance impact.\n- Limited inspection on encrypted traffic. Snort has a difficult time inspecting encrypted traffic for malicious behavior or signatures.\n\n### Zeek\n\nPros:\n\n- Comprehensive network analysis. Able to do packet content analysis.\n- Passive network traffic analysis.\n- Behavior based analysis.\n\nCons:\n\n- Not a full dedicated IDS.\n- Hard to install on older Operating Systems.\n- Complicated to setup.\n\n### Comparison of All',
          rows: [
            ['Performance', 'High, multi-threaded.', 'Low, single-threaded.', 'Low, single-threaded.'],
            ['Signature Detection', 'Yes', 'Yes', 'Yes'],
            ['Behavioral Detection', 'Yes', 'Yes', 'Yes'],
            ['Packet Content Analysis', 'Yes', 'Limited', 'Limited'],
            ['Legacy Platform Support', 'Yes', 'Yes', 'Limited'],
            ['Complexity', 'High', 'Medium', 'High'],
          ],
        },
        incompat: { text: 'We installed the IDS on the router. Therefore, we had no incompatible devices. Traffic is monitored at the router.' },
        guide: { text: 'The IDS can be used by viewing the log files in the /var/log/suricata/ directory. These log files contain information relating to security events detected by the installed rules.\n\n### References\n\n- https://www.stamus-networks.com/suricata-vs-zeek\n- https://www.stamus-networks.com/blog/what-are-the-benefits-of-suricata\n- https://www.stamus-networks.com/blog/what-are-the-disadvantages-of-suricata\n- https://cyberhub.sa/posts/2479\n- https://medium.com/@rubenszimbres/install-a-real-time-intrusion-detection-system-ids-with-suricata-and-python-7ce7ae78c5a3' },
        install: { screenshots: ['Installation proof: Suricata installed and running on the router'] },
      },
    },
  },

  'deploy-service/tftp': {
    example: {
      status: 'review',
      label: 'READY · from Team 01, Qualifiers 2024 (SOFT04T). The cron line is typed from its screenshot (the text says "every minute"; the line runs daily). Minor: says port 69 "outbound" then "inbound".',
      vars: { server: 'Debian 10 server', tftp_dir: '/srv/tftp' },
      summary: 'Team {{team}} has successfully installed a TFTP Server within our existing infrastructure on the Debian 10 server. We have modified the firewall and security policy to allow for file upload and access to this TFTP Server’s dedicated directory. This TFTP server can now be used to serve OS software updates or other files. The TFTP is only accessible from the internal network.',
      sections: {
        why: { text: 'The Debian 10 server was selected because it is in the “Internal” subnet and has sufficient storage space to hold files uploaded to the TFTP directory. The storage available on the Debian server is show in the screenshot below:', screenshots: ['The storage available on the Debian server'] },
        software: { text: 'We installed the tftp-hpa package through apt install available in the Debian Linux distribution. This installs the necessary files and software to run a TFTP server. By installing this software we are able to run our TFTP server. A screenshot of the software installation is shown below:\n\n```\nsudo apt update\nsudo apt install tftpd-hpa\n```', screenshots: ['The software installation'] },
        fw: { text: 'To prevent abuse or unauthorized access of our TFTP server we opened port 69 outbound for our known internal IP addresses over UDP. This was set by an access list of our internal machines. While FTP uses TCP, TFTP or Trivial File Transfer Protocol uses UDP. We allowed for inbound traffic over UDP to port 69 on the Debian 10 server.' },
        dir: { text: 'The directory used by TFTP is /srv/tftp has been set to have the least privilege needed for use which is show by the ls -la command in the screenshot below:', screenshots: ['ls -la of the TFTP directory /srv/tftp'] },
        overrun: { text: 'To prevent our TFTP directory from being overrun with files we set up a cron job on the Debian server that is hosting the TFTP server which will run every minute and if there is a file that has been in the directory for more than 30 days it will be deleted. This will free up space so that there is enough available storage for new files.\n\n```\n0 0 * * * find /srv/tftp* -type f -mtime +30 -exec rm {} \\;\n```', screenshots: ['The cron job that deletes files older than 30 days'] },
        proof: { text: 'This screenshot shows our functioning TFTP service on the Debian 10 server\n\nThis screenshot shows our ability to connect to the Debian TFTP server from our Ubuntu Server and then put a file into the TFTP directory', screenshots: ['Our functioning TFTP service on the Debian 10 server', 'Connecting to the Debian TFTP server from our Ubuntu Server and putting a file into the TFTP directory'] },
      },
    },
  },

  'business-memos/firewall-features': {
    example: {
      status: 'incomplete',
      label: 'READY · from Team 01, Qualifiers 2025 (BCOM06A). Figures 1-5 were screenshots: add yours as evidence.',
      sections: {
        concern: { text: 'This memo provides an outline of the features enabled on the firewall which can thwart the exploitation of applications by verifying the communications between client and server are legitimate business traffic. There are four security features in effect to protect network traffic which are: 1) Web Download and Upload Preventions 2) URL Blocking Security Policy 3) Security Profiles 4) SSL Decryption. Working together these features provide strong security and ensure that attempts to exploit application communications are found and stopped. Security is our highest priority at {{company}} and we hope this memo helps you feel assured that we are maintaining the highest levels of security.' },
        features: { text: 'There are several exploit prevention features on the Palo Alto Next Generation firewall specifically for preventing exploitation of websites and apps. Each feature that is enabled is described in detail with screenshots demonstrating the functionality currently in place on the firewall.\n\n### 1. Web Download and Upload Preventions\n\nThere are several web download and upload preventions enabled through a File Blocking Security Policy that prevents the upload of various malicious file types as well as the download of php files (to prevent the servers reaching out to remote php instances).\n\n### 2. URL Blocking Security Policy\n\nURL Blocking Security Policy is also enabled which is attached to any browsing of websites that will block access of suspicious URLs, including newly created domains and known malicious domains.\n\n### 3. Security Profiles\n\nSecurity Profiles are also installed and enabled with up-to-date malware signatures and information about vulnerabilities to block the exploitation of known vulnerabilities against our servers.\n\n### 4. SSL Decryption\n\nLastly, SSL decryption is enabled on the firewall so that any web access from inside our network (except for traffic containing PII and PHI) will be decrypted and analyzed to make sure there are no malicious file downloads or web activity.' },
        evidence: { screenshots: ['File Blocking Rules on the firewall', 'URL Filtering feature', 'Security Profiles enabled', 'Malware prevention', 'SSL Decryption in effect'] },
      },
    },
  },

  'network-infrastructure/qos': {
    example: {
      status: 'review',
      label: 'FLAGGED - no verification that QoS works under load (Verification stays empty); it also prioritizes TELNET · from Team 01, Qualifiers 2025 (DSGN15A)',
      sections: {
        overview: { text: 'During a high traffic event where network bandwidth is limited the Palo Alto Router/Firewall will be able to prioritize management capabilities and key protocols such as SNMP, SSH, TELNET, ICMP because of the Palo Alto QoS features which are now enabled across the network. This memo provides documentation and description of the configuration changes made on the Palo Alto Firewall.' },
        devices: { rows: [['Palo Alto Router/Firewall', '', 'SNMP, SSH, TELNET, and ICMP']] },
        config: { text: 'The first step to implement QoS was to generate and create a QoS rule that determines which services, sources, and destinations will be effected by the policy. Team {{team}} included management capabilities and key protocols such as SNMP, SSH, TELNET, and ICMP based on the requirements provided by the IT Director.\n\nThen a QoS Profile was created with a default configuration and assigned a guaranteed and maximum egress to any necessary classes. This defines how much bandwidth is guaranteed for a each QoS policy encompassed by the class in question. The QoS policy was assigned to class 1 so the service will always be reserved 10% of the bandwidth in the QoS Profile.\n\nThe final step taken was to apply the QoS profile to an interface so that it actually applies to the physical interfaces', screenshots: ['QoS Profile', 'QoS Policy', 'Apply QoS to Interface'] },
      },
    },
  },

  'hardening/guideline-sections': {
    example: {
      status: 'review',
      label: 'READY · from Team 01, Qualifiers 2025 (SVRA01T). Figures 1a-3b were screenshots: add yours as evidence.',
      vars: { point_1: 'Control both ingress and egress traffic.', point_2: 'Secure administrative and in-band management to each server.', point_3: 'Structure the rules in a granular fashion to the level of protocol (TCP, UDP, ICMP) and requisite port numbers.' },
      summary: 'This memo outlines the steps taken by Team {{team}} to secure traffic coming in and out of the servers which provides strong defense against attackers. The network defensive features are described below.',
      sections: {
        g1: { text: '### What This Guideline Asks For\n\nIngress traffic is packets that come into the machine such as a HTTP web request to the Web Server. Egress traffic are packets that originate from the server and are sent out towards other IP addresses such as the website response the Web Server sends to a client browser. In short, ingress and egress are equivalent to inbound and outbound traffic.\n\n### What We Configured\n\nIPTables rules were configured on each Linux server to control both ingress and egress traffic. Windows Defender Firewall rules were configured on each Windows server to control inbound and outbound traffic.', screenshots: ['IPTables rules on Linux Server', 'Firewall rules on Windows Server'] },
        g2: { text: '### What This Guideline Asks For\n\nAdministrative and in-band management are methods of network administration used by system admins to connect to a device they want to manage. In-band means the connecting device is in the same network as the server being managed. Common protocols for administrative and in-band management include: SSH, RDP, Telnet, and SNMP. These protocols are important to secure as they can be exploited by attackers to install malicious tools or processes because the protocol gives administrative abilities when connected to the server.\n\n### What We Configured\n\nTeam {{team}} secured administrative and in-band management on Linux by setting rules to prevent SSH access. Within the SSH config file specific users can be allowed access or private SSH keys can be granted permission to access. SSH traffic was blocked through IPTables rules on the Linux servers. Windows Servers were secured by setting explicit firewall rules to prevent RDP, Telnet, and SNMP. These are the common methods a hacker may attempt to access Windows Servers through.', screenshots: ['SSH Config and IPTables rules on Linux Server', 'RDP and additional Firewall rules on Windows Server'] },
        g3: { text: '### What This Guideline Asks For\n\nFirewall rules can be set to allow or block traffic on a specific port such as 22 or 80; however, the level of protocol such as TCP, UDP must also be specified to prevent traffic from bypassing the firewall rules.\n\n### What We Configured\n\nTeam {{team}} carefully set firewall rules on both Linux and Windows servers with granularity to block TCP and UDP traffic on specific ports and protocols. This ensures that malicious attackers cannot bypass the firewall rules by using a non-standard level of the protocol.', screenshots: ['Granular IPTables rules on Linux Server', 'Granular Firewall rules on Windows Server'] },
        assure: {
          text: 'Each Linux and Windows server within Team {{team}}’s environment has firewall rules configured and enforced. These have been verified by Team {{team}} security engineers and have been documented in the table below.',
          columns: ['Service', 'IP Address', 'Hostname', 'Firewall rules set and verified'],
          rows: [
            ['Docker/Remote', '[[IP]]', '2019', 'Yes'],
            ['DNS/NTP', '[[IP]]', 'Debian 10', 'Yes'],
            ['Web', '[[IP]]', 'Ubuntu 18', 'Yes'],
            ['AD/DNS/DHCP', '[[IP]]', '2019 AD', 'Yes'],
            ['DHCP', '[[IP]]', 'Ubuntu Workstation', 'Yes'],
            ['Splunk', '[[IP]]', 'Splunk', 'Yes'],
            ['E-comm', '[[IP]]', 'CentOS7', 'Yes'],
            ['Webmail/WebApps', '[[IP]]', 'Fedora 21', 'Yes'],
          ],
        },
      },
    },
  },

  'perimeter-firewall/nat-sessions': {
    example: {
      status: 'incomplete',
      label: 'FLAGGED - a file named "ChatGPTPaloInstructions.pdf" was submitted with it, so parts may be AI-written; check before relying on the wording · from Team 01, Qualifiers 2025 (TOOL11T). All IPs replaced with prompts.',
      sections: {
        policy: { text: 'Our team uses a combination of NAT and PAT rules on the Palo Alto firewall to manage both inbound and outbound network traffic. Below is a summary of how the translation policies are structured. To see the session table, see figure 4 at the bottom of the memo.' },
        mapping: { text: '### #1 Static NAT for critical services\n\nCritical services such as Splunk, webmail, etc., use static NAT. These machines are assigned a fixed public IP address.\n\n- Splunk has an internal IP of [[Splunk internal IP]] and is mapped to the external IP address of [[Splunk external IP]].\n- Webmail has an internal IP of [[Webmail internal IP]] and is mapped to the external IP address of [[Webmail external IP]].\n\nRefer to Figures 1 and 3 for the NAT rules.\n\n### #2 Dynamic PAT for Outbound Traffic\n\nMost of the outbound traffic uses PAT (Port Address Translation). This translates private IP addresses in the range [[internal range]] to a pool of public IP addresses: [[public IP pool]]. Each outgoing port is assigned a unique port number.\n\nFor example, internal devices such as [[internal IP]] and [[internal IP]] may both use [[public IP]] as their public IP. However, each of these devices will be assigned a different port number, such as 50002 or 50505.\n\nRefer to figures 2 and 3 for the PAT rules.\n\n### #3 Firewall Management Address\n\nThe firewall itself is mapped to the external IP address of [[firewall management IP]] for management.\n\n### Public and Private Addressing\n\n- Private addresses: Devices in the network use private IP addresses.\n- For example, Splunk has the private IP of [[Splunk internal IP]].\n- Public addresses: Our team uses public Ips such as [[public IP]] for PAT and static mappings such as [[Splunk external IP]] for services.', screenshots: ['NAT rules.', 'PAT rules.', 'Firewall rules.'] },
        diff: { text: '- NAT maps/routes a private IP address to a public IP address.\n- PAT allows multiple private IP addresses to share a single public IP address. Unique ports are dynamically assigned for each connection.' },
        sessions: { screenshots: ['Session Tables.'] },
      },
    },
  },

  'perimeter-firewall/ssl-decryption': {
    example: {
      status: 'review',
      label: 'READY · from Team 01, Qualifiers 2025 (TOOL12T). Figures 1-4 were screenshots: add yours as evidence. Typo "HIPPA" as written.',
      summary: 'The security team has successfully configured SSL decryption on the Palo Alto firewall, providing greater insight into encrypted traffic to and from workstations and servers.',
      sections: {
        steps: { text: 'First, a self-signed SSL certificate was created, allowing the firewall to decrypt the traffic. Refer to Figures 1 and 2 for the firewall rules on SSL decryption.\n\nNext, the self-signed certificate was deployed to every machine in the network. This allowed each machine to communicate to the internet, by establishing an encrypted communication session with the Palo Alto firewall.', screenshots: ['SSL certificate on PA firewall', 'PA firewall decryption rules'] },
        why: { text: 'The Palo Alto firewall has been configured to perform SSL decryption, to allow for better security, monitoring, and control. Precautions have been taken to comply with local laws and regulations.' },
        exclude: { text: 'There are some exceptions to the decrypting traffic. The security team chose not to decrypt web traffic that contains financial or health data. Health information is sensitive and requires significant measures to protect confidentiality. Additionally, decrypting this information may violate HIPPA, PCI, and other laws and regulations dictating PII and other sensitive personal information.' },
        test: { text: 'After configuring this system, the security team tested it by trying to send malware through the Palo Alto firewall. Figure 3 shows the Palo Alto logs. Figure 4 shows the malware triggering an alert.\n\n### Resources\n\n- https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA10g000000ClEZCA0&lang=en_US', screenshots: ['Palo Alto firewall logs.', 'Palo Alto alert on tested malware.'] },
      },
    },
  },
};
