import { v4 as uuidv4 } from 'uuid';
import { TaskId } from './tasks';

enum DefaultCategory {
  FINANCIAL = 'financial',
  HEALTH = 'health',
  HOME = 'home',
  PERSONAL = 'personal',
  WORK = 'work',
}

const DEFAULT_COLOURS: Record<DefaultCategory, number> = {
  [DefaultCategory.FINANCIAL]: 0x66bb6a,
  [DefaultCategory.HEALTH]: 0x03a9f4,
  [DefaultCategory.HOME]: 0xff9800,
  [DefaultCategory.PERSONAL]: 0xffeb3b,
  [DefaultCategory.WORK]: 0xec05ff,
};

export type CategoryId = string;

export type CategoryColour = number | undefined

export interface CategoryBase {
  id: CategoryId;
  name: string;
  colour: CategoryColour;
  taskIds: TaskId[];
}

export interface Category extends CategoryBase {
  taskCount: number;
  taskDoneCount: number;
}

export const dummyCategories: CategoryBase[] = Object.values(DefaultCategory).map(
  (categoryName) => ({
    id: uuidv4(),
    name: categoryName,
    colour: DEFAULT_COLOURS[categoryName],
    taskIds: [],
  }),
);
