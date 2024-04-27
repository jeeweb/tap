import { IPost } from "@/types/Post";
import { Like } from "@/app/_component/Like";
import { CloseButton } from "@/app/_component/closeButton";
import * as postStyles from "@/styles/post.css";
import { mockData } from "@/app/mockData";

export default function PostDetail({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const postData: IPost | undefined = mockData.find((item) => item.id === id);

  return (
    <div className={postStyles.modalWrapper}>
      <div className={postStyles.modalContent}>
        <div className={postStyles.userInfo}>
          <span className={postStyles.username}>{postData?.author}</span>
        </div>
        <span>{postData?.created_at.toString()}</span>
        <div className={postStyles.postContent}>
          <div className={postStyles.contentBox}>
            <p className={postStyles.contentText}>
              {postData?.content}
              {id}
            </p>
          </div>
        </div>
        <ul className={postStyles.feedbacks}>
          <li className={postStyles.feedbackItem}>
            <Like isLike={postData!.isLike} likes={postData!.likes} />
          </li>
        </ul>
        <CloseButton />
      </div>
    </div>
  );
}
