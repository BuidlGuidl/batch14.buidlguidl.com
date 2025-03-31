import "@rainbow-me/rainbowkit/styles.css";
import { Metadata } from "next";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";

export const metadata: Metadata = {
  title: "Batch #14 - BuidlGuidl 🏰",
  description: "The 14th group of builders put together by BuidlGuidl 🚀",
  openGraph: {
    title: "Batch #14 - BuidlGuidl 🏰",
    description: "The 14th group of builders put together by BuidlGuidl 🚀",
    images: [
      {
        url: "/batch-14-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Batch #14 Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Batch #14 - BuidlGuidl 🏰",
    description: "The 14th group of builders put together by BuidlGuidl 🚀",
    images: ["/batch-14-thumbnail.jpg"],
  },
};

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
