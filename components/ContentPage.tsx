import ImageSlot from "@/components/ImageSlot";

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

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
  return (
    <main>
      {/* Hero */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(120px, 14vw, 176px) 32px clamp(32px, 4vw, 48px)" }}>
          {data.eyebrow && (
            <div data-reveal style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 26, background: "rgba(91,140,123,0.1)", border: "1px solid rgba(91,140,123,0.28)", padding: "8px 15px", borderRadius: 999 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5B8C7B" }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "#3C5A50" }}>{data.eyebrow}</span>
            </div>
          )}
          <h1 data-reveal style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(38px, 5.4vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.04em", margin: 0, color: "#13294B", maxWidth: "18ch", textWrap: "balance" }}>
            {data.title}
          </h1>
          {data.intro && (
            <p data-reveal style={{ fontSize: "clamp(16.5px, 1.3vw, 19px)", lineHeight: 1.62, color: "#4A4A45", margin: "clamp(22px, 3vw, 30px) 0 0", maxWidth: "62ch", fontWeight: 450 }}>
              {data.intro}
            </p>
          )}
          {data.meta.length > 0 && (
            <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 22, marginTop: 28, fontSize: 13, color: "#4A4A45" }}>
              {data.meta.map((m) => (
                <span key={m.label}>
                  <strong style={{ color: "#13294B" }}>{m.label}</strong> {m.value}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Header image */}
      <section style={{ background: "#FAFAF7" }}>
        <div data-reveal style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px" }}>
          <ImageSlot
            label="Calm, premium healthcare photo — soft, editorial, trustworthy"
            radius={22}
            style={{ width: "100%", aspectRatio: "16 / 6", minHeight: 180 }}
          />
        </div>
      </section>

      {/* At a glance */}
      {data.glance.length > 0 && (
        <section style={{ background: "#FAFAF7" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(44px, 6vw, 68px) 32px 0" }}>
            <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {data.glance.map((g) => (
                <div key={g.title} className="cx-lift" style={{ background: "#F3F0E8", border: "1px solid rgba(19,41,75,0.09)", borderRadius: 18, padding: "26px 26px" }}>
                  <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#13294B", marginBottom: 10, letterSpacing: "-0.01em" }}>{g.title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.56, color: "#4A4A45", margin: 0 }}>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sections */}
      <section style={{ background: "#FAFAF7" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "clamp(56px, 7vw, 96px) 32px clamp(80px, 10vw, 140px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
            {data.sections.map((s) => (
              <div key={s.id} id={s.id} data-reveal style={{ scrollMarginTop: 110 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 16 }}>
                  <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 600, color: "#5B8C7B", flex: "0 0 auto" }}>{s.num}</span>
                  <h2 style={{ fontFamily: SERIF, fontWeight: 600, fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.16, letterSpacing: "-0.02em", color: "#13294B", margin: 0 }}>{s.title}</h2>
                </div>
                <div style={{ paddingLeft: "clamp(0px, 2vw, 29px)" }}>
                  {s.paras?.map((p, i) => (
                    <p key={i} style={{ fontSize: "15.5px", lineHeight: 1.68, color: "#4A4A45", margin: i === 0 ? "0 0 14px" : "0 0 14px", maxWidth: "72ch" }}>{p}</p>
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
    </main>
  );
}
