// APEX Achievement Vault - Confirmed Milestones & Flexible Archive

export const ACHIEVEMENTS = [
  {
    id: "sustainathon-2-winner",
    title: "SUSTAINATHON 2.0",
    institution: "SHARDA UNIVERSITY",
    year: "2026",
    status: "CONFIRMED WINNER",
    recognition: "THEME-WISE WINNER",
    badgeLabel: "1ST PLACE • THEME WINNER",
    headline: "Transforming Public Procurement with GovInnovate",
    projectLinked: "govinnovate",
    image: null, // Placeholder ready for event / ceremony photo upload
    breakdown: {
      challenge: "Under traditional Indian General Financial Rules (GFR 2017), government procurement tenders mandate prior multi-year turnover, earnest money deposits (EMD), and 3+ years of operating track records. This structurally disqualifies early-stage deep-tech DPIIT startups with superior, cost-effective innovations from competing for public sector tenders.",
      idea: "Design a fast-track 'Innovation Sandbox & Public Procurement Pipeline' where government departments publish operational pain points, an AI engine deconstructs them into quantifiable SLAs, matches verified startups, and sanctions 90-day subsidized sandbox pilots before triggering statutory scale-up contracts.",
      solution: "GovInnovate provides three distinct role-based environments: Government Departments post challenges decomposed by AI; DPIIT Startups apply with one-click turnover exemptions (GFR 149/170); Independent Technical Evaluators score proposals via a standardized 6-Pillar Scorecard. Once a pilot hits on-ground telemetry benchmarks, a scale-up memo is generated and cryptographically etched on an audit ledger.",
      technologies: [
        "Next.js 16 (App Router)",
        "React 19 & TypeScript 5",
        "Tailwind CSS Design System",
        "Supabase (PostgreSQL & pgvector semantic matching)",
        "Gemini 1.5 Flash AI Engine",
        "Solidity / Hardhat Ethereum Smart Contracts",
        "Cryptographic SHA-256 Audit Trails"
      ],
      teamContribution: "Team APEX engineered the complete end-to-end prototype: full-stack architecture, AI challenge decomposition, DPIIT GFR compliance automation, interactive 90-day pilot telemetry, and a tamper-evident blockchain verification module within the intensive hackathon timeline.",
      finalRecognition: "Awarded Theme-Wise Winner out of hundreds of competing engineering teams, praised by academic and industry jury panels for combining real statutory procurement compliance with deep-tech AI and blockchain auditability."
    },
    keyMetrics: [
      { label: "Evaluation Score", value: "95 / 100" },
      { label: "Pilot Success Rate", value: "99.8% Uptime" },
      { label: "Turnover Barrier", value: "100% Waived (GFR 149)" },
      { label: "Scale-Up Scope", value: "5 to 50 Wards" }
    ]
  },
  {
    id: "hackfront-national-finale",
    title: "hackFront INDIA 2026",
    institution: "IIIT DELHI, OKHLA",
    year: "2026",
    status: "NATIONAL FINALE QUALIFIER",
    recognition: "GOLDEN TICKET SHORTLIST",
    badgeLabel: "NATIONAL FINALE • GOLDEN TICKET",
    headline: "Shortlisted for National Finale among India's Elite Builders",
    projectLinked: null,
    image: "/assets/hackfront_golden_ticket.jpg", // Actual official ticket asset
    breakdown: {
      challenge: "National-scale competitive hackathon organized by Where U Elevate in partnership with tech giants (neo4j, Arduino, ixigo, Sarvam AI, DSCI, IIITD Innovation Center), filtering thousands of engineering applicants across India.",
      idea: "Deploy high-leverage architectural concepts, intelligent agentic workflows, and deep system design to tackle national digital infrastructure challenges.",
      solution: "Secured direct entry into the National Finale at IIIT Delhi, scheduled for 21-22 November 2026.",
      technologies: [
        "Where U Elevate Platform",
        "IIIT Delhi Incubation Ecosystem",
        "Sarvam AI & Neo4j Graph Tech",
        "Distributed Systems & Hardware Interfaces"
      ],
      teamContribution: "Represented by Shashwat Dubey under Team APEX banner, demonstrating technical acumen, problem solving, and architecture design.",
      finalRecognition: "Awarded the coveted 'Golden Ticket' invitation to build on-site at IIIT Delhi with top industry mentors and ecosystem partners."
    },
    keyMetrics: [
      { label: "Event Date", value: "21–22 Nov 2026" },
      { label: "Venue", value: "IIIT Delhi, Okhla" },
      { label: "Ticket Class", value: "Golden Ticket" },
      { label: "Builder", value: "Shashwat Dubey" }
    ]
  }
];

// Flexible archive for future recognitions
export const FUTURE_ARCHIVE_PLACEHOLDERS = [
  {
    id: "future-challenge-1",
    title: "SMART INDIA HACKATHON (SIH)",
    institution: "AICTE / Ministry of Education",
    year: "2026–2027",
    status: "IN PURSUIT",
    recognition: "PROTOTYPE PHASE",
    badgeLabel: "TARGET ARENA",
    headline: "Institutional Compliance & Document Verification (AICTE Portal Prototype)",
    description: "Engineering advanced document scrutiny, OCR classification, and cryptographically verified audit trails for national regulatory bodies."
  },
  {
    id: "future-challenge-2",
    title: "GLOBAL OPEN-SOURCE INNOVATION SPRINT",
    institution: "Web3 & AI Foundation",
    year: "2027",
    status: "UPCOMING",
    recognition: "R&D TRACK",
    badgeLabel: "FUTURE FRONTIER",
    headline: "Decentralized Autonomous Verification Protocols",
    description: "Designing zero-knowledge verification frameworks for privacy-preserving municipal and citizen credentials."
  }
];
