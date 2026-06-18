import { redirect, notFound } from "next/navigation";
import { getProjectGithub, profile } from "@/lib/profile";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return profile.projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const github = getProjectGithub(slug);

  if (!github) {
    notFound();
  }

  redirect(github);
}
