import { Category } from '../categories';
import styles from '../styles/TaskList.module.css';
import { Task } from '../tasks';
import TaskCard from './TaskCard';

interface Props {
  categories: Category[];
  tasks: Task[];
}

const DEFAULT_CATEGORY_COLOUR = 0xffffff;

const TaskList = ({ categories, tasks }: Props) => {
  return (
    <>
      <div className={styles.taskListTitle}>tasks</div>
      <div className={styles.taskList}>
        {tasks.map((task) => {
          const categoryColour =
            categories.find((category) => category.id == task.categoryIds[0])?.colour ??
            DEFAULT_CATEGORY_COLOUR;
          return <TaskCard categoryColour={categoryColour} key={task.id} task={task}></TaskCard>;
        })}
      </div>
    </>
  );
};

export default TaskList;
