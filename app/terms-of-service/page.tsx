import type { Metadata } from "next";
import ContentPage, { type LegalContent } from "@/components/ContentPage";
import data from "@/lib/content/terms-of-service.json";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Carentix website. Engagements are governed by a separately executed services agreement.",
};

export default function Page() {
  return <ContentPage data={data as LegalContent} />;
}
