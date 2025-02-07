import type { Metadata } from "next";
import "@/_styles/globals.scss";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
