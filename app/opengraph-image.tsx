import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile, projects } from "@/data/portfolio";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#141414";
const YELLOW = "#ffc727";
const RED = "#ef4444";

export default async function Image() {
  const [bold, regular, photo] = await Promise.all([
    readFile(join(process.cwd(), "assets/Silkscreen-Bold.ttf")),
    readFile(join(process.cwd(), "assets/Silkscreen-Regular.ttf")),
    readFile(join(process.cwd(), "public", profile.avatar)),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const chips = ["RAG", "Multi-Agent", "LangGraph", "Google ADK"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f6f4ee",
          backgroundImage:
            "linear-gradient(rgba(20,20,20,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,20,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          padding: 56,
          fontFamily: "Silkscreen",
          color: INK,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            background: "#fff",
            border: `6px solid ${INK}`,
            boxShadow: `14px 14px 0 0 ${INK}`,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "44px 48px", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-start",
                  background: YELLOW,
                  border: `4px solid ${INK}`,
                  padding: "8px 16px",
                  fontSize: 24,
                  fontWeight: 700,
                }}
              >
                PLAYER 1 · PORTFOLIO
              </div>
              <div style={{ display: "flex", fontSize: 58, fontWeight: 700, marginTop: 28, lineHeight: 1 }}>{profile.name}</div>
              <div style={{ display: "flex", fontSize: 32, color: RED, marginTop: 18 }}>{profile.role}</div>
              <div style={{ display: "flex", fontSize: 22, marginTop: 14, color: "#55524a" }}>
                {`${projects.length} shipped AI projects · SIH 2026 · IIT Mandi certified`}
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {chips.map((c) => (
                <div key={c} style={{ display: "flex", border: `3px solid ${INK}`, padding: "6px 12px", fontSize: 20 }}>
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: 380,
              borderLeft: `6px solid ${INK}`,
              background: YELLOW,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={photoSrc} width={300} height={300} alt="" style={{ border: `6px solid ${INK}` }} />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Silkscreen", data: bold, weight: 700, style: "normal" },
        { name: "Silkscreen", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
