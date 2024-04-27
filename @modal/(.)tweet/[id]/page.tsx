import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { IPost } from "@/types/Post";
import { Like } from "@/app/_component/Like";
import { CloseButton } from "@/app/_component/CloseButton";
import * as postStyles from "@/styles/post.css";
import { mockData } from "@/app/mockData";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const now = dayjs(new Date());

export default function PostDetail({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const postData: IPost | undefined = mockData.find((item) => item.id === id);

  return (
    <div className={postStyles.modalWrapper}>
      <div className={postStyles.modalContent}>
        <div className={postStyles.userInfo}>
          <span className={postStyles.username}>{postData?.author}</span>
        </div>
        <div className={postStyles.postTop}>
          <span className={postStyles.postCreatedAt}>
            {now.diff(postData!.created_at, "day") > 3
              ? dayjs(postData!.created_at).format("YYYY.MM.DD")
              : dayjs(postData!.created_at).fromNow()}
          </span>
          <ul className={postStyles.feedbacks}>
            <li className={postStyles.feedbackItem}>
              <Like isLike={postData!.isLike} likes={postData!.likes} />
            </li>
          </ul>
        </div>
        <div className={postStyles.postContent}>
          <div className={postStyles.contentBox}>
            <p className={postStyles.contentText}>{postData?.content}</p>
          </div>
        </div>
        <CloseButton />
      </div>
    </div>
  );
}
