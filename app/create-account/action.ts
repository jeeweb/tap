"use server";
import bcrypt from "bcrypt";
import db from "@/libs/db";
import { redirect } from "next/navigation";
import { createAccountFormSchema } from "@/libs/validation";

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  //const result = await formSchema.safeParseAsync(data);
  const result = await createAccountFormSchema.spa(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    redirect("/log-in");
  }
}
