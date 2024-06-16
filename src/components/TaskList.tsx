import styles from "../styles/TaskList.module.css";
import TaskCard from "./TaskCard";

interface Props {
    tasks: FullTask[];
    onStatusChange: (id: string, newStatus: Status) => void;
}

const TaskList = ({ tasks, onStatusChange }: Props) => {
    return (
        <>
            <section className={styles["task-list"]}>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <TaskCard
                                task={task}
                                onStatusChange={onStatusChange}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default TaskList;
