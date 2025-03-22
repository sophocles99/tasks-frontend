import styles from '../styles/TaskCard.module.css';
import { Task, TaskStatus } from '../tasks';

interface Props {
  task: Task;
}

const statusIcons: Record<TaskStatus, string> = {
  [TaskStatus.NotStarted]: 'check_box_outline_blank',
  [TaskStatus.InProgress]: 'indeterminate_check_box',
  [TaskStatus.Done]: 'check_box',
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className={styles.taskCard}>
      <div className={styles.taskStatusContainer}>
        <span className={`material-symbols-outlined ${styles.icons}`}>
          {statusIcons[task.status]}
        </span>
      </div>
      {task.name}
    </div>
  );
};

export default TaskCard;
