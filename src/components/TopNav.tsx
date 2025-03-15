import styles from "../styles/TopNav.module.css";

const TopNav = () => {
  return (
    <div className={styles.topNav}>
      <span className={`material-symbols-outlined ${styles.icons}`}>menu</span>
      <span className={`material-symbols-outlined ${styles.icons}`}>search</span>
    </div>
  );
};

export default TopNav;
