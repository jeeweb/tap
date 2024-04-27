import Link from "next/link";
import { IconClose } from "@/app/_component/icons/IconClose";
import * as postStyles from "@/styles/post.css";

export function CloseButton() {
  return (
    <Link href="/" className={postStyles.ButtonClose}>
      <IconClose />
    </Link>
  );
}
