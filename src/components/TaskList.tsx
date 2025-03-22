import styles from '../styles/TaskList.module.css';
import { Task } from '../tasks';
import TaskCard from './TaskCard';

interface Props {
  tasks: Task[]
}

const TaskList = ({tasks}:Props) => {
  const tasksFiltered = tasks.filter((_, index) => index < 7);

  return (
    <>
      <div className={styles.taskListTitle}>tasks</div>
      <div className={styles.taskList}>
        {tasksFiltered.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </>
  );
};

export default TaskList;
