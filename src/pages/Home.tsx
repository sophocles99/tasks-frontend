import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
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
          <TodoList />
      </main>
      <footer className={styles["footer"]}>
        <button className={styles["add-task-button"]}>
          <Link to="/addtodo">add task</Link>
        </button>
      </footer>
    </div>
  );
};

export default Home;
