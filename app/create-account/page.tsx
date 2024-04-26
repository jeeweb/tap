"use client";
import { useForm } from "react-hook-form";
import { ICreateAccountForm } from "@/types/User";
import * as formStyles from "@/styles/form.css";

export default function CreateAccount() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAccountForm>();

  const onValid = (data: ICreateAccountForm) => {
    console.log(data);
  };
  console.log(watch());

  return (
    <div className={formStyles.formWrap}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit(onValid)} className={formStyles.formBox}>
        <div className={formStyles.formRow}>
          <div className={formStyles.inputBox}>
            <input
              type="text"
              placeholder="name"
              className={formStyles.input}
              {...register("username", {
                required: "Please write your name",
              })}
            />
          </div>
          {errors.username && (
            <span className={formStyles.formError}>
              {errors.username.message}
            </span>
          )}
        </div>
        <div className={formStyles.formRow}>
          <div className={formStyles.inputBox}>
            <input
              type="email"
              placeholder="email"
              className={formStyles.input}
              {...register("email", {
                required: "Please write your email",
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
              placeholder="password"
              className={formStyles.input}
              {...register("password", {
                required: "Please write your password",
              })}
            />
          </div>
          {errors.password && (
            <span className={formStyles.formError}>
              {errors.password.message}
            </span>
          )}
        </div>
        <div className={formStyles.formRow}>
          <div className={formStyles.inputBox}>
            <input
              type="password"
              placeholder="confirm password"
              className={formStyles.input}
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
            />
          </div>
          {errors.confirmPassword && (
            <span className={formStyles.formError}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className={`${formStyles.formRow} ${formStyles.formRowSubmit}`}>
          <button className={formStyles.button}>Create</button>
        </div>
      </form>
    </div>
  );
}
