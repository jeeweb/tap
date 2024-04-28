import { InputHTMLAttributes } from "react";
import * as formStyles from "@/styles/form.css";

interface InputProps {
  name: string;
  errors: string[] | undefined;
}

export default function Input({
  name,
  errors,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <div className={formStyles.inputBox}>
        <input name={name} {...rest} className={formStyles.input} />
      </div>
      {errors?.map((error, idx) => (
        <p key={idx} className={formStyles.formError}>
          {error}
        </p>
      ))}
    </>
  );
}
