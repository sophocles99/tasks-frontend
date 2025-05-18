import { ChangeEventHandler, FocusEventHandler } from 'react';

import styles from '../styles/InputTextBox.module.css';

interface Props {
  name: string;
  blurHandler?: FocusEventHandler<HTMLInputElement>;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  focusHandler?: FocusEventHandler<HTMLInputElement>;
  placeholder: string;
  type: 'email' | 'password';
  value: string;
}

const InputTextBox = ({ name, blurHandler, changeHandler, focusHandler, placeholder, type, value }: Props) => {
  return (
    <input
      className={styles.inputTextBox}
      name={name}
      onBlur={blurHandler}
      onChange={changeHandler}
      onFocus={focusHandler}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
};

export default InputTextBox;
