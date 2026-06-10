import type { Metadata } from "next";
import { StubPage } from "@/components/Content";

export const metadata: Metadata = {
  title: "Interests",
};

export default function InterestsPage() {
  return (
    <StubPage
      title="Interests"
      description="Books, hobbies, and the non-resume parts of life that make me me."
    />
  );
}
