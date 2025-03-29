import { Category, CategoryId } from '../categories';
import styles from '../styles/CategoryCard.module.css';
import { capitaliseFirstLetter } from '../utils';

interface Props {
  category: Category;
  isSelected: boolean;
  toggleSelected: (categoryIdToToggle: CategoryId) => void;
}

const CategoryCard = ({
  category: { id, name, colour, taskCount, taskDoneCount },
  isSelected,
  toggleSelected,
}: Props) => {
  const calculateProgressPercentage = () => {
    if (taskCount === 0) return 0;
    const percentage = (taskDoneCount / taskCount) * 100;
    return Math.min(percentage, 100);
  };
  const progressPercentage = calculateProgressPercentage();
  const progressBarIndicatorColour = `#${colour.toString(16).padStart(6, '0')}`;

  return (
    <div
      className={`${styles.categoryCard} ${isSelected ? styles.categorySelected : ''}`}
      onClick={() => toggleSelected(id)}
    >
      <div className={styles.categoryTaskCount}>{`${taskCount} task${
        taskCount !== 1 ? 's' : ''
      }`}</div>
      <div className={styles.categoryName}>{capitaliseFirstLetter(name)}</div>
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
