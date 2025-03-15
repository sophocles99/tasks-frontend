import { useEffect, useRef, useState } from "react";
import styles from "../styles/CategoryPicker.module.css";
import CategoryCard from "./CategoryCard";
import { defaultCategories } from "../categories.ts";

const maxMaskWidth: number = 16;

const CategoryPicker = () => {
  const pickerListRef = useRef<HTMLDivElement>(null);
  const [leftMaskWidth, setLeftMaskWidth] = useState(0);
  const [rightMaskWidth, setRightMaskWidth] = useState(maxMaskWidth);

  useEffect(() => {
    const pickerListDiv = pickerListRef.current;

    if (pickerListDiv) {
      const maxScrollLeft = pickerListDiv.scrollWidth - pickerListDiv.clientWidth;
      const handleScroll = () => {
        setLeftMaskWidth(Math.min(maxMaskWidth, pickerListDiv.scrollLeft));
        setRightMaskWidth(Math.min(maxMaskWidth, maxScrollLeft - pickerListDiv.scrollLeft));
      };
      pickerListDiv.addEventListener("scroll", handleScroll);

      return () => {
        pickerListDiv.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className={styles.categoryPickerTitle}>categories</div>
      <div className={styles.categoryPickerListContainer}>
        <div className={styles.categoryPickerList} ref={pickerListRef}>
          {defaultCategories.map((category) => (
            <CategoryCard
              categoryName={category.categoryName}
              categoryTaskCount={category.categoryTaskCount}
              categoryTaskCompletedCount={category.categoryTaskCompletedCount}
              key={category.categoryName}
            ></CategoryCard>
          ))}
        </div>
        <div
          className={styles.categoryPickerListLeftMask}
          style={{ width: `${leftMaskWidth}px` }}
        ></div>
        <div
          className={styles.categoryPickerListRightMask}
          style={{ width: `${rightMaskWidth}px` }}
        ></div>
      </div>
    </>
  );
};

export default CategoryPicker;
