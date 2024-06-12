import styles from "../styles/TaskCard.module.css";
import StatusIcon from "./StatusIcon";

type TaskCardProps = {
    task: Task;
    onStatusChange: (id: string, newStatus: Status) => void;
};

const TaskCard = ({ task, onStatusChange }: TaskCardProps) => {
    const { id, title, status } = task;

    const handleStatusClick = () => {
        let newStatus: Status;
        switch (status) {
            case "not done":
                newStatus = "in progress";
                break;
            case "in progress":
                newStatus = "done";
                break;
            case "done":
                newStatus = "not done";
                break;
            default:
                newStatus = "not done";
        }
        onStatusChange(id, newStatus);
    };

    return (
        <section className={styles["task-card"]}>
            <div
                className={styles["status-icon-container"]}
                onClick={handleStatusClick}
            >
                <StatusIcon status={status} />
            </div>
            <p className={styles["title"]}>{title}</p>
        </section>
    );
};

export default TaskCard;
