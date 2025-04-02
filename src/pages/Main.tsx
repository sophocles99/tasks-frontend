import { useEffect, useState } from 'react';

import { Category, CategoryId } from '../categories';
import CategoryPicker from '../components/CategoryPicker';
import TaskList from '../components/TaskList';
import Title from '../components/Title';
import TopNav from '../components/TopNav';
import { getCateogries, getTasks } from '../data';
import { Task } from '../tasks';

const Main = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<CategoryId[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const now = new Date();

  useEffect(() => {
    setTasks(getTasks());
    setCategories(getCateogries());
  }, []);

  return (
    <>
      <TopNav />
      <Title isMainPage={true}>
        {Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(now)}
      </Title>
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
