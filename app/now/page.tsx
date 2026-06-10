import type { Metadata } from "next";
import { StubPage } from "@/components/Content";

export const metadata: Metadata = {
  title: "Now",
};

export default function NowPage() {
  return (
    <StubPage
      title="Now"
      description="A small snapshot of what I'm focused on this season — classes, projects, and what's taking up brain space."
    />
  );
}
