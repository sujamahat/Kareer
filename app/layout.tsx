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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
