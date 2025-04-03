import { ReactNode } from 'react';

import styles from '../styles/AuthTitle.module.css';
import shared_styles from '../styles/shared_styles.module.css';

interface Props {
  children: ReactNode;
}

const AuthTitle = ({ children }: Props) => {
  return (
    <div className={`${styles.authTitle} ${shared_styles.title}`}>
      {children}
    </div>
  );
};

export default AuthTitle;
