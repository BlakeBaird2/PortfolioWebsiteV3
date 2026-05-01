import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@1,400&display=swap",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    }
  ).then((r) => r.text());

  const fontUrl = css.match(/src: url\((.+?)\) format/)?.[1];
  const fontData = fontUrl
    ? await fetch(fontUrl).then((r) => r.arrayBuffer())
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#faf9f7",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: fontData ? "Newsreader" : "serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 110,
            color: "#1a1c1b",
            letterSpacing: "-0.02em",
          }}
        >
          Blake Baird
        </span>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "Newsreader", data: fontData, style: "italic", weight: 400 }]
        : [],
    }
  );
}
