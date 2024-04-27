"use client";
import * as postStyles from "@/styles/post.css";
import Link from "next/link";
import { IPost } from "@/types/Post";
import { Like } from "./Like";

export function Post({
  id,
  author,
  created_at,
  content,
  isLike,
  likes,
}: IPost) {
  return (
    <div className={postStyles.postItem}>
      <div className={postStyles.postTop}>
        <div className={postStyles.userInfo}>
          {/* userimg */}
          <span className={postStyles.username}>{author}</span>
        </div>
        <span className={postStyles.postCreatedAt}>
          {created_at.toString()}
        </span>
      </div>
      <Link href={`/tweet/${id}`}>
        <div className={postStyles.postContent}>
          <div className={postStyles.contentBox}>
            <p className={postStyles.contentText}>{content}</p>
          </div>
        </div>
      </Link>
      <ul className={postStyles.feedbacks}>
        <li className={postStyles.feedbackItem}>
          <Like isLike={isLike} likes={likes} />
        </li>
      </ul>
    </div>
  );
}
