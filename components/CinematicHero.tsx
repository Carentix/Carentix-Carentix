import Image from "next/image";
import type { ReactNode } from "react";

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";

/**
 * CinematicHero — the shared hero treatment for interior pages.
 * A full-bleed photograph with premium dark grading, gentle vignette,
 * an imperceptibly slow zoom, soft parallax, and a fade into the page
 * background below. Text always sits on the graded side and stays readable.
 */
export default function CinematicHero({
  image,
  alt,
  eyebrow,
  eyebrowColor = "#FEC539",
  title,
  intro,
  meta,
  children,
  light = false,
  fadeTo = "#FAFAF7",
  minHeight = "min(78vh, 720px)",
  objectPosition = "center",
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  eyebrowColor?: string;
  title: string;
  intro?: string;
  meta?: { label: string; value: string }[];
  children?: ReactNode;
  light?: boolean;
  fadeTo?: string;
  minHeight?: string;
  objectPosition?: string;
}) {
  return (
    <section
      className={`cx-cine${light ? " cx-cine--light" : ""}`}
      style={
        {
          display: "flex",
          alignItems: "flex-end",
          minHeight,
          "--cx-fade-to": fadeTo,
        } as React.CSSProperties
      }
    >
      <div className="cx-cine-img" data-parallax="30">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          style={{ objectPosition }}
        />
      </div>
      <div className="cx-cine-overlay" aria-hidden />
      <div className="cx-cine-vignette" aria-hidden />
      <div className="cx-cine-fade" aria-hidden />

      <div
        style={{
          width: "100%",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "clamp(150px, 18vw, 220px) 32px clamp(64px, 9vw, 112px)",
        }}
      >
        <div data-stagger data-reveal>
          {eyebrow && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
                background: "rgba(250,250,247,0.1)",
                border: "1px solid rgba(250,250,247,0.24)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                padding: "8px 15px",
                borderRadius: 999,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: eyebrowColor,
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  color: "rgba(250,250,247,0.92)",
                }}
              >
                {eyebrow}
              </span>
            </div>
          )}
          <h1
            style={{
              fontFamily: SERIF,
              fontWeight: 500,
              fontSize: "clamp(38px, 5.4vw, 72px)",
              lineHeight: 1.03,
              letterSpacing: "-0.038em",
              margin: 0,
              color: "#FAFAF7",
              maxWidth: "18ch",
              textWrap: "balance",
              textShadow: "0 2px 24px rgba(8,20,40,0.35)",
            }}
          >
            {title}
          </h1>
          {intro && (
            <p
              style={{
                fontSize: "clamp(16px, 1.25vw, 18.5px)",
                lineHeight: 1.64,
                color: "rgba(250,250,247,0.86)",
                margin: "clamp(20px, 2.6vw, 28px) 0 0",
                maxWidth: "58ch",
                fontWeight: 450,
                textShadow: "0 1px 14px rgba(8,20,40,0.3)",
              }}
            >
              {intro}
            </p>
          )}
          {meta && meta.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 22,
                marginTop: 26,
                fontSize: 13,
                color: "rgba(250,250,247,0.72)",
              }}
            >
              {meta.map((m) => (
                <span key={m.label}>
                  <strong style={{ color: "#FAFAF7", fontWeight: 600 }}>
                    {m.label}
                  </strong>{" "}
                  {m.value}
                </span>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
