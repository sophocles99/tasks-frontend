import { useEffect, useState } from "react";
import { getTasks, patchTask } from "../api";
import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import styles from "../styles/Home.module.css";
import dateToday from "../utils/date-today";

const Home = () => {
    const [tasks, setTasks] = useState<FullTask[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        const populateTasks = async () => {
            try {
                const data = await getTasks();
                setTasks(data);
                setErrorMessage(null);
            } catch (error) {
                setErrorMessage(
                    "Unable to load tasks. Please check your internet connection."
                );
            } finally {
                setLoading(false);
            }
        };
        populateTasks();
    }, []);

    const handleStatusChange = async (id: string, newStatus: Status) => {
        const oldTasks = [...tasks];
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, status: newStatus } : task
            )
        );
        try {
            await patchTask(id, { status: newStatus });
            setErrorMessage(null);
        } catch (error) {
            setTasks(oldTasks);
            setErrorMessage(
                "Unable to update task. Please check your internet connection."
            );
        }
    };

    return (
        <>
            <header className={styles["header"]}>
                <p className={styles["date"]}>{dateToday()}</p>
                <h1 className={styles["title"]}>Tasks</h1>
            </header>
            <main className={styles["main"]}>
                {loading && (
                    <section className={styles["message"]}>
                        <p>Loading...</p>
                    </section>
                )}
                {errorMessage && (
                    <section className={styles["error-message"]}>
                        <p>{errorMessage}</p>
                    </section>
                )}
                <TaskList tasks={tasks} onStatusChange={handleStatusChange} />
            </main>
            <footer className={styles["footer"]}>
                <AddTaskButton />
            </footer>
        </>
    );
};

export default Home;
