import { ReactNode } from 'react';

import styles from '../styles/Title.module.css';

interface Props {
  children: ReactNode;
  isMainPage: boolean;
}

const Title = ({ children, isMainPage }: Props) => {
  return (
    <div className={`${styles.title} ${isMainPage ? styles.mainPageTitle : ''}`}>{children}</div>
  );
};

export default Title;
