export const PROJECTS = [
  {
    id: 1,
    title: "Student Academic Request Module - UCL System",
    badge: "Undergraduate Thesis",
    tech: ["Next.js", "Express.js", "Sequelize", "PostgreSQL"],
    role: "Role: Frontend-focused developer (independent thesis project).",
    problem: "Previously, leave-of-absence and withdrawal requests were handled on paper — students filled out printed forms and staff routed them manually through each approving officer. After mapping this workflow through interviews, two separate approval flows were implemented in the existing UCL system, one for each request type.",
    description: "A module for submitting leave-of-absence and withdrawal letters, built and integrated into the existing UCL academic system.",
    features: [
      "Two distinct disposition (approval routing) flows for leave-of-absence and withdrawal letters, across administrative staff (TU), study program, and vice dean.",
      "Status tracking that records who acted on each request and when (for example, when a letter was read), shown on each request's detail page.",
      "Threaded chat for coordinating letter revisions.",
      "In-browser signature pad (canvas-based) for document sign-off."
    ],
    status: "Status: integrated into the running UCL system; user testing not yet conducted.",
    footnote: "Built within the existing UCL system; my contribution is the request module. Screenshots use dummy data.",
    repoLink: "", // TODO: I will fill in the link to my pull request or module folder after verifying it
    images: ["/projects/ucl/ucl-dashboard.webp"],
    isPrivate: false,
  },
  {
    id: 2,
    title: "Faculty E-Office System (Web)",
    badge: "Internship · Sep 2025 – Jan 2026",
    tech: ["React.js", "Nest.js", "PostgreSQL", "Bootstrap"],
    role: "Role: Web frontend developer (sole contributor) + backend co-developer.",
    description:
      "A web-based e-office platform for managing a faculty's incoming and outgoing correspondence.",
    features: [
      "Statistics dashboard — letter volume (internal / external) for incoming and outgoing mail.",
      "User management — user list and role-based access control.",
      "Master data — institutional profile management.",
      "Backend (co-developed with Nest.js): CRUD for letters, master data, and user management.",
    ],
    images: ["/projects/eoffice/eoffice-project.webp"],
    isPrivate: true,
  },
];
