import { useEffect, useRef, useState } from 'react';

import { Category, CategoryId } from '../categories.ts';
import styles from '../styles/CategoryPicker.module.css';
import CategoryCard from './CategoryCard';

interface Props {
  categories: Category[];
  selectedCategories: CategoryId[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<CategoryId[]>>;
}

const MASK_MAX_WIDTH: number = 16;

const CategoryPicker = ({ categories, selectedCategories, setSelectedCategories }: Props) => {
  const pickerListRef = useRef<HTMLDivElement>(null);
  const [leftMaskWidth, setLeftMaskWidth] = useState(0);
  const [rightMaskWidth, setRightMaskWidth] = useState(MASK_MAX_WIDTH);
  const toggleSelected = (categoryIdToToggle: CategoryId) => {
    setSelectedCategories((previousSelectedCategories: CategoryId[]) =>
      previousSelectedCategories.includes(categoryIdToToggle)
        ? previousSelectedCategories.filter((categoryId) => categoryId !== categoryIdToToggle)
        : [...previousSelectedCategories, categoryIdToToggle],
    );
  };

  useEffect(() => {
    const pickerListDiv = pickerListRef.current;

    if (pickerListDiv) {
      const handleScroll = () => {
        const maxScrollLeft = pickerListDiv.scrollWidth - pickerListDiv.clientWidth;
        setLeftMaskWidth(Math.min(MASK_MAX_WIDTH, pickerListDiv.scrollLeft));
        setRightMaskWidth(Math.min(MASK_MAX_WIDTH, maxScrollLeft - pickerListDiv.scrollLeft));
      };
      pickerListDiv.addEventListener('scroll', handleScroll);

      return () => {
        pickerListDiv.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className={styles.categoryPickerTitle}>categories</div>
      <div className={styles.categoryPickerListContainer}>
        <div className={styles.categoryPickerList} ref={pickerListRef}>
          {categories.map((category: Category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isSelected={selectedCategories.includes(category.id)}
              toggleSelected={toggleSelected}
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
