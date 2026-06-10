import type { Metadata } from "next";
import { StubPage } from "@/components/Content";

export const metadata: Metadata = {
  title: "Community",
};

export default function CommunityPage() {
  return (
    <StubPage
      title="Community"
      description="Teaching, clubs, mentoring, and the people-side of building things together."
    />
  );
}
