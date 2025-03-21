import { v4 as uuidv4 } from 'uuid';
import { CategoryId, defaultCategories } from './categories';
import rawTaskData from './raw-task-data.json';

export type Status = 'not_started' | 'in_progress' | 'done';

export interface Task {
  id: string;
  name: string;
  description: string;
  due_date: Date;
  status: Status;
  categoryIds: CategoryId[];
}

const createRandomDate = () => {
  const newDate = new Date();
  const offset = Math.floor(Math.random() * 7) + 1;
  newDate.setDate(newDate.getDate() + offset);
  return newDate;
};

export const dummyTasks: Task[] = rawTaskData.map((rawTask) => ({
  id: uuidv4(),
  name: rawTask.name,
  description: rawTask.description,
  due_date: createRandomDate(),
  status: 'not_started',
  categoryIds: defaultCategories
    .filter((category) => rawTask.categories.includes(category.categoryName))
    .map((category) => category.categoryId),
}));

console.log(dummyTasks);
