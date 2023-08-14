import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footers/footer";
import { StyledEngineProvider } from "@mui/material";

export const metadata: Metadata = {
  title: "Next Ninja • Zostań mistrzem Next.js",
  description:
    '"Blog programistyczny dla front-end i back-end developerów. Opanuj JavaScript, React, Next.js i TypeScript w stylu ninja. Praca zdalna, kody i tajniki programowania. Twoje przyjazne źródło wiedzy."',
  icons: {
    icon: "/assets/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <StyledEngineProvider injectFirst>
          <Navbar />
          <main className="w-full mt-24">{children}</main>
          <Footer />
        </StyledEngineProvider>
      </body>
    </html>
  );
}
