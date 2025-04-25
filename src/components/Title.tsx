import { ReactNode } from 'react';

import styles from '../styles/Title.module.css';

interface Props {
  addDay: boolean;
  children?: ReactNode;
  isMain: boolean;
}

const Title = ({ addDay, children, isMain }: Props) => {
  let today = '';
  if (addDay) {
    const now = new Date();
    today = Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(now);
  }

  return (
    <div className={`${styles.title} ${isMain ? styles.mainTitle : ''}`}>
      {children}
      {today}
    </div>
  );
};

export default Title;
