import { Category, CategoryColour, CategoryId } from '../categories';
import styles from '../styles/TaskList.module.css';
import { Task } from '../tasks';
import TaskCard from './TaskCard';

interface Props {
  categories: Category[];
  selectedCategories: CategoryId[];
  tasks: Task[];
}

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
          {
            /* Currently uses colour of first category in task.CateogryIds. Consider creating a primaryCategoryId field */
          }
          const primaryCategoryId = task.categoryIds[0];
          const categoryColour: CategoryColour = primaryCategoryId
            ? categories.find((category) => category.id === primaryCategoryId)?.colour
            : undefined;
          return <TaskCard categoryColour={categoryColour} key={task.id} task={task}></TaskCard>;
        })}
      </div>
    </>
  );
};

export default TaskList;
