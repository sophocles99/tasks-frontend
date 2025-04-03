import { useEffect, useState } from 'react';

import { Category, CategoryId } from '../categories';
import CategoryPicker from '../components/CategoryPicker';
import MainTitle from '../components/MainTitle';
import TaskList from '../components/TaskList';
import TopNav from '../components/TopNav';
import { getCateogries, getTasks } from '../data';
import { Task } from '../tasks';

const Main = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<CategoryId[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(getTasks());
    setCategories(getCateogries());
  }, []);

  return (
    <>
      <TopNav />
      <MainTitle />
      <CategoryPicker
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      ></CategoryPicker>
      <TaskList
        categories={categories}
        selectedCategories={selectedCategories}
        tasks={tasks}
      ></TaskList>
    </>
  );
};

export default Main;
