import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "US Citizenship Test Prep";
  const type = searchParams.get("type") || "page";

  // Color based on type
  const accentColor =
    {
      question: "#3b82f6",
      blog: "#8b5cf6",
      guide: "#10b981",
      tool: "#f59e0b",
      page: "#3b82f6",
    }[type] || "#3b82f6";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: accentColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            US
          </div>
          <span style={{ color: "#94a3b8", fontSize: "20px" }}>
            US Citizenship Test Prep
          </span>
        </div>
        <h1
          style={{
            fontSize: title.length > 60 ? "48px" : "56px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          {title}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#64748b",
            fontSize: "18px",
          }}
        >
          <span>All 128 USCIS Civics Questions</span>
          <span>|</span>
          <span>Free Study Tools</span>
          <span>|</span>
          <span>Updated 2025</span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "6px",
            background: `linear-gradient(90deg, ${accentColor}, ${accentColor}88)`,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
