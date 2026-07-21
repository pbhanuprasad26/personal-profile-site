// ---------------------------------------------------------------------------
// SITE CONTENT
// Every fact here is sourced from Bhanu's resume, the Jessica Witcher
// appreciation note, and confirmed clarifications. Nothing here overstates
// ownership of work performed by other team members. Update this file only —
// components read from it, never hardcode copy.
// ---------------------------------------------------------------------------

export const person = {
  name: "Bhanu Prasad Pochannapeta",
  shortName: "Bhanu Prasad",
  role: "Tax Technology Professional",
  currentTitle: "Associate, PwC India — Tax Technology, GTO-SCO Tax",
  location: "Hyderabad, India",
  email: "bhanuprasad26dec@gmail.com",
  phone: "+91 76739 79723",
  linkedin: "https://www.linkedin.com/in/bhanu-prasad-pochannapeta-89028225a",
  github: "https://github.com/pbhanuprasad26",
  // Must match next.config.ts's basePath — public/ files aren't auto-prefixed
  // for plain <a href> tags under a GitHub Pages basePath.
  resumeHref: "/personal-profile-site/resume-bhanu-prasad-pochannapeta.pdf",
};

export const hero = {
  eyebrow: "Tax Technology · Compliance Engineering",
  headline: "Four years. Zero compliance failures. Now building toward AI.",
  subline:
    "I validate, debug, and help ship the software that federal and state tax filings run on — and I'm extending that foundation into automation and applied AI.",
  description:
    "Currently at PwC India, contributing to enterprise tax technology engagements. Previously part of Intuit's ProTax delivery team (Lacerte, ProSeries) through CriticalRiver Technologies, and H&R Block's DIY platform team through Speridian Technologies.",
};

export const kpis = [
  { value: "4+", label: "Years in Tax Technology" },
  { value: "2,000+", label: "Individual Returns Prepared" },
  { value: "100%", label: "Print Form Approval Record" },
  { value: "9", label: "States — ATS & 2D Barcode" },
  { value: "6", label: "Tax Form Modules Covered" },
  { value: "Top 10", label: "of 100+ Contractors → FTE" },
];

export const currentFocus = {
  heading: "Where I'm building next",
  intro:
    "Tax technology is the base. These are the layers I'm actively adding on top of it — some already applied, some in progress by design.",
  items: [
    {
      label: "Enterprise Tax Technology",
      status: "applied",
      detail:
        "Compliance testing, schema validation, and calculation review across Lacerte, ProSeries, and H&R Block DIY.",
    },
    {
      label: "Python",
      status: "in progress",
      detail:
        "Building fluency for test automation and data validation scripting, moving from manual QA toward automated tooling.",
    },
    {
      label: "Automation & API Testing",
      status: "in progress",
      detail: "Working roadmap: SQL → Python/Pytest → Postman/API testing → applied projects.",
    },
    {
      label: "Agentic AI",
      status: "exploring",
      detail:
        "Studying how agentic systems could apply to compliance workflows — early-stage, direction rather than delivery.",
    },
  ],
};

export type JourneyStop = {
  year: string;
  title: string;
  org: string;
  summary: string;
};

export const journey: JourneyStop[] = [
  {
    year: "2021",
    title: "Senior Tax Analyst",
    org: "KHOB Solutions",
    summary:
      "Prepared and reviewed 2,000+ individual returns (1040, 1040NR, FBAR, ITIN). The foundation: real US tax domain knowledge, built return by return.",
  },
  {
    year: "2023",
    title: "Contractor",
    org: "Speridian Technologies — H&R Block OLA Project",
    summary:
      "Joined as a contractor on H&R Block's OLA project (Oct 2023 – May 2024), resolving live customer tax queries — the first step from tax preparation into tax software delivery.",
  },
  {
    year: "2024",
    title: "Contractor → Full-Time",
    org: "Speridian Technologies",
    summary:
      "Selected as 1 of 10 from a 100+ member contractor pool for full-time conversion, based on delivery quality on the OLA project.",
  },
  {
    year: "2024",
    title: "QA Tester",
    org: "Speridian Technologies — H&R Block HRBS Project",
    summary:
      "A career milestone: moved into the HRBS project as a full-time QA tester (May 2024 – June 2025), leading Kentucky/Utah state certification and DIY platform validation.",
  },
  {
    year: "2025",
    title: "Tax Analyst",
    org: "CriticalRiver Technologies — Intuit ProTax",
    summary:
      "Joined Intuit's Lacerte/ProSeries delivery team (Aug 2025 – Jun 2026). Compliance testing widened into hands-on calculation and schema contribution.",
  },
  {
    year: "2025",
    title: "Formal Recognition",
    org: "Intuit Inc.",
    summary:
      "Recognized by Senior Tax Analysis Programmer Jessica Witcher for ramp-up speed, ownership, and cross-team collaboration with the Nexus engineering team.",
  },
  {
    year: "2026",
    title: "Associate — Tax Technology",
    org: "PwC India — GTO-SCO Tax",
    summary: "Joined PwC's tax technology line of service on July 16, 2026. Engagement scope to follow as projects mature.",
  },
  {
    year: "Ahead",
    title: "Tax Technology + AI",
    org: "In progress",
    summary:
      "Extending compliance engineering with Python, automation, and applied AI — building toward platforms, not just validating them.",
  },
];

export type ExperienceEntry = {
  id: string;
  company: string;
  client?: string;
  title: string;
  period: string;
  location: string;
  overview: string;
  responsibilities: string[];
  impact: string[];
  recognition?: string;
  tech: string[];
  projectIds?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "pwc",
    company: "PwC India",
    title: "Associate · Tax Technology, GTO-SCO Tax",
    period: "Jul 2026 — Present",
    location: "Hyderabad, India",
    overview:
      "Joined PwC's Global Tax Operations tax technology line of service, currently contributing to Intuit-related engagements. This section stays intentionally brief until engagement scope can be shared publicly.",
    responsibilities: [
      "Onboarding into PwC's GTO-SCO Tax engagement structure and delivery standards.",
    ],
    impact: [],
    tech: [],
  },
  {
    id: "criticalriver",
    company: "CriticalRiver Technologies",
    client: "Client: Intuit Inc. — ProTax Project (Lacerte & ProSeries, TY24–TY25)",
    title: "Tax Analyst",
    period: "Aug 2025 — Jun 2026",
    location: "Hyderabad, India",
    overview:
      "Full-cycle compliance testing for two of Intuit's flagship professional tax products, with hands-on contribution to calculation logic and schema implementation alongside the Nexus engineering team — beyond the validation scope most contractors on the project covered.",
    responsibilities: [
      "Executed full-cycle compliance testing for Lacerte and ProSeries across Graphic Rollovers, OSI updates, and Input Sheet changes ahead of each release.",
      "Modified, debugged, and reviewed Java calculation logic during the TY25 season, working directly with Intuit's Nexus engineering team to identify calculation defects before release — a scope most contractors on the project didn't cover.",
      "Compared schema versions and implemented required XML/XSD updates on assigned modules, validating integrity with Altova XML Spy and XML Notepad against updated IRS MeF specifications.",
      "Validated 2D Barcode generation and ATS test returns for federal and multi-state filings, maintaining a 100% Print Form Approval record across all tested tax years.",
      "Owned the full defect lifecycle in JIRA — identification through regression validation and sign-off — coordinating between onsite and offshore teams.",
      "Classified high-volume test clients in DNA to support Print Form Approval workflows, with zero compliance failures across all reviewed form sets.",
      "Covered ATS and 2D Barcode testing across 9 states (MI, MT, WI, ME, CT, WA, DE, IL, MN) and all 6 form modules — Individual, S-Corp, C-Corp, Partnership, Fiduciary, and Estate & Trust.",
    ],
    impact: [
      "100% Print Form Approval compliance maintained across every tested tax year.",
      "Zero compliance failures across all reviewed federal and state form sets.",
      "Calculation defects caught pre-release through direct collaboration with Intuit's engineering team.",
    ],
    recognition:
      "Formally recognized by the US Plano team and Bangalore Nexus for quality contributions to the ProTax project.",
    tech: ["Lacerte", "ProSeries", "Java", "XML/XSD", "Altova XML Spy", "JIRA", "DNA", "2D Barcode"],
    projectIds: ["lacerte-proseries", "ats-2d-barcode", "xml-schema"],
  },
  {
    id: "speridian",
    company: "Speridian Technologies",
    client: "Client: H&R Block — HRBS & OLA Projects",
    title: "Tax Analyst",
    period: "Oct 2023 — May 2025",
    location: "Bangalore, India",
    overview:
      "Owned state certification end-to-end for two states on H&R Block's DIY platform, then automated a manual validation workflow that had been consuming significant time during peak filing season.",
    responsibilities: [
      "Led end-to-end state tax certification for Kentucky and Utah — Tax Sample Requests, form validation, and DOR approval coordination.",
      "Built annual rekey returns for cross-functional state software validation across all DIY platform releases.",
      "Executed Field Value Comparisons and Form Mapper testing to validate XML/.TAX file integrity.",
      "Automated Tax Table and Tax Rate validation workflows, cutting manual testing effort by an estimated 30% during peak season.",
      "Prepared ATS test returns for state approval submissions and authored Limit Documentation for stakeholders.",
      "Resolved high-volume customer tax queries via live chat on federal and state rules, deductions, credits, and filing requirements (OLA project).",
    ],
    impact: [
      "Two states (KY, UT) certified with full DOR approval.",
      "~30% reduction in manual Tax Table/Tax Rate validation effort during peak filing season.",
      "Selected 1 of 10 from 100+ contractors for full-time conversion based on this work.",
    ],
    tech: ["H&R Block DIY", "XML/.TAX", "Field Value Comparison", "Form Mapper", "TSR Management"],
    projectIds: ["hrb-diy"],
  },
  {
    id: "khob",
    company: "KHOB Solutions",
    title: "Senior Tax Analyst",
    period: "Oct 2021 — Sep 2023",
    location: "Hyderabad, India",
    overview:
      "Direct US tax preparation and IRS correspondence — the domain foundation every later QA and technology role has built on.",
    responsibilities: [
      "Prepared and reviewed 2,000+ individual returns: Form 1040, 1040NR, ITIN (W-7), and FBAR filings.",
      "Resolved IRS and state tax notices, achieving timely clearance of CP notices and audit correspondence.",
      "Researched applicable tax codes to identify legitimate deductions and credits while maintaining full compliance.",
      "Validated tax data pre-e-file and represented clients during IRS and state audits as required.",
    ],
    impact: ["2,000+ returns prepared and reviewed with consistently high accuracy under IRS deadlines."],
    tech: ["Form 1040", "1040NR", "FBAR", "ITIN/W-7"],
  },
];

export type ProjectCase = {
  id: string;
  name: string;
  context: string;
  problem: string;
  approach: string;
  impact: string;
  tech: string[];
};

export const projects: ProjectCase[] = [
  {
    id: "lacerte-proseries",
    name: "Intuit Lacerte & ProSeries — ProTax Compliance",
    context: "CriticalRiver Technologies, client-facing Intuit engagement",
    problem:
      "Two professional tax platforms need every release — graphic rollovers, OSI updates, input sheet changes — validated against IRS and state DOR standards before software reaches practitioners nationwide.",
    approach:
      "Full-cycle compliance testing paired with direct calculation and schema contribution alongside Intuit's Nexus engineering team, rather than validation in isolation from the code being tested.",
    impact: "100% Print Form Approval maintained across all tested tax years, zero compliance failures.",
    tech: ["Lacerte", "ProSeries", "Java", "Graphic Rollovers", "OSI"],
  },
  {
    id: "ats-2d-barcode",
    name: "ATS & 2D Barcode Validation",
    context: "Multi-state federal and state filing compliance",
    problem:
      "2D barcodes and ATS test returns must exactly match state and federal print/e-file specifications, across 9 states and 6 entity types, or filings risk rejection.",
    approach:
      "Systematic ATS test client preparation and barcode validation across Individual, S-Corp, C-Corp, Partnership, Fiduciary, and Estate & Trust modules.",
    impact: "Zero compliance failures across all reviewed federal and state form sets.",
    tech: ["2D Barcode", "DNA", "Multi-entity Tax Forms"],
  },
  {
    id: "xml-schema",
    name: "XML/XSD Schema Validation & Implementation",
    context: "IRS MeF and state e-file compliance",
    problem:
      "E-file schemas change with every IRS MeF and state specification update; output must stay in exact alignment or e-filed returns fail transmission.",
    approach:
      "Compared schema versions, implemented required XML/XSD updates on assigned modules, and verified integrity with Altova XML Spy against current MeF specs.",
    impact: "E-file output kept in alignment with IRS MeF specifications across every release cycle.",
    tech: ["XML", "XSD", "Altova XML Spy", "IRS MeF"],
  },
  {
    id: "hrb-diy",
    name: "H&R Block DIY Platform — State Certification & Automation",
    context: "Speridian Technologies, client-facing H&R Block engagement",
    problem:
      "Kentucky and Utah both required full state DOR certification, and manual Tax Table/Tax Rate validation was consuming significant time each peak season.",
    approach:
      "Owned certification end-to-end (TSR, form validation, DOR coordination) for both states, then built automated validation workflows for Tax Table/Tax Rate checks.",
    impact: "Two states certified; ~30% reduction in manual validation effort during peak season.",
    tech: ["H&R Block DIY", "Field Value Comparison", "Form Mapper", "Test Automation"],
  },
];

export const recognition = {
  from: "Jessica Witcher",
  role: "Senior Tax Analysis Programmer, Intuit Inc.",
  context: "End-of-season feedback, TY25 ProTax engagement",
  body: [
    "As we wrap up our development season, I wanted to provide a summary of my thoughts on your performance and feedback on the engagement. Overall, this was a highly successful collaboration.",
    "Ramp-up & Autonomy: speed to impact is critical on a 6-month contract. You were quick to learn our processes and tools and deliver expected outcomes with speed.",
    "Process Adherence: you adhered to our culture immediately, followed processes, and documented your work in detail. You worked with our Nexus team to learn calculation skills that some other contractors did not.",
    "Team Collaboration: you operated like a core team member — positive engagement in standups and retrospectives, and a seamless fit with the larger team.",
    "Recommendation: based on strong attention to detail, high quality, and work ethic during the TY25 update season, I'd be happy to recommend Bhanu for future contracts or serve as a reference.",
  ],
  areaForGrowth: "Broaden AI curiosity and skills as they relate to any aspect of daily work.",
};

export type SkillCategory = {
  category: string;
  items: { name: string; what: string; how: string; impact: string; where: string }[];
};

export const knowledgeExplorer: SkillCategory[] = [
  {
    category: "Tax Technology",
    items: [
      {
        name: "Lacerte & ProSeries",
        what: "Intuit's professional tax preparation software suite.",
        how: "Compliance testing across graphic rollovers, OSI updates, and input sheet changes each release cycle.",
        impact: "100% Print Form Approval maintained across tested tax years.",
        where: "CriticalRiver Technologies — Intuit ProTax",
      },
      {
        name: "H&R Block DIY",
        what: "Consumer-facing DIY tax filing platform.",
        how: "State certification, field value comparison, and form mapper testing.",
        impact: "Kentucky and Utah certified with full DOR approval.",
        where: "Speridian Technologies",
      },
    ],
  },
  {
    category: "Compliance",
    items: [
      {
        name: "IRS MeF E-File Standards",
        what: "The IRS's Modernized e-File schema and transmission standard.",
        how: "Validated e-file output alignment against updated MeF specs each release.",
        impact: "Zero e-file compliance failures across reviewed form sets.",
        where: "CriticalRiver Technologies",
      },
      {
        name: "State DOR Certification",
        what: "State Department of Revenue approval process for tax software.",
        how: "Owned TSR management, form validation, and DOR coordination for KY and UT.",
        impact: "Two states certified end-to-end.",
        where: "Speridian Technologies",
      },
      {
        name: "2D Barcode Testing",
        what: "Validation of scannable 2D barcodes printed on tax forms for state processing.",
        how: "Tested barcode generation across 9 states and 6 entity types.",
        impact: "Zero compliance failures across all reviewed form sets.",
        where: "CriticalRiver Technologies",
      },
    ],
  },
  {
    category: "QA & Testing",
    items: [
      {
        name: "ATS Validation",
        what: "Automated Test System — the return set state/federal authorities require for software approval.",
        how: "Prepared and submitted ATS test clients across multi-state, multi-entity form sets.",
        impact: "Consistent print/e-file approvals within SLA.",
        where: "CriticalRiver & Speridian Technologies",
      },
      {
        name: "XML/XSD Schema Validation",
        what: "Structural verification of e-file XML against XSD schema definitions.",
        how: "Compared schema versions and implemented required updates using Altova XML Spy and XML Notepad.",
        impact: "E-file output stayed aligned with IRS MeF specs release over release.",
        where: "CriticalRiver Technologies",
      },
      {
        name: "Regression & Defect Lifecycle",
        what: "End-to-end defect management from identification through sign-off.",
        how: "Owned full lifecycle in JIRA, coordinating onsite and offshore teams.",
        impact: "Clean regression cycles with tracked sign-off on every release.",
        where: "CriticalRiver Technologies",
      },
    ],
  },
  {
    category: "Automation & Programming",
    items: [
      {
        name: "Python",
        what: "General-purpose language, in active use for test scripting.",
        how: "Self-directed study applied toward automation and future test tooling.",
        impact: "In progress — foundation for automated validation work.",
        where: "Self-directed, bench-time learning",
      },
      {
        name: "Tax Table/Rate Automation",
        what: "Automated validation workflow replacing manual tax table checks.",
        how: "Built automated checks for Tax Table and Tax Rate accuracy each peak season.",
        impact: "~30% reduction in manual validation effort.",
        where: "Speridian Technologies",
      },
    ],
  },
  {
    category: "Version Control & Tools",
    items: [
      {
        name: "JIRA",
        what: "Defect and workflow tracking system.",
        how: "Owned defect lifecycle from identification to sign-off.",
        impact: "Coordinated releases across onsite/offshore teams.",
        where: "CriticalRiver Technologies",
      },
      {
        name: "Azure DevOps & GitHub",
        what: "Work-item tracking and version control platforms.",
        how: "Used for test case tracking and collaboration.",
        impact: "Traceable QA workflows across releases.",
        where: "Across engagements",
      },
    ],
  },
];

// Tools not already surfaced in knowledgeExplorer's categories — folded in as
// a compact "also across the stack" line rather than a duplicate section.
export const additionalTools = ["Drake", "Jenkins", "SQL"];

export const learningRoadmap = [
  { stage: "US Tax", status: "done", note: "2,000+ returns prepared, KHOB Solutions" },
  { stage: "Tax Technology", status: "done", note: "Lacerte, ProSeries, H&R Block DIY" },
  { stage: "Quality Engineering", status: "done", note: "ATS, schema, defect lifecycle ownership" },
  { stage: "Applied AI", status: "done", note: "Tax data annotation for Intuit AI training (Label Studio), completed before joining PwC" },
  { stage: "Python", status: "active", note: "Self-directed, bench-time study" },
  { stage: "Automation & API Testing", status: "active", note: "Roadmap: SQL → Pytest → Postman" },
  { stage: "Agentic AI", status: "exploring", note: "Studying application to compliance workflows" },
  { stage: "Enterprise AI Tax Solutions", status: "future", note: "The direction, not a claim on today" },
];

export const vision = {
  heading: "Where this is going",
  body: "Tax software compliance runs on precision most people never see — a barcode that has to sit in the exact right position, a schema that has to match an IRS spec published weeks earlier, a calculation that has to be right the first time because it touches someone's refund. That precision is where I actually earned my footing: modifying and debugging Java calculation logic alongside Intuit's Nexus engineering team, catching defects before release rather than after. Four years in, the next stage is building toward the platforms themselves — bringing that same domain depth into automation and applied AI, so tax technology gets built by people who actually understand tax, not just software.",
};


export const education = [
  {
    degree: "Master of Business Administration — Finance",
    school: "Dr BR Ambedkar Institute of Management and Technology",
    period: "2023 — 2025",
    location: "Hyderabad, India",
  },
  {
    degree: "Bachelor of Commerce — Computers",
    school: "Keshav Memorial Institute of Commerce and Science",
    period: "2018 — 2021",
    location: "Hyderabad, India",
  },
  {
    degree: "Continuous Learning",
    school: "Python, test automation, and Enrolled Agent (EA) exam preparation",
    period: "Ongoing",
    location: "Self-directed",
  },
];

export const contact = {
  heading: "Let's build better tax technology together.",
  body: "Open to conversations on tax technology, compliance engineering, and where AI fits into enterprise tax platforms — built across distributed teams, from Hyderabad to Bangalore to Plano.",
};
