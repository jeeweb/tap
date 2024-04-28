"use client";
import { useRouter } from "next/navigation";
import { IconClose } from "@/app/_component/icons/IconClose";
import * as postStyles from "@/styles/post.css";

export function CloseButton() {
  const router = useRouter();
  const handleCloseModal = () => {
    router.back();
  };

  return (
    <button onClick={handleCloseModal} className={postStyles.ButtonClose}>
      <IconClose />
    </button>
  );
}
