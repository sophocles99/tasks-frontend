import { ReactNode } from 'react';

import styles from '../styles/SubmitButton.module.css';

interface Props {
  children: ReactNode;
}

const SubmitButton = ({ children }: Props) => {
  return (
    <button className={styles.submitButton} type="submit">
      {children}
    </button>
  );
};

export default SubmitButton;
