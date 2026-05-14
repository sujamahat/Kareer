import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kareer — Career Platform for International Students in Korea",
  description:
    "Visa-aware career roadmap, internships, resume review, mentors, AI assistant, and visa tracker for international students in Korea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    try {
      var savedTheme = localStorage.getItem("kareer-theme");
      document.documentElement.dataset.theme = savedTheme === "light" ? "light" : "dark";
    } catch (_) {
      document.documentElement.dataset.theme = "dark";
    }
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
