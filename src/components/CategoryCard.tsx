import { Category } from '../categories';
import styles from '../styles/CategoryCard.module.css';
import { capitaliseFirstLetter } from '../utils';

interface Props {
  category: Category;
}

const CategoryCard = ({ category: {name, colour, taskCount, taskDoneCount}}: Props) => {
  const calculateProgressPercentage = () => {
    if (taskCount === 0) return 0;
    const percentage = (taskDoneCount / taskCount) * 100;
    return Math.min(percentage, 100);
  };
  const progressPercentage = calculateProgressPercentage();
  const progressBarIndicatorColour = `#${colour.toString(16).padStart(6, "0")}`

  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryTaskCount}>{`${taskCount} task${
        taskCount !== 1 ? 's' : ''
      }`}</div>
      <div className={styles.categoryName}>
        {capitaliseFirstLetter(name)}
      </div>
      <div className={styles.categoryProgressBarBackground}>
        <div
          className={styles.categoryProgressBarIndicator}
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: progressBarIndicatorColour,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CategoryCard;
