import type { Metadata } from "next";
import "./globals.css";
import siteConfig from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.profile.name} | Link in Bio`,
  description: siteConfig.profile.bio,
  openGraph: {
    title: `${siteConfig.profile.name} | Link in Bio`,
    description: siteConfig.profile.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
