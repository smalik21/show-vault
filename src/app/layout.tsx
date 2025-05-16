import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "@/_styles/globals.scss";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShowVault",
  description: "A Movie and TV Shows browsing destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
