import { useEffect, useState } from 'react';

import './App.css';
import { Category, CategoryId } from './categories';
import CategoryPicker from './components/CategoryPicker';
import TaskList from './components/TaskList';
import Title from './components/Title';
import TopNav from './components/TopNav';
import { getCateogries, getTasks } from './data';
import { Task } from './tasks';

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<CategoryId[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(getTasks());
    setCategories(getCateogries());
  }, []);

  return (
    <div className="App">
      <TopNav />
      <Title />
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
    </div>
  );
}

export default App;
