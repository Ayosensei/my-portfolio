import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "./providers/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Ayooluwa Oyebade | Creative Developer & Engineer",
    template: "%s | Ayooluwa Oyebade",
  },
  description: "Portfolio of Ayooluwa Oyebade - Creative Developer specializing in Graphics Design, UI/UX, and Full Stack Web Development. Creating digital experiences that merge art with code.",
  keywords: ["portfolio", "web developer", "full stack", "UI/UX", "graphics design", "Next.js", "React"],
  authors: [{ name: "Ayooluwa Oyebade" }],
  creator: "Ayooluwa Oyebade",
  metadataBase: new URL("https://ayooluwa.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayooluwa.dev",
    title: "Ayooluwa Oyebade | Creative Developer & Engineer",
    description: "Creative Developer specializing in Graphics Design, UI/UX, and Full Stack Web Development.",
    siteName: "Ayooluwa Oyebade",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayooluwa Oyebade | Creative Developer",
    description: "Creative Developer specializing in Graphics Design, UI/UX, and Full Stack Web Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
