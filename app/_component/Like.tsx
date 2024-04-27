"use client";
import { IconLike, IconLikeFilled } from "@/app/_component/icons/IconLike";
import * as postStyles from "@/styles/post.css";

export function Like({ isLike, likes }: { isLike: boolean; likes: number }) {
  const handleLike = () => {};

  return (
    <div className={postStyles.likeItem}>
      <button onClick={handleLike}>
        {isLike ? <IconLikeFilled /> : <IconLike />}
      </button>
      {likes > 0 ? (
        <span
          className={
            isLike
              ? `${postStyles.likeNumber} ${postStyles.likeNumberSelected}`
              : `${postStyles.likeNumber}`
          }
        >
          {likes}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
