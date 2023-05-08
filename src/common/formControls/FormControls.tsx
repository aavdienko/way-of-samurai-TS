import { FC } from 'react';
import styles from './FormControls.module.css';

type FormControlsPropsType = {
  input: any;
  meta: any;
};

export const TextArea: FC<FormControlsPropsType> = ({ input, meta, ...props }) => {
  const showError = meta.error && meta.touched;

  return (
    <div
      className={
        showError
          ? styles.formControls + ' ' + styles.error
          : styles.formControls
      }
    >
      <div>
        <textarea {...input} {...props} />
      </div>
      {showError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input: FC<FormControlsPropsType> = ({ input, meta, ...props }) => {
  const showError = meta.error && meta.touched;

  return (
    <div
      className={
        showError
          ? styles.formControls + ' ' + styles.error
          : styles.formControls
      }
    >
      <div>
        <input {...input} {...props} />
      </div>
      {showError && <span>{meta.error}</span>}
    </div>
  );
};
