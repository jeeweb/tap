import Link from "next/link";
import type { Metadata } from "next";
import { notoSansKr } from "@/styles/fonts/fonts";
import { Nav } from "./_component/Nav";
import * as commonStyles from "@/styles/common.css";
import "@/styles/reset.css";
//import "@/styles/theme.css";

export const metadata: Metadata = {
  title: "Tap",
  description:
    "Tap is your new handy microblog. Share your thoughts with simple words.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${commonStyles.common} ${notoSansKr.className}`}>
        <header className={commonStyles.header}>
          <h1>
            <Link href="/">Tap</Link>
          </h1>
          <Nav />
        </header>
        <div className={commonStyles.contentWrap}>{children}</div>
        {modal}
      </body>
    </html>
  );
}
