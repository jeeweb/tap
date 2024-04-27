"use client";
import { IconLike, IconLikeFilled } from "@/app/_component/icons/IconLike";

export function Like({ isLike, likes }: { isLike: boolean; likes: number }) {
  const handleLike = () => {};

  return (
    <div>
      <button onClick={handleLike}>
        {isLike ? <IconLikeFilled /> : <IconLike />}
      </button>
    </div>
  );
}
