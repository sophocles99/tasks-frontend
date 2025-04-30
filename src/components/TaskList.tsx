import { useEffect, useRef, useState } from 'react';

import { Category, CategoryColour, CategoryId } from '../categories';
import styles from '../styles/TaskList.module.css';
import { Task } from '../tasks';
import Subtitle from './Subtitle';
import TaskCard from './TaskCard';

interface Props {
  categories: Category[];
  selectedCategories: CategoryId[];
  tasks: Task[];
}

const MASK_MAX_HEIGHT: number = 16;

const TaskList = ({ categories, selectedCategories, tasks }: Props) => {
  const taskListRef = useRef<HTMLDivElement>(null);
  const [topMaskHeight, setTopMaskHeight] = useState(0);
  const [bottomMaskHeight, setBottomMaskHeight] = useState(MASK_MAX_HEIGHT);

  const tasksToDisplay: Task[] = selectedCategories.length
    ? tasks.filter((task) =>
        task.categoryIds.some((taskCategoryId) => selectedCategories.includes(taskCategoryId)),
      )
    : tasks;

  useEffect(() => {
    const taskListDiv = taskListRef.current;

    if (taskListDiv) {
      const handleScroll = () => {
        const maxScrollUp = taskListDiv.scrollHeight - taskListDiv.clientHeight;
        setTopMaskHeight(Math.min(MASK_MAX_HEIGHT, taskListDiv.scrollTop));
        setBottomMaskHeight(Math.min(MASK_MAX_HEIGHT, maxScrollUp - taskListDiv.scrollTop));
      };
      taskListDiv.addEventListener('scroll', handleScroll);

      return () => {
        taskListDiv.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <Subtitle>tasks</Subtitle>
      <div className={styles.taskListContainer}>
        <div className={styles.taskList} ref={taskListRef}>
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
        <div className={styles.taskListTopMask} style={{ height: `${topMaskHeight}px` }}></div>
        <div
          className={styles.taskListBottomMask}
          style={{ height: `${bottomMaskHeight}px` }}
        ></div>
      </div>
    </>
  );
};

export default TaskList;
