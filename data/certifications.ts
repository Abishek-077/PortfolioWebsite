export type TrackFocus = "Python" | "Database";

export type SpecializationTrack = {
  title: string;
  provider: string;
  description: string;
  highlights: string[];
  focus: TrackFocus;
  platformUrl: string;
  snapshotImage?: string;
};

export type CertificateArea = TrackFocus | "MERN";

export type Certification = {
  title: string;
  issuer: string;
  area: CertificateArea;
  issuedOn: string;
  credentialId: string;
  credentialUrl?: string;
  skills: string[];
  details?: string;
  duration?: string;
  image?: string;
};

const ioaGlobalUrl = "https://ioaglobal.org/";
const linkedInProfileUrl = "https://www.linkedin.com/in/abishek-ghimire-ab88072a7/";
const dataquestVerificationBaseUrl = "https://app.dataquest.io/verify_cert";
const toDataquestVerifyUrl = (credentialId: string) => `${dataquestVerificationBaseUrl}/${credentialId}/`;

export const specializationTracks: SpecializationTrack[] = [
  {
    title: "Python for Data Science Specialization",
    provider: "IOA Global x Dataquest",
    description:
      "Completed a structured Python pathway focused on practical data analysis and notebook-driven workflows.",
    highlights: [
      "Python fundamentals: variables, types, conditionals, loops, and dictionaries",
      "Functions, debugging, and Jupyter notebook workflows for real analysis tasks",
      "Intermediate topics: data cleaning, OOP, and date/time analysis workflows",
    ],
    focus: "Python",
    platformUrl: ioaGlobalUrl,
    snapshotImage: "/certificates/python-track-progress.png",
  },
  {
    title: "Database and SQL Specialization",
    provider: "IOA Global x Dataquest",
    description:
      "Completed a database-focused specialization covering analytics SQL patterns and Python-SQL integration.",
    highlights: [
      "SQL querying foundations with real database workflows",
      "Summarization, joins, and multi-table analytical query building",
      "Subqueries, window functions, and SQL + Python data workflows",
    ],
    focus: "Database",
    platformUrl: ioaGlobalUrl,
    snapshotImage: "/certificates/working-with-data-sources-sql.pdf-page1.png",
  },
];

export const certifications: Certification[] = [
  {
    title: "SQL Skills for Data Analysis Program",
    issuer: "Dataquest x Institute of Analytics",
    area: "Database",
    issuedOn: "February 27, 2026",
    credentialId: "NKAE192GE7ZKKZ9PJ6YE",
    credentialUrl: toDataquestVerifyUrl("NKAE192GE7ZKKZ9PJ6YE"),
    skills: ["SQL", "Data Analysis", "Reporting"],
    details: "Program-level SQL certification focused on analytics reporting and applied query problem solving.",
  },
  {
    title: "SQL Fundamentals Program",
    issuer: "Dataquest x Institute of Analytics",
    area: "Database",
    issuedOn: "February 27, 2026",
    credentialId: "LVFZULZYK912UAIKOXRM",
    credentialUrl: toDataquestVerifyUrl("LVFZULZYK912UAIKOXRM"),
    skills: ["SQL Fundamentals", "Query Design", "Data Literacy"],
    details: "Foundation-level SQL path validating relational querying and clean analytical thinking.",
  },
  {
    title: "Working with Data Sources Using SQL",
    issuer: "Dataquest x Institute of Analytics",
    area: "Database",
    issuedOn: "February 27, 2026",
    credentialId: "X98SAT20VUDH1X0619ZF",
    credentialUrl: toDataquestVerifyUrl("X98SAT20VUDH1X0619ZF"),
    skills: ["Data Sources", "SQL Queries", "Python + SQL"],
    details: "Specialization part certificate focused on connecting and querying practical data sources.",
    image: "/certificates/working-with-data-sources-sql.pdf-page1.png",
  },
  {
    title: "Introduction to SQL and Databases",
    issuer: "Dataquest x Institute of Analytics",
    area: "Database",
    issuedOn: "February 27, 2026",
    credentialId: "U0FGE5S2K72F11VHMWD9",
    credentialUrl: toDataquestVerifyUrl("U0FGE5S2K72F11VHMWD9"),
    skills: ["Relational Databases", "SELECT", "Filtering"],
    details: "Core introduction to relational thinking, SQL syntax, and practical database workflows.",
  },
  {
    title: "SQL Subqueries",
    issuer: "Dataquest x Institute of Analytics",
    area: "Database",
    issuedOn: "February 27, 2026",
    credentialId: "VOQF4W0II4KZWWDIVD32",
    skills: ["Subqueries", "Nested Queries", "Advanced SQL"],
    details: "Advanced SQL focus on nested query strategies and composable analytical logic.",
  },
  {
    title: "Window Functions in SQL",
    issuer: "Dataquest x Institute of Analytics",
    area: "Database",
    issuedOn: "February 27, 2026",
    credentialId: "Y84ZSVB6TDM674OJGLT4",
    credentialUrl: toDataquestVerifyUrl("Y84ZSVB6TDM674OJGLT4"),
    skills: ["Window Functions", "Ranking", "Analytical SQL"],
    details: "Analytical SQL specialization in ranking, partitioning, and running-metric patterns.",
  },
  {
    title: "Python Introduction",
    issuer: "Dataquest x Institute of Analytics",
    area: "Python",
    issuedOn: "October 6, 2025",
    credentialId: "36BXDIEGYKLXM1912SY9",
    credentialUrl: toDataquestVerifyUrl("36BXDIEGYKLXM1912SY9"),
    skills: ["Python Basics", "Control Flow", "Data Structures"],
    details: "Completed Python introduction course for data science foundations and notebook-based practice.",
    image: "/certificates/python-introduction.pdf-page1.png",
  },
  {
    title: "Data Analysis and Visualization",
    issuer: "Dataquest x Institute of Analytics",
    area: "Python",
    issuedOn: "August 23, 2025",
    credentialId: "JT4PMB0S01VYE1CQ05QN",
    credentialUrl: toDataquestVerifyUrl("JT4PMB0S01VYE1CQ05QN"),
    skills: ["Data Analysis", "Visualization", "Insights Communication"],
    details: "Completed pathway in practical analysis, interpretation, and data visualization storytelling.",
    image: "/certificates/data-analysis-visualization.pdf-page1.png",
  },
  {
    title: "React: Creating and Hosting a Full-Stack Site",
    issuer: "LinkedIn Learning",
    area: "MERN",
    issuedOn: "April 16, 2025",
    credentialId: "c7dcd6e838a641c5bbaf6a4cedae131ce06bd02c51beaf77bdc02ebf35a54acf",
    credentialUrl: linkedInProfileUrl,
    skills: ["React.js", "Full-Stack Development", "Web Deployment"],
    duration: "4 hours 9 minutes",
    details: "Hands-on full-stack React deployment course with modern app hosting workflow.",
  },
  {
    title: "MongoDB Essential Training",
    issuer: "LinkedIn Learning",
    area: "MERN",
    issuedOn: "November 29, 2025",
    credentialId: "369a104365d0db251529c804bb894c2d39e1ef64e0923cb012b5ebed0004d239c",
    credentialUrl: linkedInProfileUrl,
    skills: ["MongoDB", "NoSQL", "Database Design"],
    duration: "3 hours 49 minutes",
    details: "Practical MongoDB certification for schema design, querying, and production-ready CRUD workflows.",
  },
];

