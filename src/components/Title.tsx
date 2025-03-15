import styles from "../styles/Title.module.css";

const Title = () => {
  const now = new Date();
  return (
    <div className={styles.title}>
      {Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(now)}
    </div>
  );
};

export default Title;
