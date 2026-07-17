import type { Metadata } from "next";
import ContentPage, { type LegalContent } from "@/components/ContentPage";
import data from "@/lib/content/privacy-policy.json";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Carentix handles personal information collected through our website and business relationships — and how PHI is handled separately under our BAAs.",
};

export default function Page() {
  return <ContentPage data={data as LegalContent} />;
}
