import Image from "next/image";
import CinematicHero from "@/components/CinematicHero";

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

/** Per-page hero photography (approved uploads). */
const HERO_IMAGES: Record<
  string,
  { src: string; alt: string; position?: string; light?: boolean; fadeTo?: string }
> = {
  "privacy-policy": {
    src: "/images/privacy-hero.jpg",
    alt: "Two operations colleagues reviewing data securely together at a workstation",
    position: "center",
  },
  "terms-of-service": {
    src: "/images/terms-hero.jpg",
    alt: "A patient in a home telehealth visit with her physician, medical summary on screen",
    position: "center",
  },
  accessibility: {
    src: "/images/accessibility-hero.jpg",
    alt: "A patient using a wheelchair speaking warmly with a welcoming receptionist at a clinic front desk",
    position: "center",
    light: true,
    fadeTo: "#FAFAF7",
  },
};

/** Supporting mid-page image per slug (approved uploads). */
const SUPPORT_IMAGES: Record<string, { src: string; alt: string } | undefined> = {
  "privacy-policy": {
    src: "/images/privacy-hero.jpg",
    alt: "A secure operations workspace where PHI is handled with care",
  },
  "terms-of-service": {
    src: "/images/careers-training.jpg",
    alt: "A professional office where our team supports clinical operations",
  },
  accessibility: {
    src: "/images/inclusive-care.jpg",
    alt: "A pediatrician offering warm, inclusive care to a young patient and her mother",
  },
};

export type LegalListItem = { label?: string; text: string };
export type LegalSection = {
  id: string;
  num: string;
  title: string;
  paras?: string[];
  hasList?: boolean;
  list?: LegalListItem[];
  hasCallout?: boolean;
  calloutTitle?: string;
  calloutBody?: string;
};
export type GlanceCard = { title: string; body: string };
export type MetaItem = { label: string; value: string };
export type LegalContent = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  meta: MetaItem[];
  glance: GlanceCard[];
  sections: LegalSection[];
};

export default function ContentPage({ data }: { data: LegalContent }) {
  const hero = HERO_IMAGES[data.slug];
  const support = SUPPORT_IMAGES[data.slug];
  const sectionsBefore = data.sections.slice(0, Math.ceil(data.sections.length / 2));
  const sectionsAfter = data.sections.slice(sectionsBefore.length);

  return (
    <main>
      {hero ? (
        <CinematicHero
          image={hero.src}
          alt={hero.alt}
          eyebrow={data.eyebrow || undefined}
          title={data.title}
          intro={data.intro}
          meta={data.meta}
          light={hero.light}
          fadeTo={hero.fadeTo}
          objectPosition={hero.position}
        />
      ) : (
        <section style={{ background: "#FAFAF7" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(140px, 16vw, 200px) 32px clamp(32px, 4vw, 48px)" }}>
            <h1 data-reveal style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(38px, 5.4vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.04em", margin: 0, color: "#13294B", maxWidth: "18ch", textWrap: "balance" }}>
              {data.title}
            </h1>
            {data.intro && <p data-reveal style={{ fontSize: "clamp(16.5px, 1.3vw, 19px)", lineHeight: 1.62, color: "#4A4A45", margin: "clamp(22px, 3vw, 30px) 0 0", maxWidth: "62ch", fontWeight: 450 }}>{data.intro}</p>}
          </div>
        </section>
      )}

      {/* At a glance */}
      {data.glance.length > 0 && (
        <section style={{ background: "#FAFAF7" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(56px, 7vw, 80px) 32px 0" }}>
            <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {data.glance.map((g) => (
                <div key={g.title} className="cx-card" style={{ padding: "26px 26px" }}>
                  <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#13294B", marginBottom: 10, letterSpacing: "-0.01em" }}>{g.title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.56, color: "#4A4A45", margin: 0 }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <SectionList sections={sectionsBefore} />

      {support && (
        <section style={{ background: "#FAFAF7" }}>
          <div data-reveal style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(24px, 3vw, 40px) 32px" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 6", minHeight: 200, borderRadius: 22, overflow: "hidden", boxShadow: "0 22px 50px rgba(19,41,75,0.12)" }}>
              <Image
                src={support.src}
                alt={support.alt}
                fill
                sizes="(max-width: 1080px) 100vw, 1016px"
                style={{ objectFit: "cover" }}
              />
              <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,30,60,0.12) 0%, rgba(12,30,60,0.0) 40%, rgba(250,250,247,0.6) 100%)" }} />
            </div>
          </div>
        </section>
      )}

      <SectionList sections={sectionsAfter} />
    </main>
  );
}

function SectionList({ sections }: { sections: LegalSection[] }) {
  if (!sections.length) return null;
  return (
    <section style={{ background: "#FAFAF7" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(48px, 6vw, 80px) 32px clamp(80px, 10vw, 140px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
          {sections.map((s) => (
            <div key={s.id} id={s.id} data-reveal style={{ scrollMarginTop: 110 }}>
              <h2 style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(24px, 2.8vw, 32px)", lineHeight: 1.14, letterSpacing: "-0.02em", color: "#13294B", margin: "0 0 16px" }}>{s.title}</h2>
              <div>
                {s.paras?.map((p, i) => (
                  <p key={i} style={{ fontSize: "15.5px", lineHeight: 1.7, color: "#4A4A45", margin: "0 0 14px", maxWidth: "72ch" }}>{p}</p>
                ))}
                {s.hasList && s.list && (
                  <ul style={{ listStyle: "none", margin: "6px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                    {s.list.map((item, i) => (
                      <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ flex: "0 0 auto", color: "#5B8C7B", marginTop: 3 }}>
                          <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span style={{ fontSize: "15.5px", lineHeight: 1.6, color: "#4A4A45", maxWidth: "70ch" }}>
                          {item.label && <strong style={{ color: "#13294B" }}>{item.label} </strong>}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.hasCallout && (
                  <div style={{ marginTop: 18, display: "flex", gap: 12, alignItems: "flex-start", background: "rgba(91,140,123,0.1)", border: "1px solid rgba(91,140,123,0.26)", borderRadius: 14, padding: "16px 18px", maxWidth: "72ch" }}>
                    <span style={{ color: "#3C5A50", flex: "0 0 auto", marginTop: 1 }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <div>
                      {s.calloutTitle && <div style={{ fontWeight: 600, fontSize: 14, color: "#13294B", marginBottom: 4 }}>{s.calloutTitle}</div>}
                      {s.calloutBody && <div style={{ fontSize: "13.5px", lineHeight: 1.55, color: "#3C5A50" }}>{s.calloutBody}</div>}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
