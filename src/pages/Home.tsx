import { Link } from "react-router-dom";
import TodoList from "../components/TodoList";
import dateToday from "../utils/date-today";
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <>
      <header className={styles["header"]}>
        <p className={styles["date"]}>{dateToday()}</p>
        <h1 className={styles["title"]}>To-Do List</h1>
      </header>
      <main className={styles["main"]}>
        <section className={styles["todolist-container"]}>
          <TodoList />
        </section>
        <section>
          <button>
            <Link to="/addtodo">Add Todo</Link>
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
