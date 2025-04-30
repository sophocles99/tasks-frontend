import { ReactNode } from 'react';

import styles from '../styles/Subtitle.module.css';

interface Props {
  children: ReactNode;
}

const Subtitle = ({ children }: Props) => {
  return <div className={`${styles.subtitle}`}>{children}</div>;
};

export default Subtitle;
