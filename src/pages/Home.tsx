import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import styles from "../styles/Home.module.css";
import dateToday from "../utils/date-today";

const Home = () => {
    return (
        <>
            <header className={styles["header"]}>
                <p className={styles["date"]}>{dateToday()}</p>
                <h1 className={styles["title"]}>Tasks</h1>
            </header>
            <main className={styles["main"]}>
                <TaskList />
            </main>
            <footer className={styles["footer"]}>
                <AddTaskButton />
            </footer>
        </>
    );
};

export default Home;
