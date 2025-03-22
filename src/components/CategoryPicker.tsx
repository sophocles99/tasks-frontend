import { useEffect, useRef, useState } from 'react';
import { Category } from '../categories.ts';
import styles from '../styles/CategoryPicker.module.css';
import CategoryCard from './CategoryCard';

interface Props {
  categories: Category[];
}

const MASK_MAX_WIDTH: number = 16;

const CategoryPicker = ({ categories }: Props) => {
  const pickerListRef = useRef<HTMLDivElement>(null);
  const [leftMaskWidth, setLeftMaskWidth] = useState(0);
  const [rightMaskWidth, setRightMaskWidth] = useState(MASK_MAX_WIDTH);

  useEffect(() => {
    const pickerListDiv = pickerListRef.current;

    if (pickerListDiv) {
      const maxScrollLeft =
        pickerListDiv.scrollWidth - pickerListDiv.clientWidth;
      const handleScroll = () => {
        setLeftMaskWidth(Math.min(MASK_MAX_WIDTH, pickerListDiv.scrollLeft));
        setRightMaskWidth(
          Math.min(MASK_MAX_WIDTH, maxScrollLeft - pickerListDiv.scrollLeft),
        );
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
            <CategoryCard key={category.id} category={category}></CategoryCard>
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
