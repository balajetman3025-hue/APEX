// APEX Creations Registry - Deep Project Specifications & Reusable Archive

export const PROJECTS = [
  {
    id: "govinnovate",
    featured: true,
    title: "GOVINNOVATE",
    category: "AI / GOVTECH / BLOCKCHAIN",
    tagline: "Startup-Friendly Public Procurement & Innovation Sandbox Platform",
    badge: "FLAGSHIP CREATION • SUSTAINATHON 2.0 WINNER",
    color: "#00f0ff",
    github: "https://github.com/TeamApex/govinnovate",
    liveDemo: "https://govinnovate.vercel.app",
    overview: "GovInnovate is an enterprise GovTech prototype designed to shatter the legacy bureaucratic barriers that prevent deep-tech DPIIT startups from securing government contracts. Aligned with General Financial Rules (GFR 2017) startup exemptions, it bridges the gap through AI problem decomposition, vector-based startup discovery, a 6-pillar objective evaluation scorecard, 90-day sandbox pilots, and a cryptographic blockchain audit ledger.",
    problemStatement: "Traditional public procurement procedures mandate multi-year turnover, substantial earnest money deposits (EMD), and 3+ years of operating track records. This creates a systemic barrier where early-stage startups with superior technological innovations are shut out from public sector problem solving.",
    approach: "Instead of subjecting startups to archaic financial filters, GovInnovate establishes an end-to-end Merit & Sandbox Pipeline: Government departments specify unstructured pain points -> AI structures them into quantifiable SLAs -> Startups are matched semantically -> A 90-day sandbox pilot is commissioned -> Validated telemetry automatically triggers statutory scale-up orders under GFR Rule 149/170 relaxations.",
    keyFeatures: [
      {
        title: "AI Challenge Decomposer & Generator",
        desc: "Transforms ambiguous departmental pain points into formal tenders with quantifiable benchmarks and IS-standard SLAs using Gemini 1.5 Flash."
      },
      {
        title: "Semantic Startup Matcher (pgvector)",
        desc: "Calculates high-dimensional cosine similarity between challenge specifications and DPIIT startup patent dossiers and hardware specs."
      },
      {
        title: "6-Pillar Committee Evaluation Matrix",
        desc: "Quantitative 0–20 scoring across Innovation, Feasibility, Impact, Scalability, Cost, and Security with AI risk anomaly detection."
      },
      {
        title: "90-Day Municipal Sandbox Pilot Engine",
        desc: "Tracks on-ground telemetry (e.g. sensor uptime, alert latencies) across live physical sites before approving scale-up funding."
      },
      {
        title: "Tamper-Evident Blockchain Ledger",
        desc: "Every scoring movement, pilot milestone, and PFMS treasury disbursement is etched into a cryptographic SHA-256 hash-chained ledger."
      }
    ],
    techStack: [
      { name: "Next.js 16", category: "Framework", purpose: "App router, React Server Components & SSR" },
      { name: "React 19 & TypeScript 5", category: "Language", purpose: "Strict type safety across bids, SLAs, and ledgers" },
      { name: "Supabase (pgvector)", category: "Database", purpose: "Vector embeddings & telemetry database" },
      { name: "Gemini 1.5 Flash", category: "AI / LLM", purpose: "Tender decomposition, synthesis & risk analysis" },
      { name: "Solidity & Hardhat", category: "Blockchain", purpose: "Smart contracts for milestone escrow & evidence logs" },
      { name: "Tailwind CSS", category: "Styling", purpose: "Cyber-GovTech UI with high-contrast accessibility" }
    ],
    teamContributions: "Engineered collaboratively by Team APEX during the intensive 36-hour Sustainathon 2.0 sprint: from ideation and legal GFR 2017 regulatory mapping to full-stack implementation, pgvector integration, blockchain smart contracts, and interactive jury presentations.",
    metrics: [
      { label: "Turnover Exemption", value: "100% GFR 149" },
      { label: "Evaluation Score", value: "95 / 100" },
      { label: "Pilot Deployment", value: "5 Live Sites" },
      { label: "Expansion Capacity", value: "50 Wards (10x)" }
    ]
  },
  {
    id: "avasar",
    featured: false,
    title: "AVASAR",
    category: "AI / COMPUTER VISION / CIRCULAR ECONOMY",
    tagline: "AI-Assisted E-Waste Management & Formal Recycling Gateway",
    badge: "CIRCULAR ECONOMY PROTOTYPE",
    color: "#a855f7",
    github: "https://github.com/TeamApex/avasar-ewaste",
    liveDemo: "https://avasar-ewaste.vercel.app",
    overview: "A comprehensive circular economy web platform bridging informal electronic waste collectors with authorized national recyclers. Combines edge AI computer vision with bilingual voice interfaces to democratize e-waste valuation and recycling workflows.",
    problemStatement: "Over 90% of e-waste in developing economies is handled through hazardous informal channels lacking proper safety, transparent pricing, or verifiable environmental compliance.",
    approach: "Provides an easy-to-use edge vision application where collectors snap a photo of discarded electronics. The AI identifies the gadget, classifies core materials (copper, gold, rare earth elements), estimates scrap benchmark value, and logs a digital waste-passport for formal recycling custody.",
    keyFeatures: [
      {
        title: "Browser-Based Object Detection",
        desc: "On-device lightweight computer vision using TensorFlow.js for real-time electronic device identification."
      },
      {
        title: "Bilingual English / Hindi Voice Interface",
        desc: "Voice guidance and intuitive iconography enabling informal waste pickers with limited literacy to easily participate."
      },
      {
        title: "Digital Waste Passport",
        desc: "Verifiable custody tracking from initial doorstep pickup through certified smelting facilities."
      }
    ],
    techStack: [
      { name: "React & TypeScript", category: "Frontend", purpose: "Reactive, mobile-first interface" },
      { name: "TensorFlow.js", category: "AI / Vision", purpose: "In-browser gadget identification" },
      { name: "Gemini API", category: "Multimodal AI", purpose: "Component material decomposition & valuation" },
      { name: "Leaflet", category: "Mapping", purpose: "Collector-to-recycler geographic routing" }
    ],
    teamContributions: "Created and architected by Harsh Vardhan Singh with Team APEX exploration in computer vision pipelines and user accessibility.",
    metrics: [
      { label: "Language Support", value: "English & Hindi" },
      { label: "Inference Time", value: "< 250ms On-Device" },
      { label: "Offline Capability", value: "Persistent Cache" },
      { label: "Classification Accuracy", value: "92.4%" }
    ]
  },
  {
    id: "aicte-fdr-portal",
    featured: false,
    title: "AICTE SECURITY DEPOSIT & FDR PORTAL",
    category: "FINTECH / CRYPTOGRAPHY / GOVTECH",
    tagline: "Smart Institutional Compliance & Digital Scrutiny System",
    badge: "SIH DIGITAL SCRUTINY PROTOTYPE",
    color: "#f59e0b",
    github: "https://github.com/TeamApex/aicte-portal",
    liveDemo: "https://aicte-fdr.vercel.app",
    overview: "An enterprise institutional compliance platform built to digitize, verify, and monitor billions in security deposits and fixed deposit receipts held by educational institutions across India under AICTE regulatory oversight.",
    problemStatement: "Manual scrutiny of physical bank FDR certificates across thousands of colleges leads to document tampering, missed maturity renewals, delayed releases, and administrative overhead.",
    approach: "Replaced manual physical checks with an automated multi-stage digital pipeline featuring OCR document ingestion, cryptographic vault storage, automated maturity reminders, and role-based clearance chains.",
    keyFeatures: [
      {
        title: "OCR Document Extraction",
        desc: "Extracts FDR number, issuing bank, maturity dates, and amounts with confidence scores and mismatch warnings."
      },
      {
        title: "AES-256-GCM Vault & Hash Chain",
        desc: "Financial documents are encrypted at rest with SHA-256 audit chaining to prevent unauthorized modifications."
      },
      {
        title: "Automated Maturity & Escalation Reminders",
        desc: "Multi-tier notification triggers 90, 60, and 30 days prior to FDR expiry to guarantee institutional collateral."
      }
    ],
    techStack: [
      { name: "Python FastAPI", category: "Backend", purpose: "High-throughput asynchronous verification API" },
      { name: "React & TypeScript", category: "Frontend", purpose: "Administrative scrutinizer dashboard" },
      { name: "Tesseract OCR & NLP", category: "Document AI", purpose: "Automatic bank certificate parsing" },
      { name: "AES-256-GCM", category: "Security", purpose: "Military-grade data protection at rest" }
    ],
    teamContributions: "Architected by Harsh Vardhan Singh; demonstrates APEX's rigorous standards in software security, cryptographic integrity, and compliance automation.",
    metrics: [
      { label: "Scrutiny Time", value: "Reduced 90%" },
      { label: "Audit Integrity", value: "SHA-256 Chained" },
      { label: "Encryption", value: "AES-256-GCM" },
      { label: "Role Workflows", value: "College & Bureau" }
    ]
  }
];

// Reusable project archive for upcoming creations
export const FUTURE_PROJECT_SLOTS = [
  {
    id: "project-frontier-ai",
    title: "PROJECT: SYNAPSE",
    category: "AUTONOMOUS AGENTS",
    tagline: "Multi-Agent System for High-Stakes Code Generation & Verification",
    badge: "IN RESEARCH & PROTOTYPING",
    status: "ACTIVE EXPLORATION"
  },
  {
    id: "project-decentralized-mesh",
    title: "PROJECT: NEXUS-ZK",
    category: "DECENTRALIZED PRIVACY",
    tagline: "Zero-Knowledge Credential Verification for Student Hackers",
    badge: "CONCEPT STAGE",
    status: "ROADMAP 2027"
  }
];
