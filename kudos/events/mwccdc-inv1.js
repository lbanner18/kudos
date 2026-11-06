// MWCCDC Invitational #1: tags its 12 injects onto existing templates so they show in the past-event box at the top of the picker,
// with the inject's asks prefilled in Inject requirements. Not part of the team's public Kudos: leave events/ out when copying it there.
(function () {
  const tag = (type, variant, inject, checklist) => {
    const t = (window.INJECT_TYPES || []).find(x => x.id === type), v = t && t.variants.find(x => x.id === variant);
    if (v) Object.assign(v, { event: 'MWCCDC Invitational #1', inject, checklist });
  };
  tag('perimeter-firewall', 'as-found', '01', [
    "Security policies as initially configured (as found)",
    "Changes made so only needed and expected packets are allowed",
    "Policies written at the application layer",
    "Packet inspection (IPS and scanning) enabled",
    "All denied packets logged",
    "Screenshots of the configuration changes and packet inspection",
  ]);
  tag('host-firewalls', 'policy-summary', '02', [
    "Security policy description for each server",
    "Inbound, return, and outbound traffic covered",
    "Both Linux and Windows servers",
    "Screenshot of one Windows server: rules and firewall product/feature",
    "Screenshot of one Linux server: rules and firewall product/feature",
  ]);
  tag('endpoint-protection', 'open-source', '03', [
    "Open-source anti-malware tool selected (per platform if needed)",
    "Implemented on all Linux and Windows devices",
    "Screenshots of the implementation on one Linux device",
    "Screenshots of the implementation on one Windows device",
    "List of all devices the tool is implemented on",
  ]);
  tag('login-banner', 'banner', '04', [
    "Key concepts of a login banner that aid prosecution (enumerated)",
    "Text of the login banner",
    "Banner installed on every server",
    "Banner installed on every network device",
    "Screenshot of the banner on each server and network device",
  ]);
  tag('network-infrastructure', 'l2-decode', '05', [
    "Why there are no IP addresses",
    "What protocol this is, what it does, what it represents",
    "Full decode: bit patterns and flags translated to meaning",
    "What is unique about the segment connecting the two switches",
  ]);
  tag('network-infrastructure', 'ha-firewall', '06', [
    "Every hardware component needed so there is no single point of failure",
    "Technology that detects a failure",
    "Seamless, transparent failover",
    "Drawing of the components and wiring",
    "Two Internet providers: hardware",
    "Two Internet providers: configuration",
    "Two Internet providers: addressing",
  ]);
  tag('perimeter-scan', 'nmap-config', '07', [
    "Command-line configuration for NMAP against the external perimeter",
    "TCP and UDP command lines",
    "Each command-line option/token: what it does and the rationale",
    "Efficient and time-constrained",
    "Evidence of a working command",
  ]);
  tag('logging-siem', 'denied-packets', '08', [
    "Firewall configuration elements that cause denied packets to be logged",
    "Extract of the most recent 30 minutes of denied-packet logs",
    "Log extract uploaded as TXT or RTF",
    "Analysis of the last 30 minutes: reconnaissance or intrusion attempt activity",
  ]);
  tag('network-infrastructure', 'snmp-v2c', '09', [
    "SNMPv2c configured on each server and network device",
    "Read-only access available from the external network",
    "Table for each device: host name, external IP address, read-only community string",
  ]);
  tag('perimeter-scan', 'external-eval', '10', [
    "Identify the tool used to scan the POD's external interface",
    "Available services and protocols an attacker may leverage",
    "Assessment and recommendation: whether each service needs to be exposed externally",
  ]);
  tag('deploy-service', 'tftp', '11', [
    "Which server was selected and why",
    "What software was added for TFTP",
    "Firewall and other security policy changes (protocols and port numbers)",
    "Security profile of the TFTP directory",
    "Protections against the server being overrun with files",
    "Evidence of the TFTP service working",
  ]);
  tag('business-memos', 'ai', '12', [
    "How the organization currently uses AI in cyber defense",
    "Opportunities to leverage more AI",
    "Reducing team size (number of team members needed)",
    "Improving team member productivity",
    "Analyzing event data or machine states in a timely manner",
    "Limits and risks: practical within the competition environment",
  ]);
})();
