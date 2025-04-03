import { ChangeEvent } from 'react';

import styles from '../styles/InputTextBox.module.css';

interface Props {
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: 'email' | 'password';
  value: string;
}

const InputTextBox = ({ name, onChange, placeholder, type, value }: Props) => {
  return (
    <input
      className={styles.inputTextBox}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export default InputTextBox;
