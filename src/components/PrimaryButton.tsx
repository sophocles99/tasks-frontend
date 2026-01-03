import { ReactNode } from 'react';

import styles from '../styles/PrimaryButton.module.css';

interface Props {
  active: boolean;
  children: ReactNode;
  indicatorBarPercentageWidth?: number;
}

const PrimaryButton = ({ active, children, indicatorBarPercentageWidth }: Props) => {
  return (
    <>
      <button
        className={`${styles.primaryButton} ${active ? '' : styles.inactive}`}
        disabled={!active}
        type="submit"
      >
        {children}
        <div
          className={indicatorBarPercentageWidth ? styles.indicatorBar : ''}
          style={indicatorBarPercentageWidth ? { width: `${indicatorBarPercentageWidth}%` } : {}}
        ></div>
      </button>
    </>
  );
};

export default PrimaryButton;
