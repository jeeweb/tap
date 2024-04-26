"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconLike, IconLikeFilled } from "./icons/IconLike";
import * as postStyles from "@/styles/post.css";
import Link from "next/link";

export function Post() {
  const router = useRouter();
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike((prev) => !prev);
  };

  const handleDetailModal = () => {
    //router.push(`/tweet/${post.postId}`);
  };

  return (
    <div className={postStyles.postItem}>
      <div className={postStyles.postTop}>
        <div className={postStyles.userInfo}>
          {/* userimg */}
          <span className={postStyles.username}>John Doe</span>
        </div>
        <span className={postStyles.postCreatedAt}>2024.04.26</span>
      </div>
      <div className={postStyles.postContent}>
        <div className={postStyles.contentBox}>
          <p className={postStyles.contentText}>
            Hello, this is first tweet for you.
          </p>
        </div>
      </div>
      <ul className={postStyles.feedbacks}>
        <li className={postStyles.feedbackItem}>
          <button onClick={handleLike}>
            {isLike ? <IconLikeFilled /> : <IconLike />}
          </button>
        </li>
        {/* <li className={postStyles.feedbackItem}>
          <button onClick={handleDetailModal}>{<IconComment />}</button>
        </li> */}
      </ul>
    </div>
  );
}
