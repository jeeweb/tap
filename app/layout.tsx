import type { Metadata } from "next";
import { notoSansKr } from "@/styles/fonts/fonts";
import "@/styles/reset.css";

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
      <body className={notoSansKr.variable}>
        <header>
          <h1>Tap</h1>
        </header>
        {children}
        {modal}
      </body>
    </html>
  );
}
