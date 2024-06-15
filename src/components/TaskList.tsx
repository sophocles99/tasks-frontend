import { useEffect, useState } from "react";
import { getTasks, patchTask } from "../api";
import styles from "../styles/TaskList.module.css";
import TaskCard from "./TaskCard";

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
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

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            {errorMessage && (
                <section className={styles["error-message"]}>
                    <p>{errorMessage}</p>
                </section>
            )}
            <section className={styles["task-list"]}>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <TaskCard
                                task={task}
                                onStatusChange={handleStatusChange}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default TaskList;
