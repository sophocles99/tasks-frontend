import { Category, dummyCategories } from './categories';
import { TaskStatus, dummyTasks } from './tasks';

export const getTasks = () => {
  return dummyTasks;
};

export const getCategories = () => {
  const dummyCategoriesWithTaskData: Category[] = dummyCategories.map((category) => {
    const tasksInCategory = dummyTasks.filter((task) => task.categoryIds.includes(category.id));
    const tasksDoneInCategory = tasksInCategory.filter((task) => task.status == TaskStatus.Done);
    return {
      ...category,
      taskCount: tasksInCategory.length,
      taskDoneCount: tasksDoneInCategory.length,
      taskIds: tasksInCategory.map((task) => task.id),
    };
  });
  return dummyCategoriesWithTaskData;
};
