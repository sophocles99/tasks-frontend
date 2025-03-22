import { v4 as uuidv4 } from 'uuid';
import { CategoryId, dummyCategories } from './categories';
import rawTaskData from './raw-task-data.json';

export enum TaskStatus {
  NotStarted = 'not_started',
  InProgress = 'in_progress',
  Done = 'done',
}

export type TaskId = string;

export interface Task {
  id: TaskId;
  name: string;
  description: string;
  due_date: Date;
  status: TaskStatus;
  categoryIds: CategoryId[];
}

const createRandomDate = () => {
  const newDate = new Date();
  const offset = Math.floor(Math.random() * 7) + 1;
  newDate.setDate(newDate.getDate() + offset);
  return newDate;
};

const createRandomStatus = () => {
  const statusValues = Object.values(TaskStatus);
  const statusIndex = Math.floor(Math.random() * 3);
  return statusValues[statusIndex];
};

export const dummyTasks: Task[] = rawTaskData.map((rawTask) => ({
  id: uuidv4(),
  name: rawTask.name,
  description: rawTask.description,
  due_date: createRandomDate(),
  status: createRandomStatus(),
  categoryIds: dummyCategories
    .filter((category) => rawTask.categories.includes(category.name))
    .map((category) => category.id),
}));
