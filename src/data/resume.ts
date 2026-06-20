export const profile = {
  name: "Jayanth Kumar Panuganti",
  shortName: "Jayanth Kumar",
  initials: "JK",
  title: "Senior Data Engineer",
  subtitle: "AWS & Big Data  ·  US Health Insurance Domain",
  location: "Hyderabad, India",
  email: "Jaye151528@gmail.com",
  phone: "+91 9948151528",
  linkedin: "https://linkedin.com/in/jaye151528",
  github: "https://github.com/Jayanth7416",
  summary:
    "Data Engineer with 7+ years building and modernizing large-scale ETL pipelines in the US health insurance domain. I specialize in migrating legacy SSIS workloads to PySpark on AWS Glue and EMR, designing Redshift data marts, and hardening production claims-processing jobs for reliability and performance.",
  longBio: [
    "I've spent the last seven years inside US health-insurance data — claims (837/835), eligibility (270/271, 834), HIPAA-governed PHI, and the gnarly dimensional models that sit underneath them.",
    "My day-to-day is migrating brittle SSIS packages to PySpark on AWS Glue and EMR, designing Redshift marts that query in seconds instead of minutes, and hardening claims-processing jobs so the 6 AM SLA never breaks.",
    "I care about silent failures, deterministic IDs, and reconciliation logic that catches drift before it reaches a finance close.",
  ],
};

export const skills = {
  Languages: [
    "Python",
    "PySpark",
    "Pandas",
    "NumPy",
    "C / C++",
    "Java",
    "SQL",
    "T-SQL",
    "PL/SQL",
    "TypeScript",
    "Shell",
    "Go",
    "R",
  ],
  "ETL & Big Data": [
    "SSIS",
    "Apache Spark",
    "PySpark",
    "AWS Glue",
    "EMR",
    "Databricks",
  ],
  AWS: [
    "S3",
    "Glue",
    "EMR",
    "Redshift",
    "Athena",
    "Lambda",
    "Step Functions",
    "CloudWatch",
    "IAM",
    "SNS",
    "RDS",
  ],
  Databases: [
    "MS SQL Server",
    "PostgreSQL",
    "Oracle",
    "Redshift",
    "SQLite",
  ],
  "Modeling & Warehousing": [
    "Star schema",
    "Snowflake schema",
    "SCD Type 1/2",
    "Fact / Dimension design",
  ],
  "Orchestration & CI/CD": [
    "Airflow",
    "Step Functions",
    "Jenkins",
    "Git",
    "Bitbucket",
  ],
  Domain: [
    "Claims (837/835)",
    "Eligibility (270/271, 834)",
    "HIPAA",
    "ICD-10",
    "Member / Provider data",
    "Premium billing",
  ],
};

export type Experience = {
  role: string;
  company: string;
  client?: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer — AWS & Data Engineering",
    company: "Innova Solutions",
    client: "Healthfirst (NYC Health Insurance) — Claims & Member Dev Team",
    location: "Hyderabad",
    period: "May 2026 — Present",
    bullets: [
      "Built PySpark Glue jobs to process monthly EOB Medicare claims across multiple lines of business, parsing pipe-delimited files with interleaved Member/Claim/Summary record types into curated datasets using an explicit StructType schema instead of positional renames — eliminating silent column-shift failures.",
      "Hardened an inherited 933-line Glue job by fixing 15+ defects in the positional-parsing failure class and built a 33-case pytest harness that imports the actual module on a local Spark session with AWS modules stubbed.",
      "Tuned Glue 5.0 jobs (G.4X, 40 DPUs, Spark 3.5.4) with broadcast joins, partition pruning, persist/unpersist, and single-part file promotion for downstream-compatible delimited outputs.",
      "Replaced unstable monotonically_increasing_id ordering with Window + row_number() keys to guarantee per-entity ID integrity and prevent cross-record assignment.",
      "Engineered count-validation and reconciliation logic that aggregates record counts across source files and parses labeled control files via token scanning, reconciling expected vs. actual records before committing loads.",
      "Owned end-to-end delivery — version-controlled in Git/GitHub, promoted builds through CI/CD into System Test, and supported the production release team through go-live and post-deployment data validation.",
    ],
  },
  {
    role: "AWS Data Engineer",
    company: "Microline Information Systems",
    client: "Upstate NY Health Insurance Provider — Claims & Member Analytics",
    location: "Hyderabad",
    period: "Apr 2023 — Apr 2026",
    bullets: [
      "Led the migration of 40+ legacy SSIS packages to PySpark jobs on AWS Glue and EMR for claims (837/835) and eligibility (270/271) data, running old stored procedures in parallel during cutover to avoid downstream disruption.",
      "Moved incoming vendor files from on-prem SMB shares to an S3 raw zone and curated data into Redshift, replacing SSIS Data Flow orchestration with Step Functions and Glue workflows.",
      "Built reusable PySpark utilities and parameter-driven Glue templates mapping SSIS components (Data Flow Tasks, Lookups, Derived Columns) to DataFrame operations — making further conversions config-driven instead of hand-coded.",
      "Cut analytics query latency by ~90% (from 4–5 min to under 30s) by designing a star-schema claims data mart on Redshift with profiled sort and dist keys.",
      "Reduced a critical claim–provider join from 2+ hours to ~25 minutes by rewriting the Spark job with broadcast joins, partition pruning, and proper caching — resolving a recurring breach of the daily 6 AM SLA.",
      "Implemented PHI masking with AWS KMS, maintained SCD Type 2 history for provider master data, and handled production support on rotation including RCAs for data-mismatch tickets.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Microline Information Systems",
    client: "Univera Health Insurance — Premium Billing & Enrollment",
    location: "Hyderabad",
    period: "May 2021 — Mar 2023",
    bullets: [
      "Built and maintained SSIS packages loading enrollment, premium billing, and payment data from vendor files (flat file, XML, fixed-width) into the SQL Server warehouse; designed dimension and fact tables for enrollment reporting.",
      "Wrote T-SQL procedures, CTEs, and window functions for monthly reconciliation between premium invoiced and premium received, supporting the finance close; wrote Python scripts to pre-validate EDI 834 files and email exception reports to vendors.",
      "Reduced the nightly batch window from ~6 hours to under 2 hours by converting full-refresh loads to CDC + watermark incremental logic on ~8–10 GB of daily data.",
      "Built AWS Lambda functions on S3 PUT events to trigger downstream SSIS/Glue jobs (replacing an older file-watcher that was dropping files); automated SSIS and SQL deployment via Jenkins and PowerShell.",
      "Ran a Redshift vs. on-prem SQL POC whose cost and performance comparison became the basis for the client's 2023 full cloud migration; handled L2/L3 production support on rotation.",
    ],
  },
  {
    role: "Data Engineer Intern — Insurance ETL Pipeline Support",
    company: "Microline Information Systems",
    client: "US Healthcare Client",
    location: "Hyderabad",
    period: "Jun 2019 — Apr 2021",
    bullets: [
      "Supported senior engineers on SSIS-based ETL pipelines, monitored nightly SQL Server jobs, checked SSISDB logs for failures, and assisted with reruns while learning claims and member eligibility data flows.",
      "Assisted with eligibility data validation and reconciliation, wrote SQL queries for data checks, and maintained runbook documentation for recurring batch issues under the lead engineer's guidance.",
    ],
  },
];

export const contractWork = {
  title: "AI Data Evaluation (Contract)",
  orgs: "Alignerr (CC Review) & Polaris AI Training",
  bullets: [
    "Performed pairwise model evaluation comparing two AI transcripts on the same coding task across seven axes (Logic, Naming, Organization, Interface, Error Handling, Documentation, Review Readiness) on a forced-choice scale with no ties.",
    "Applied rigorous evidence-based methodology — tracing every tool call and code edit line by line, citing specific functions and patterns, judging the final deliverable over a messy process.",
    "Caught real correctness and consistency issues (type-annotation bugs, builtin shadowing, non-Pythonic patterns, missing test files, self-contradictory ratings) across SymPy, xgboost, Rich, dulwich, and Zipline.",
    "Created training data from real GitHub PRs (Polaris) — self-contained, testable problems with issue description, Dockerfile, fix patch, and oracle test suite designed to fail at the base commit and pass after the fix.",
  ],
};

export const projects = [
  {
    title: "Healthcare Analytics Platform",
    description:
      "Real-time healthcare event ingestion with multi-tenant data isolation and analytics APIs for patient and provider metrics under HIPAA-style data handling.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    link: "https://github.com/Jayanth7416/healthcare-analytics-platform",
  },
  {
    title: "Claims ETL Migration Toolkit",
    description:
      "Parameter-driven PySpark templates that map SSIS components (Data Flow Tasks, Lookups, Derived Columns) to DataFrame operations — config-driven migration instead of hand-coded.",
    tech: ["PySpark", "AWS Glue", "Step Functions", "Redshift"],
    link: "https://github.com/Jayanth7416",
  },
  {
    title: "EDI 834 Pre-Validator",
    description:
      "Python pre-validator for EDI 834 enrollment files — header/trailer checks, segment integrity, exception reports emailed to vendors before ingestion.",
    tech: ["Python", "EDI", "SQL Server"],
    link: "https://github.com/Jayanth7416",
  },
  {
    title: "Claims Reconciliation Engine",
    description:
      "Count-validation and reconciliation logic that aggregates record counts across source files and parses labeled control files via token scanning before committing loads.",
    tech: ["PySpark", "AWS Glue", "S3"],
    link: "https://github.com/Jayanth7416",
  },
];

export const education = {
  degree: "B.Tech, Computer Science",
  school: "KL University",
  period: "2017 — 2021",
};

export const stats = [
  { value: "7+", label: "Years of Data Engineering" },
  { value: "40+", label: "SSIS Packages Migrated" },
  { value: "~90%", label: "Query Latency Reduction" },
  { value: "933", label: "Line Glue Job Hardened" },
];
