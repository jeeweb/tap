import db from "@/libs/db";
import { z } from "zod";

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user) === false;
};

const checkPasswords = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user);
};

export const createAccountFormSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string",
        required_error: "Please write your name or nickname.",
      })
      .min(2, "Too short!")
      .max(6, "Too long!"),
    //.refine(checkUniqueUsername, "This username is already taken"),
    email: z
      .string({
        required_error: "Please write your email.",
      })
      .email()
      .toLowerCase()
      .refine(
        checkUniqueEmail,
        "There is an account already registered with that email."
      ),
    password: z
      .string({
        required_error: "Please write your password.",
      })
      .min(5),
    // .regex(
    //   passwordRegex,
    //   "Passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-"
    // ),
    confirmPassword: z
      .string({
        required_error: "Please confirm your password.",
      })
      .trim()
      .min(5),
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
  });

export const loginFormSchema = z.object({
  email: z
    .string({
      required_error: "Please write your email.",
    })
    .email()
    .toLowerCase(),
  password: z
    .string({
      required_error: "Please write your password.",
    })
    .min(5),
  // .regex(
  //   passwordRegex,
  //   "Passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-"
  // ),
});
