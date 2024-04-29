"use client";
import Input from "@/app/_component/Input";
import { useFormState } from "react-dom";
import { createAccount } from "./action";
import * as formStyles from "@/styles/form.css";
import Link from "next/link";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <div className={formStyles.formWrap}>
      <h2 className={formStyles.formTitle}>Create Account</h2>
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
            type="text"
            name="username"
            placeholder="Name or Nickname"
            className={formStyles.input}
            required
            errors={state?.fieldErrors.username}
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
        <div className={formStyles.formRow}>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            errors={state?.fieldErrors.confirmPassword}
          />
        </div>
        <div className={`${formStyles.formRow} ${formStyles.formRowSubmit}`}>
          <button className={formStyles.button}>Create</button>
        </div>
      </form>
      <div>
        <p>Do you have already account?</p>
        <div>
          <Link href="/log-in" className={formStyles.link}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
