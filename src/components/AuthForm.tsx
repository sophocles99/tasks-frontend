import { FormEventHandler, ReactNode } from 'react';

import styles from '../styles/AuthForm.module.css';

interface Props {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const AuthForm = ({ children, onSubmit }: Props) => {
  return (
    <form className={styles.authForm} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default AuthForm;
