import Link from "next/link";
import type { Metadata } from "next";
import { galada, notoSansKr } from "@/styles/fonts/fonts";
import { Nav } from "./_component/Nav";
import * as commonStyles from "@/styles/common.css";
import "@/styles/reset.css";
import { PostUploadForm } from "./_component/PostUploadForm";
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
        <div className={commonStyles.container}>
          <section className={commonStyles.aside}>
            <h1 className={`${commonStyles.logo} ${galada.className}`}>
              <Link href="/">Tap</Link>
            </h1>
            <div>
              <p className={commonStyles.greeting}>
                <span className={commonStyles.sayHello}>Hello,</span>
                재니스👋
              </p>
              <PostUploadForm />
            </div>
          </section>
          <section className={commonStyles.contentWrap}>
            <div className={commonStyles.contentWrapTop}>
              <Nav />
            </div>
            {children}
            {modal}
          </section>
        </div>
      </body>
    </html>
  );
}
