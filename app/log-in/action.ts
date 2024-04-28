"use server";
import db from "@/libs/db";
import { redirect } from "next/navigation";
import { loginFormSchema } from "@/libs/validation";
import getSession from "@/libs/session";

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await loginFormSchema.spa(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    const session = await getSession();
    session.id = user!.id;
    await session.save();
    redirect("/");
  }
}
