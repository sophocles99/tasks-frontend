import { useEffect, useState } from "react";
import { getTasks } from "../api";
import TaskCard from "./TaskCard";
import styles from "../styles/TaskList.module.css"

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const populateTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    populateTasks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className={styles["tasklist"]}>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;