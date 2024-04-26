import { Post } from "./_component/Post";
import * as homeStyles from "@/styles/home.css";

export default function Home() {
  return (
    <div className={homeStyles.postList}>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
