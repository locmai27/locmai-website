export type Experience = {
  org: string;
  role: string;
  line: string;
};

export type ProfileProject = {
  slug: string;
  title: string;
  line: string;
  github: string;
  demo?: string;
};

export const profile = {
  name: "Loc Mai",
  tagline: "Computing student · builder · AI & infra",
  intro:
    "I build software at the intersection of AI and infrastructure — from LLM agents to observability systems.",
  education: "Queen's University · Computing (Honours) · GPA 4.26",
  expertiseHeadline: "AI agents for CI/CD & observability",
  expertisePills: [
    "LangChain",
    "LangGraph",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "Python",
    "CI/CD",
    "Jenkins",
  ],
  experience: [
    {
      org: "Ericsson",
      role: "CloudRAN Integration & Test Co-op",
      line: "Built LLM agents (LangChain/LangGraph) to analyze CI/CD pipeline failures and surface root causes; etc.",
    },
    {
      org: "RISE Lab, Queen's",
      role: "Research Assistant",
      line: "GitHub Actions cache research across 282 repos · published in the ACM Digital Library.",
    },
    {
      org: "Queen's University",
      role: "Teaching Assistant",
      line: "Data Structures and Computer Architecture — office hours and labs for 40+ students.",
    },
  ] satisfies Experience[],
  projects: [
    {
      slug: "slideflow",
      title: "SlideFlow",
      line: 'QHacks "Best Use of AI" — voice-driven slide search with semantic AI.',
      github: "https://github.com/locmai27",
    },
    {
      slug: "github-actions-cache-research",
      title: "GitHub Actions Cache Research",
      line: "Cache analysis across 282 repositories · ACM Digital Library.",
      github: "https://github.com/locmai27",
    },
    {
      slug: "elastic-cloud-storage",
      title: "Elastic Cloud Storage",
      line: "Serverless AWS storage with Terraform infrastructure and CI/CD.",
      github: "https://github.com/locmai27",
    },
    {
      slug: "flight-booking-platform",
      title: "Flight Booking Platform",
      line: "Full-stack booking app with React, Flask, and MongoDB · 92% test coverage.",
      github: "https://github.com/locmai27",
    },
  ] satisfies ProfileProject[],
  contact: {
    github: "https://github.com/locmai27",
    linkedin: "https://www.linkedin.com/in/locmai27",
    email: "mailto:mai.vuthanhloc@queensu.ca",
    resume: "/resume.pdf",
  },
};

export function getProjectGithub(slug: string): string | null {
  return profile.projects.find((project) => project.slug === slug)?.github ?? null;
}
