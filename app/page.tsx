import { IPost } from "@/types/Post";
import { Post } from "./_component/Post";
import * as homeStyles from "@/styles/home.css";
import { mockData } from "./mockData";

export default function Home() {
  const data: IPost[] = mockData;
  return (
    <div className={homeStyles.scrollWrap}>
      <div className={homeStyles.postList}>
        {data.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
