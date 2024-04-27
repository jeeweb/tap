"use client";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { Like } from "./Like";
import { IPost } from "@/types/Post";
import * as postStyles from "@/styles/post.css";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const now = dayjs(new Date());

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
        <span className={postStyles.symbol}>•</span>
        <span className={postStyles.postCreatedAt}>
          {now.diff(created_at, "day") > 3
            ? dayjs(created_at).format("YYYY.MM.DD")
            : dayjs(created_at).fromNow()}
        </span>
        <ul className={postStyles.feedbacks}>
          <li className={postStyles.feedbackItem}>
            <Like isLike={isLike} likes={likes} />
          </li>
        </ul>
      </div>

      <Link href={`/tweet/${id}`}>
        <div className={postStyles.postContent}>
          <div className={postStyles.contentBox}>
            <p className={postStyles.contentText}>{content}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
