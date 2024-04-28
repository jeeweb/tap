import { useForm } from "react-hook-form";
import * as formStyles from "@/styles/form.css";

export function PostUploadForm() {
  return (
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
  );
}
