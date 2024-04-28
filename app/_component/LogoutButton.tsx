import db from "@/libs/db";
import getSession from "@/libs/session";
import { notFound, redirect } from "next/navigation";
import * as commonStyles from "@/styles/common.css";

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

export async function LogoutButton() {
  const handleLogout = async () => {
    "use server";
    const session = await getSession();
    await session.destroy();
    redirect("/log-in");
  };
  const user = await getUser();
  if (user) {
    return (
      <form action={handleLogout} className={commonStyles.navItem}>
        <button>Log out</button>
      </form>
    );
  }
}
