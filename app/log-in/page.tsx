"use client";
import { useForm } from "react-hook-form";
import { ILoginForm } from "@/types/User";
import Input from "@/app/_component/Input";
import { useFormState } from "react-dom";
import { login } from "./action";
import * as formStyles from "@/styles/form.css";
import Link from "next/link";

export default function Login() {
  const [state, dispatch] = useFormState(login, null);

  return (
    <div className={formStyles.formWrap}>
      <h2 className={formStyles.formTitle}>Login</h2>
      <form action={dispatch} className={formStyles.formBox}>
        <div className={formStyles.formRow}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            errors={state?.fieldErrors.email}
          />
        </div>
        <div className={formStyles.formRow}>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            className={formStyles.input}
            errors={state?.fieldErrors.password}
          />
        </div>
        <div className={`${formStyles.formRow} ${formStyles.formRowSubmit}`}>
          <button className={formStyles.button}>Login</button>
        </div>
      </form>
      <div>
        <p>Do you want to sign up?</p>
        <div>
          <Link href="/create-account" className={formStyles.link}>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
