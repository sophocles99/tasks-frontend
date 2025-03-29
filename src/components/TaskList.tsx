import { Category, CategoryId } from '../categories';
import styles from '../styles/TaskList.module.css';
import { Task } from '../tasks';
import TaskCard from './TaskCard';

interface Props {
  categories: Category[];
  selectedCategories: CategoryId[];
  tasks: Task[];
}

const DEFAULT_CATEGORY_COLOUR = 0xffffff;

const TaskList = ({ categories, selectedCategories, tasks }: Props) => {
  const tasksToDisplay: Task[] = selectedCategories.length
    ? tasks.filter((task) =>
        task.categoryIds.some((taskCategoryId) => selectedCategories.includes(taskCategoryId)),
      )
    : tasks;

  return (
    <>
      <div className={styles.taskListTitle}>tasks</div>
      <div className={styles.taskList}>
        {tasksToDisplay.map((task) => {
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
