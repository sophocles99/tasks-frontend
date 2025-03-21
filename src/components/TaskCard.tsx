import styles from '../styles/TaskCard.module.css'
import { Task } from "../tasks"

interface Props {
  task: Task
}

const TaskCard = ({task}: Props) => {
  return (
    <div className={styles.taskCard}>{task.name}</div>
  )
}

export default TaskCard