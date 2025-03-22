import { useEffect, useState } from 'react';

import './App.css';
import { Category } from './categories';
import CategoryPicker from './components/CategoryPicker';
import TaskList from './components/TaskList';
import Title from './components/Title';
import TopNav from './components/TopNav';
import { getCateogries, getTasks } from './data';
import { Task } from './tasks';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setTasks(getTasks());
    setCategories(getCateogries());
  }, []);

  return (
    <div className="App">
      <TopNav></TopNav>
      <Title></Title>
      <CategoryPicker categories={categories}></CategoryPicker>
      <TaskList categories={categories} tasks={tasks}></TaskList>
    </div>
  );
}

export default App;
