export const profile = {
  name: "Jayanth Kumar Panuganti",
  shortName: "Jayanth Kumar",
  initials: "JK",
  title: "Senior Data Engineer",
  subtitle: "AWS, Apache Iceberg & PySpark  ·  US Healthcare & Big Data",
  location: "Hyderabad, India",
  email: "Jaye151528@gmail.com",
  phone: "+91 9948151528",
  linkedin: "https://linkedin.com/in/jaye151528",
  github: "https://github.com/Jayanth7416",
  summary:
    "Senior Data Engineer with 7+ years designing, modernizing, and operating petabyte-scale data lakehouse and ETL architectures in the US health insurance domain. Specialized in migrating legacy SSIS and Informatica workloads to serverless PySpark on AWS Glue and Apache Iceberg, orchestrating multi-stage claims and correspondence pipelines, and provisioning multi-environment cloud data platforms with Terraform.",
  longBio: [
    "I've spent the last seven years inside US health-insurance data — claims (837/835), Explanation of Benefits (EOB), eligibility (270/271, 834), HIPAA-governed PHI, and the distributed lakehouse models that sit underneath them.",
    "My day-to-day involves architecting serverless PySpark pipelines on AWS Glue and EMR, building Apache Iceberg lakehouses governed by AWS Lake Formation, migrating complex SSIS and Informatica workflows, and integrating enterprise correspondence engines via REST APIs and multi-database stores.",
    "I care deeply about zero-data-loss guarantees, distributed Spark partition tuning, financial reconciliation accuracy, and automated Terraform CI/CD promotions across Dev, System Test, Regression Test, and Production.",
  ],
};

export const skills = {
  Languages: [
    "Python",
    "PySpark",
    "SQL",
    "T-SQL",
    "PL/SQL",
    "Pandas",
    "NumPy",
    "TypeScript",
    "Shell / Bash",
    "Go",
    "Java",
    "C / C++",
    "R",
  ],
  "Lakehouse & Big Data": [
    "Apache Spark",
    "PySpark (RDD & DataFrame APIs)",
    "Apache Iceberg",
    "AWS Glue",
    "AWS EMR",
    "Databricks",
    "SSIS",
    "Informatica PowerCenter",
  ],
  "AWS Cloud": [
    "S3",
    "Glue & Glue Catalog",
    "Lake Formation",
    "EMR",
    "Redshift",
    "Athena",
    "Lambda",
    "Step Functions",
    "Secrets Manager",
    "CloudWatch",
    "SNS",
    "RDS",
    "IAM",
  ],
  Databases: [
    "PostgreSQL",
    "MS SQL Server",
    "Amazon Redshift",
    "Oracle",
    "Apache Iceberg Tables",
    "SQLite",
  ],
  "Modeling & Architecture": [
    "Medallion Lakehouse",
    "Star & Snowflake Schemas",
    "SCD Type 1 / Type 2",
    "Fact / Dimension Design",
    "Cross-System Reconciliation",
  ],
  "IaC, Orchestration & DevOps": [
    "Terraform",
    "Airflow",
    "Step Functions",
    "Glue Workflows",
    "Control-M",
    "Jenkins",
    "Git / GitHub / Bitbucket",
    "pytest",
  ],
  "Healthcare Domain": [
    "EOB (Medicare / Medicaid / Commercial)",
    "Claims (EDI 837 / 835)",
    "Eligibility (270 / 271, 834)",
    "HIPAA & Sensitive Clinical Data",
    "ICD-10 / CPT / Revenue Codes",
    "Document Archival & Indexing",
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
    client: "US Healthcare Payer — Claims & Member Data Engineering",
    location: "Hyderabad",
    period: "May 2026 — Present",
    bullets: [
      "Architected and operated serverless AWS Glue PySpark pipelines processing monthly, quarterly, and weekly Explanation of Benefits (EOB) claims across Medicare, Medicaid, and Commercial lines of business.",
      "Built Lakehouse-to-CRM weekly EOB pipelines on Apache Iceberg and AWS Glue Data Catalog, unifying multi-source claims and member datasets, applying dual-window deduplication to prevent double-counting on adjusted claims, and generating nested JSON payloads.",
      "Engineered clinical sensitivity classification and recipient routing rules (Head-of-Household vs. Individual Member) to isolate sensitive diagnostic and behavioral health claims for HIPAA-compliant fulfillment.",
      "Led the Informatica-to-PySpark migration for multi-stage enterprise document archival pipelines, implementing high-concurrency S3 batching, PostgreSQL anti-join reconciliation, and automated index generation.",
      "Integrated OAuth2 REST APIs with exponential-backoff retry policies inside distributed Spark jobs to enrich outbound member records with real-time digital delivery preferences while persisting audit trails in PostgreSQL.",
      "Replaced single-partition window bottlenecks with a two-pass distributed RDD partition-offset algorithm and broadcast lookups to generate deterministic contiguous sequence numbers at scale without shuffle spill.",
      "Hardened production Glue jobs with explicit StructType schemas, automated header/footer/detail control-file reconciliation, and local Spark pytest harnesses.",
      "Managed multi-environment Infrastructure-as-Code using Terraform across Dev, System Test, Regression Test, and Production, coordinating enterprise releases and batch scheduling.",
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
      "Converted complex T-SQL stored procedures (multi-level temp tables, cursors, dynamic SQL) into modular PySpark DataFrame transformations, preserving business rules for claim adjudication, COB, and provider network matching.",
      "Designed Redshift data marts (star schema — member, provider, claim, diagnosis, procedure dimensions) with DISTKEY / SORTKEY tuning and WLM queue setup, cutting reporting query times by ~90% (from 12–15 min to under 90s).",
      "Built reusable PySpark templates mapping common SSIS patterns (Data Flow Tasks, Lookups, Derived Columns, Conditional Splits) so the team migrated jobs via parameters instead of hand-coding each one.",
      "Implemented HIPAA controls — KMS encryption at rest, IAM role-based access, PHI column masking for lower environments, CloudTrail audit logging — and owned L3 production support on rotation including RCAs for data-mismatch tickets.",
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
      "Parameter-driven PySpark templates that map SSIS and Informatica components (Data Flow Tasks, Lookups, Derived Columns) to DataFrame operations — config-driven migration instead of hand-coded.",
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
  { value: "50+", label: "ETL Pipelines Migrated" },
  { value: "~90%", label: "Query Latency Reduction" },
  { value: "933", label: "Line Glue Job Hardened" },
];
