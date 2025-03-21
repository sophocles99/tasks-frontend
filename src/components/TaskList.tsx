import { useState } from 'react';
import { Task, dummyTasks } from '../tasks';
import TaskCard from './TaskCard';

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}></TaskCard>
      ))}
    </div>
  );
};

export default TaskList;
