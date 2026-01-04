import styles from '../styles/AddTaskButton.module.css';

interface Props {
  onClick?: () => void;
}

const AddTaskButton = ({ onClick }: Props) => {
  return (
    <div className={styles.addTaskButtonContainer}>
      <button className={styles.addTaskButton} onClick={onClick}>
        +
      </button>
    </div>
  );
};
export default AddTaskButton;
