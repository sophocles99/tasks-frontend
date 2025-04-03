import styles from '../styles/MainTitle.module.css';
import shared_styles from '../styles/shared_styles.module.css';

const now = new Date();

const MainTitle = () => {
  return (
    <div className={`${styles.mainTitle} ${shared_styles.title}`}>
      {Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(now)}
    </div>
  );
};

export default MainTitle;
