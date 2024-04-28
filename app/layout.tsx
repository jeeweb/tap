import Link from "next/link";
import getSession from "@/libs/session";
import type { Metadata } from "next";
import { galada, notoSansKr } from "@/styles/fonts/fonts";
import "@/styles/reset.css";
import * as commonStyles from "@/styles/common.css";
import { PostUploadForm } from "./_component/PostUploadForm";
import { LogoutButton } from "./_component/LogoutButton";
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
            <PostUploadForm />
          </section>
          <section className={commonStyles.contentWrap}>
            <div className={commonStyles.contentWrapTop}>
              <LogoutButton />
            </div>
            {children}
            {modal}
          </section>
        </div>
      </body>
    </html>
  );
}
