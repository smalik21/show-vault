import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "@/_styles/globals.scss";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { ConfigProvider } from "antd";

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
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                arrowOffset: 16,
                arrowSize: 32,
              },
              Pagination: {
                itemActiveBg: "#f66b0e",
                itemBg: "transparent",
                colorBgTextHover: "#151515",
                colorBgTextActive: "#151515",
                colorText: "white",
                colorPrimary: "white",
                colorPrimaryHover: "white",
                colorPrimaryTextActive: "white",
                colorTextDisabled: "#205375",
                itemSize: 40,
                fontSize: 16,
                borderRadius: 50,
              },
            },
          }}
        >
          <Header />
          {children}
          <Footer />
        </ConfigProvider>
      </body>
    </html>
  );
}
