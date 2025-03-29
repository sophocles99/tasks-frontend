import styles from '../styles/TaskCard.module.css';
import { Task, TaskStatus } from '../tasks';

interface Props {
  categoryColour: number;
  task: Task;
}

const statusIcons: Record<TaskStatus, string> = {
  [TaskStatus.NotStarted]: 'check_box_outline_blank',
  [TaskStatus.InProgress]: 'indeterminate_check_box',
  [TaskStatus.Done]: 'check_box',
};

const TaskCard = ({ categoryColour, task }: Props) => {
  const cssCategoryColour = `#${categoryColour.toString(16).padStart(6, '0')}`;
  return (
    <div className={styles.taskCard}>
      <div className={styles.taskStatusContainer}>
        <span
          className={`material-symbols-outlined ${styles.taskStatusIcon}`}
          style={{ color: cssCategoryColour }}
        >
          {statusIcons[task.status]}
        </span>
      </div>
      <div className={styles.taskNameContainer}>
        <span className={styles.taskNameText}>{task.name}</span>
      </div>
    </div>
  );
};

export default TaskCard;
