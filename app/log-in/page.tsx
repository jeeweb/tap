"use client";
import { useForm } from "react-hook-form";
import { ILoginForm } from "@/types/User";
import * as formStyles from "@/styles/form.css";

export default function Login() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onValid = (data: ILoginForm) => {
    console.log(data);
  };
  console.log(watch());

  return (
    <div className={formStyles.formWrap}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onValid)} className={formStyles.formBox}>
        <div className={formStyles.formRow}>
          <div className={formStyles.inputBox}>
            <input
              type="email"
              placeholder="Email"
              className={formStyles.input}
              {...register("email", {
                required: "Please write your email.",
              })}
            />
          </div>
          {errors.email && (
            <span className={formStyles.formError}>{errors.email.message}</span>
          )}
        </div>
        <div className={formStyles.formRow}>
          <div className={formStyles.inputBox}>
            <input
              type="password"
              placeholder="Password"
              className={formStyles.input}
              {...register("password", {
                required: "Please write your password.",
              })}
            />
          </div>
          {errors.password && (
            <span className={formStyles.formError}>
              {errors.password.message}
            </span>
          )}
        </div>
        <div className={`${formStyles.formRow} ${formStyles.formRowSubmit}`}>
          <button className={formStyles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}
