"use client";

import { useState } from "react";
import { BOOKING_URL } from "@/lib/site";

const SERIF = "var(--font-source-serif), 'Source Serif 4', serif";
const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

const volFee = (p: number) => {
  let v = 0;
  v += Math.min(p, 250) * 4;
  v += Math.min(Math.max(p - 250, 0), 500) * 3;
  v += Math.min(Math.max(p - 750, 0), 750) * 2.25;
  v += Math.max(p - 1500, 0) * 1.75;
  return v;
};

function Stepper({ onDec, onInc, display }: { onDec: () => void; onInc: () => void; display: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <button className="cx-step" onClick={onDec} aria-label="Decrease" style={{ width: 46, height: 46, flex: "0 0 auto", border: "1px solid rgba(19,41,75,0.2)", background: "#FAFAF7", borderRadius: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#13294B" }}>
        <svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </button>
      <div style={{ flex: 1, textAlign: "center", fontFamily: SERIF, fontWeight: 600, fontSize: 30, color: "#13294B", letterSpacing: "-0.02em", fontFeatureSettings: "'tnum' 1" }}>{display}</div>
      <button className="cx-step" onClick={onInc} aria-label="Increase" style={{ width: 46, height: 46, flex: "0 0 auto", border: "1px solid rgba(19,41,75,0.2)", background: "#FAFAF7", borderRadius: 13, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#13294B" }}>
        <svg width="18" height="18" viewBox="0 0 18 18"><path d="M9 4v10M4 9h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </button>
    </div>
  );
}

export default function PricingCalculator() {
  const [providers, setProviders] = useState(1);
  const [patients, setPatients] = useState(200);
  const [priorAuths, setPriorAuths] = useState(10);

  const clamp = (v: number, min: number, max: number) => (v < min ? min : v > max ? max : v);
  const core = 1899 + (providers - 1) * 1499;
  const volume = volFee(patients);
  const premium = priorAuths * 15;
  const total = core + volume + premium;
  const blended = patients > 0 ? volume / patients : 0;
  const annualSave = Math.round(core * 12 * 0.1);

  const fields = [
    { label: "Providers", rate: "$1,899 first · $1,499 each add'l", sub: "Physicians, NPs, or PAs on the account", display: providers, onDec: () => setProviders((v) => clamp(v - 1, 1, 25)), onInc: () => setProviders((v) => clamp(v + 1, 1, 25)) },
    { label: "Unique patients / month", rate: "Tiered · $4.00 → $1.75", sub: "Billed once per patient — the rate declines as volume grows", display: patients, onDec: () => setPatients((v) => clamp(v - 25, 0, 4000)), onInc: () => setPatients((v) => clamp(v + 25, 0, 4000)) },
    { label: "Prior authorizations / month", rate: "$15 each", sub: "A premium service — billed only when used", display: priorAuths, onDec: () => setPriorAuths((v) => clamp(v - 5, 0, 400)), onInc: () => setPriorAuths((v) => clamp(v + 5, 0, 400)) },
  ];

  const breakdown = [
    { label: providers === 1 ? "Core · 1 provider" : `Core · $1,899 + ${providers - 1} × $1,499`, value: money(core) },
    { label: `Volume · ${patients} patients (~${money(blended)}/ea)`, value: money(volume) },
    { label: `Premium · ${priorAuths} prior auths × $15`, value: money(premium) },
  ];

  return (
    <div className="cx-calc-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 0, border: "1px solid rgba(19,41,75,0.12)", borderRadius: 26, overflow: "hidden", boxShadow: "0 30px 64px rgba(19,41,75,0.1)" }}>
      {/* controls */}
      <div style={{ background: "#FAFAF7", padding: "clamp(28px, 3.5vw, 48px)" }}>
        <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 21, color: "#13294B", marginBottom: 28 }}>Estimate your monthly cost</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {fields.map((f) => (
            <div key={f.label}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, marginBottom: 4 }}>
                <div style={{ fontSize: "15.5px", fontWeight: 600, color: "#13294B" }}>{f.label}</div>
                <div style={{ fontSize: "12.5px", color: "#4A4A45", opacity: 0.78 }}>{f.rate}</div>
              </div>
              <div style={{ fontSize: 13, color: "#4A4A45", opacity: 0.78, marginBottom: 14 }}>{f.sub}</div>
              <Stepper onDec={f.onDec} onInc={f.onInc} display={f.display} />
            </div>
          ))}
        </div>
      </div>

      {/* result */}
      <div style={{ background: "#13294B", color: "#FAFAF7", padding: "clamp(28px, 3.5vw, 48px)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div className="cx-anim" aria-hidden style={{ position: "absolute", top: -120, right: -90, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(254,197,57,0.14), transparent 64%)", animation: "cxDrift 22s ease-in-out infinite" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: "12.5px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(250,250,247,0.6)", marginBottom: 12 }}>Estimated monthly</div>
          <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: "clamp(52px, 7vw, 76px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#FEC539" }}>{money(total)}/mo</div>
          <div style={{ fontSize: "13.5px", color: "rgba(250,250,247,0.6)", marginTop: 8 }}>per month, all-in for this scenario</div>

          <div style={{ marginTop: 30, display: "flex", flexDirection: "column" }}>
            {breakdown.map((b, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, padding: "14px 0", borderTop: "1px solid rgba(250,250,247,0.14)" }}>
                <div style={{ fontSize: 14, color: "rgba(250,250,247,0.78)" }}>{b.label}</div>
                <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 18, color: "#FAFAF7" }}>{b.value}</div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(250,250,247,0.14)" }} />
          </div>

          <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 9, background: "rgba(91,140,123,0.18)", border: "1px solid rgba(91,140,123,0.32)", borderRadius: 12, padding: "12px 14px" }}>
            <span style={{ color: "#9DC4B4", flex: "0 0 auto" }}><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
            <span style={{ fontSize: 13, color: "rgba(250,250,247,0.86)", lineHeight: 1.4 }}>Pay annually and save {money(annualSave)}/yr — 10% off the core fee, plus 5% off premium services.</span>
          </div>
        </div>
        <a href={BOOKING_URL} data-calendly className="cx-gold cx-mag" style={{ position: "relative", marginTop: 24, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9, textDecoration: "none", background: "#FEC539", color: "#13294B", fontWeight: 600, fontSize: "15.5px", padding: "15px 26px", borderRadius: 999, alignSelf: "flex-start" }}>Get an exact quote <span style={{ fontSize: 17 }}>→</span></a>
      </div>
    </div>
  );
}
