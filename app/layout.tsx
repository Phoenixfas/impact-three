import type { Metadata } from "next";
import "@/styles/globals.css";
// import Navbar from "./Navbar";
import Footer from "./Footer";
import ProviderWrapper from "./ProviderWrapper";
import TabsBar from "./TabsBar";

export const metadata: Metadata = {
  title: "Impact Makers Events",
  description: "Impact Makers Events specializes in crafting unforgettable experiences through expert event planning, innovative design, and seamless execution. From corporate conferences to luxury celebrations, we bring visions to life.",
  keywords: "event management, corporate events, luxury events, exhibitions, branding, AV & lighting, videography, event planning",
  authors: [{ name: "Impact Makers Events" }],
  robots: "index, follow",
  openGraph: {
    title: "Impact Makers Events",
    description: "Transform your events into extraordinary experiences with Impact Makers Events. We offer expert planning, custom event design, and seamless execution for corporate and luxury events.",
    url: "https://www.impactmakersevents.com",
    siteName: "Impact Makers Events",
    images: [
      {
        url: "https://iili.io/2tRaWBf.png",
        width: 1200,
        height: 630,
        alt: "Impact Makers Events - Event Preview"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ImpactMakersEvents",
    title: "Impact Makers Events",
    description: "From concept to execution, Impact Makers Events delivers high-quality event management services. Let's create something unforgettable.",
    images: "https://iili.io/2tRaWBf.png",
  },
  icons: "https://iili.io/2tR1TyN.png",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          <div>
            <TabsBar />
            {children}
            <Footer />
          </div>
        </ProviderWrapper>
      </body>
    </html>
  );
}
