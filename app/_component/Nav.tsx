"use client";
import Link from "next/link";
import * as commonStyles from "@/styles/common.css";

export function Nav() {
  return (
    <nav className={commonStyles.navBox}>
      <ul className={commonStyles.navList}>
        <li>
          <Link href="/create-account" className={commonStyles.navItem}>
            sign in
          </Link>
        </li>
        <li>
          <Link href="/log-in" className={commonStyles.navItem}>
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
