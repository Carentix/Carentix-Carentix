import type { ReactNode } from "react";
import Image from "next/image";

/**
 * Faithful reproduction of the approved Claude Design legal template
 * (Privacy Policy.dc.html / Terms of Service.dc.html): light hero, meta row,
 * "at a glance" cards, sticky table-of-contents + numbered sections, dark CTA.
 * Structure, spacing, and inline styling are ported verbatim from the design.
 */

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

export type LegalListItem = { label?: string; text: string };
export type LegalSection = {
  id: string;
  num: string;
  title: string;
  paras?: string[];
  list?: LegalListItem[];
  calloutTitle?: string;
  calloutBody?: string;
};
export type GlanceCard = { icon: ReactNode; title: string; body: string };
export type MetaItem = { label: string; value: string };
export type HeaderImage = { src: string; alt: string };
export type CTA = { title: string; body: string; email: string };

export type LegalPageData = {
  eyebrow: string;
  title: string;
  intro: string;
  meta: MetaItem[];
  headerImage?: HeaderImage;
  glance: GlanceCard[];
  sections: LegalSection[];
  cta: CTA;
};

export default function LegalPage({ data }: { data: LegalPageData }) {
  return (
    <div style={{ position: "relative" }}>
      {/* HERO */}
      <section style={{ position: "relative", background: "#FAFAF7", overflow: "hidden" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "clamp(118px, 14vw, 168px) 32px clamp(40px, 5vw, 56px)" }}>
          <div
            data-reveal
            style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "clamp(24px, 3vw, 34px)", background: "rgba(91,140,123,0.1)", border: "1px solid rgba(91,140,123,0.28)", padding: "8px 15px", borderRadius: 999 }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5B8C7B" }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: "#3C5A50" }}>{data.eyebrow}</span>
          </div>
          <h1 data-reveal style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(40px, 6vw, 78px)", lineHeight: 1.0, letterSpacing: "-0.04em", margin: 0, color: "#13294B", maxWidth: "16ch", textWrap: "balance" }}>
            {data.title}
          </h1>
          <p data-reveal style={{ fontSize: "clamp(16.5px, 1.3vw, 19px)", lineHeight: 1.62, color: "#4A4A45", margin: "clamp(22px, 3vw, 30px) 0 0", maxWidth: "58ch", fontWeight: 450 }}>
            {data.intro}
          </p>
          <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 22, marginTop: "clamp(26px, 3vw, 34px)", fontSize: "13.5px", color: "#4A4A45" }}>
            {data.meta.map((m) => (
              <span key={m.label}>
                <strong style={{ color: "#13294B" }}>{m.label}</strong> {m.value}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* HEADER IMAGE (optional) */}
      {data.headerImage && (
        <section style={{ background: "#FAFAF7", padding: "0 32px clamp(30px, 4vw, 44px)" }}>
          <div data-reveal style={{ maxWidth: 1080, margin: "0 auto", borderRadius: 22, overflow: "hidden", boxShadow: "0 30px 64px rgba(19,41,75,0.12)" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "24 / 8" }}>
              <Image src={data.headerImage.src} alt={data.headerImage.alt} fill sizes="(max-width: 1080px) 100vw, 1016px" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </section>
      )}

      {/* AT A GLANCE */}
      <section style={{ background: "#FAFAF7", padding: "0 32px clamp(20px, 3vw, 30px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 1, background: "rgba(19,41,75,0.1)", border: "1px solid rgba(19,41,75,0.1)", borderRadius: 6, overflow: "hidden" }}>
          {data.glance.map((g) => (
            <div key={g.title} data-reveal style={{ background: "#fff", padding: "28px 26px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(91,140,123,0.14)", display: "flex", alignItems: "center", justifyContent: "center", color: "#5B8C7B", marginBottom: 18 }}>
                {g.icon}
              </div>
              <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 17, color: "#13294B", marginBottom: 7 }}>{g.title}</div>
              <p style={{ fontSize: "13.5px", lineHeight: 1.55, color: "#4A4A45", margin: 0 }}>{g.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BODY: TOC + SECTIONS */}
      <section style={{ background: "#FAFAF7", padding: "clamp(48px, 6vw, 80px) 32px clamp(70px, 9vw, 120px)" }}>
        <div className="cx-legal-grid" style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "240px 1fr", gap: "clamp(36px, 5vw, 64px)", alignItems: "start" }}>
          <nav className="cx-toc" data-reveal style={{ position: "sticky", top: 104 }}>
            <div style={{ fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5B8C7B", marginBottom: 18 }}>On this page</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
              {data.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} style={{ display: "block", textDecoration: "none", color: "#4A4A45", fontSize: 14, lineHeight: 1.4, padding: "8px 0 8px 14px", borderLeft: "2px solid rgba(19,41,75,0.12)" }}>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ minWidth: 0 }}>
            {data.sections.map((s) => (
              <div key={s.id} id={s.id} data-reveal style={{ scrollMarginTop: 100, paddingBottom: "clamp(40px, 5vw, 56px)", marginBottom: "clamp(40px, 5vw, 56px)", borderBottom: "1px solid rgba(19,41,75,0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 18 }}>
                  <span style={{ fontFamily: SERIF, fontSize: 14, fontWeight: 600, color: "#5B8C7B" }}>{s.num}</span>
                  <span style={{ width: 26, height: 1, background: "rgba(19,41,75,0.28)" }} />
                </div>
                <h2 style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(25px, 3.2vw, 36px)", lineHeight: 1.08, letterSpacing: "-0.025em", color: "#13294B", margin: "0 0 18px", textWrap: "balance" }}>
                  {s.title}
                </h2>
                {s.paras?.map((p, i) => (
                  <p key={i} style={{ fontSize: 16, lineHeight: 1.66, color: "#4A4A45", margin: "0 0 18px", maxWidth: "64ch" }}>{p}</p>
                ))}
                {s.list && (
                  <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                    {s.list.map((li, i) => (
                      <li key={i} style={{ display: "flex", gap: 13, alignItems: "flex-start", maxWidth: "64ch" }}>
                        <span style={{ flex: "0 0 auto", color: "#5B8C7B", marginTop: 2 }}>
                          <svg width="17" height="17" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span style={{ fontSize: "15.5px", lineHeight: 1.55, color: "#4A4A45" }}>
                          {li.label && <strong style={{ color: "#13294B", fontWeight: 600 }}>{li.label} </strong>}
                          {li.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.calloutTitle && (
                  <div style={{ marginTop: 24, display: "flex", gap: 16, alignItems: "flex-start", background: "#13294B", color: "#FAFAF7", borderRadius: 18, padding: "24px 26px" }}>
                    <span style={{ flex: "0 0 auto", width: 42, height: 42, borderRadius: 12, background: "rgba(254,197,57,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FEC539" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6Z" /><path d="M12 9v4M12 16h.01" /></svg>
                    </span>
                    <div>
                      <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 17, color: "#FAFAF7", marginBottom: 6 }}>{s.calloutTitle}</div>
                      <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(250,250,247,0.82)", margin: 0 }}>{s.calloutBody}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#FAFAF7", padding: "0 32px clamp(80px, 11vw, 150px)" }}>
        <div data-reveal style={{ maxWidth: 1080, margin: "0 auto", background: "#13294B", color: "#FAFAF7", borderRadius: 28, padding: "clamp(40px, 6vw, 70px) clamp(28px, 5vw, 64px)", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div className="cx-anim" style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.12), transparent 60%)", animation: "cxDrift 28s ease-in-out infinite" }} />
          <div style={{ position: "relative" }}>
            <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.035em", margin: "0 auto 18px", color: "#FAFAF7", maxWidth: "22ch", textWrap: "balance" }}>
              {data.cta.title}
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(250,250,247,0.78)", margin: "0 auto 32px", maxWidth: "50ch" }}>{data.cta.body}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a href={`mailto:${data.cta.email}`} className="cx-gold cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: 16, padding: "16px 30px", borderRadius: 999 }}>
                {data.cta.email}
              </a>
              <a href="/hipaa-compliance" className="cx-mag" style={{ display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none", color: "#FAFAF7", fontWeight: 600, fontSize: 16, padding: "16px 28px", borderRadius: 999, border: "1px solid rgba(250,250,247,0.28)" }}>
                See our HIPAA program
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
