import styles from "../styles/TaskCard.module.css";
import StatusIcon from "./StatusIcon";

type TaskCardProps = {
    task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
    return (
        <section className={styles["task-card"]}>
            <StatusIcon status={task.status} />
            <p className={styles["title"]}>{task.title}</p>
        </section>
    );
};

export default TaskCard;
