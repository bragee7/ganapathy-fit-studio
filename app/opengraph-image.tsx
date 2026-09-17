import { ImageResponse } from "next/og";

export const alt = "Ganapathy Fit Studio — Fitness · Strength · Confidence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0D0D0D",
          padding: "64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              backgroundColor: "#C8FF2F",
              color: "#0D0D0D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            GF
          </div>
          <div
            style={{
              color: "#737373",
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Fitness · Strength · Confidence
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#FFFFFF",
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          <span>TRAIN HARD.</span>
          <span style={{ color: "#C8FF2F" }}>LIVE STRONG.</span>
        </div>

        <div
          style={{
            display: "flex",
            color: "#737373",
            fontSize: 24,
            letterSpacing: 2,
          }}
        >
          Ariyamangalam · Ganapathy Nagar · Tiruchirappalli
        </div>
      </div>
    ),
    size
  );
}
