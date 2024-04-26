"use client";
import Link from "next/link";
import * as commonStyles from "@/styles/common.css";

export function Nav() {
  return (
    <nav>
      <ul className={commonStyles.navList}>
        <li>
          <Link href="/create-account" className={commonStyles.navItem}>
            가입하기
          </Link>
        </li>
        <li>
          <Link href="/log-in" className={commonStyles.navItem}>
            로그인
          </Link>
        </li>
      </ul>
    </nav>
  );
}
