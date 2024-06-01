import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";
import dateToday from "../utils/date-today";
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <header className={styles["header"]}>
        <p className={styles["date"]}>{dateToday()}</p>
        <h1 className={styles["title"]}>Tasks</h1>
      </header>
      <main className={styles["main"]}>
        <TaskList />
      </main>
      <footer className={styles["footer"]}>
        <button className={styles["add-task-button"]}>
          <Link to="/addtask">add task</Link>
        </button>
      </footer>
    </div>
  );
};

export default Home;
