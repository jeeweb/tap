import db from "@/libs/db";
import getSession from "@/libs/session";
import * as formStyles from "@/styles/form.css";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
}

export async function PostUploadForm() {
  const user = await getUser();
  console.log(user);

  if (user) {
    return (
      <div>
        <p className={formStyles.greeting}>
          <span className={formStyles.sayHello}>Hello,</span>
          {user?.username}👋
        </p>
        <form className={formStyles.formBox}>
          <div className={formStyles.formRow}>
            <div className={formStyles.textareaBox}>
              <textarea
                className={formStyles.textarea}
                placeholder="Feel free to share your thought here."
              ></textarea>
              <button className={formStyles.button}>Upload</button>
            </div>
          </div>
          <div className={formStyles.formRow}></div>
        </form>
      </div>
    );
  }
}
