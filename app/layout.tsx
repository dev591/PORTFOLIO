import type { Metadata } from "next";
import { JetBrains_Mono, Press_Start_2P, Silkscreen } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/portfolio";
import "lenis/dist/lenis.css";
import "./globals.css";

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const description = `${profile.name} — ${profile.role}. I build RAG and multi-agent systems with LangChain, LangGraph and Google ADK. Looking for a ${profile.lookingFor}.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} · ${profile.role}`,
  description,
  keywords: ["Dev Chalana", "Generative AI", "Agentic AI", "RAG", "LangGraph", "Portfolio", "NMIMS Hyderabad"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${profile.name} · ${profile.role}`, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${silkscreen.variable} ${pressStart.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
