import { ReactNode } from 'react';

import styles from '../styles/SubmitButton.module.css';

interface Props {
  active: boolean;
  children: ReactNode;
}

const SubmitButton = ({ active, children }: Props) => {
  return (
    <button
      className={`${styles.submitButton} ${active ? '' : styles.inactive}`}
      disabled={!active}
      type="submit"
    >
      {children}
    </button>
  );
};

export default SubmitButton;
