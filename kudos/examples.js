// Kudos examples (demo). Adds a sanitized, annotated sample to a variant, without changing drafts/*.js.
// "Start from this example" loads it as your draft; every [[prompt]] is still yours to fill.
// Keys are "typeId/variantId". Never paste real IPs, usernames, passwords or screenshots here: this repo is public.
window.KUDOS_EXAMPLES = {

  'time-sync/ptp-ntp': {
    example: {
      label: 'Sanitized composite (written for this prototype, not a scored submission)',
      summary: 'As requested, Team {{team}} configured Precision Time Protocol (PTP) on {{ptp_hosts}} and NTP on every other device that forwards logs, so log timestamps across the network line up to within [[offset, e.g. a few microseconds on PTP hosts]]. All hosts use the [[time zone / UTC]] time zone.',
      sections: {
        ptp: { text: 'We installed **linuxptp** on {{ptp_hosts}}. [[Host]] acts as the PTP grandmaster; the other PTP hosts run `ptp4l` as clients and `phc2sys` to copy the hardware clock to the system clock.\n\n```\nsudo apt install linuxptp\nsudo ptp4l -i [[interface]] -m -S      # -S = software timestamping if the NIC has no PHC\nsudo phc2sys -a -r -m\n```\n\nThe evidence below shows ptp4l running and the client offset from the master.',
               why: 'The request asks for PTP by name, so name it and show it running. "We use NTP, which is similar" does not answer it.' },
        ntp: { text: 'Devices that cannot run PTP (network devices and [[other hosts]]) sync to [[NTP server]] over NTP. Each host below shows its time zone and sync status.',
               why: 'Per-host proof answers "every device", which is the part teams usually skip.' },
      },
    },
  },

  'threat-hunting/beacon-script': {
    example: {
      label: 'Sanitized composite (written for this prototype, not a scored submission)',
      summary: 'As requested, Team {{team}} wrote a script that detects software beaconing over {{proto}}. It flags any source/destination pair that talks at a regular interval, and it flagged [[what it found, or "no beacons" with the evidence]] when we ran it on [[host / capture]].',
      sections: {
        how: { text: 'Beacons call home on a timer, so their connections are evenly spaced. The script reads a packet capture, groups {{proto}} packets by source, destination and port, and measures the time between them. A pair is flagged when it has at least 5 packets and the gaps vary by less than 20% of the average gap (low jitter).',
               why: 'Graders want the detection logic in plain words, not only code.' },
        linux: { text: '```\n#!/usr/bin/env python3\n# beacon.py - flag regular-interval {{proto}} flows in a pcap. Usage: beacon.py capture.pcap\nimport sys, statistics\nfrom scapy.all import rdpcap, IP, UDP\nflows = {}\nfor p in rdpcap(sys.argv[1]):\n    if IP in p and UDP in p:\n        flows.setdefault((p[IP].src, p[IP].dst, p[UDP].dport), []).append(float(p.time))\nfor (src, dst, port), t in flows.items():\n    gaps = [b - a for a, b in zip(t, t[1:])]\n    if len(gaps) >= 4 and statistics.mean(gaps) > 0:\n        jitter = statistics.pstdev(gaps) / statistics.mean(gaps)\n        if jitter < 0.2:\n            print(f"BEACON? {src} -> {dst}:{port} every {statistics.mean(gaps):.1f}s ({len(t)} pkts, jitter {jitter:.0%})")\n```\n\nCapture first with `sudo tcpdump -i [[interface]] -w capture.pcap udp` for [[duration]].',
                 why: 'Matches the protocol in the request. Swap UDP for TCP only if the inject asks for TCP.' },
        results: { text: '[[Paste the output. Name the host, destination and interval you found, and what you did about it.]]', why: 'A script with no run output is the most common way to lose these points.' },
      },
    },
  },

  'policies/malware-awareness': {
    example: {
      label: 'Sanitized composite (written for this prototype, not a scored submission)',
      summary: 'This memo provides {{company}}\'s Employee Malware Awareness Policy, effective {{effective}}. It sets what employees must do to keep malware out of the network, what the organization provides, and the sign-off every employee completes.',
      sections: {
        purpose: { text: 'This policy reduces the risk of malware entering {{company}} systems through employee actions such as opening phishing email, installing unapproved software or using unknown USB drives.' },
        emp: { text: '- Do not open attachments or links from unknown senders. **Why:** phishing is the most common way malware gets in.\n- Only install software approved by IT. **Why:** unapproved installers are a common malware carrier.\n- Do not connect personal or unknown USB drives. **Why:** removable media can run malware automatically.\n- Report anything suspicious to [[IT contact]] immediately. **Why:** early reports limit how far malware spreads.',
               why: 'The "Why" on every rule explains how the policy keeps malware out.' },
        ack: { text: 'I have read and understand the {{policy_name}} and agree to follow it.\n\nEmployee name: ______________________\n\nSignature: ______________________   Date: ____________',
               why: 'A signature block gives every employee a place to acknowledge the policy.' },
      },
    },
  },
};
