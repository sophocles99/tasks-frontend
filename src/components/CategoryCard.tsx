import styles from "../styles/CategoryCard.module.css";
import { CategoryName, categoryNames } from "../categories";
import { capitaliseFirstLetter } from "../utils";

interface Props {
  categoryName: CategoryName;
  categoryTaskCount: number;
  categoryTaskCompletedCount: number;
}

const CategoryCard = ({ categoryName, categoryTaskCount, categoryTaskCompletedCount }: Props) => {
  const calculateProgressPercentage = () => {
    if (categoryTaskCount === 0) return 0;
    const percentage = (categoryTaskCompletedCount / categoryTaskCount) * 100;
    return Math.min(percentage, 100);
  };
  const progressPercentage = calculateProgressPercentage();
  const progressBarIndicatorColour = categoryNames[categoryName] ?? "var(--surface-secondary";

  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryTaskCount}>{`${categoryTaskCount} task${
        categoryTaskCount !== 1 ? "s" : ""
      }`}</div>
      <div className={styles.categoryName}>{capitaliseFirstLetter(categoryName)}</div>
      <div className={styles.categoryProgressBarBackground}>
        <div
          className={styles.categoryProgressBarIndicator}
          style={{ width: `${progressPercentage}%`, backgroundColor: progressBarIndicatorColour }}
        ></div>
      </div>
    </div>
  );
};

export default CategoryCard;
