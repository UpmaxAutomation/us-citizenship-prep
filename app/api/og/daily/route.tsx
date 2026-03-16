import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#94a3b8", marginBottom: 16 }}>
          {dateStr}
        </div>
        <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 8 }}>
          Daily Citizenship Challenge
        </div>
        <div style={{ fontSize: 20, color: "#60a5fa" }}>
          uscitizenshiptestprep.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
