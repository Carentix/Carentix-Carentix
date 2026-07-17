import type { Metadata } from "next";
import ContentPage, { type LegalContent } from "@/components/ContentPage";
import data from "@/lib/content/accessibility.json";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Carentix's commitment to an accessible website, our conformance target, and how to request assistance or report a barrier.",
};

export default function Page() {
  return <ContentPage data={data as LegalContent} />;
}
