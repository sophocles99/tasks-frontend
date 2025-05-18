import { ChangeEvent, FocusEventHandler, FormEventHandler, useState } from 'react';

import AuthForm from '../components/AuthForm';
import InputTextBox from '../components/InputTextBox';
import SubmitButton from '../components/SubmitButton';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import styles from '../styles/Register.module.css';
import { isValidEmail, passwordChecks } from '../utils';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

type ValidationResult = { isValid: true } | { isValid: false; errorMessage: string };
type Validator = (value: string) => ValidationResult;

const RegisterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newFormData: FormData = { ...formData, [name]: value };
    setFormData(newFormData);
    setIsFormValid(
      (Object.keys(validators) as Array<keyof FormData>).every(
        (validator) => validators[validator](newFormData[validator]).isValid,
      ),
    );
  };

  const validators: Record<keyof FormData, Validator> = {
    email: (value) =>
      isValidEmail(value)
        ? { isValid: true }
        : { isValid: false, errorMessage: 'please enter a valid email address' },
    password: (value) => {
      const failedCheck = passwordChecks.find((check) => !check.regex.test(value));
      return failedCheck
        ? { isValid: false, errorMessage: failedCheck.errorMessage }
        : { isValid: true };
    },
    confirmPassword: (value) =>
      value === formData.password
        ? { isValid: true }
        : { isValid: false, errorMessage: 'passwords do not match' },
  };

  const blurHandler: FocusEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    const keyName = name as keyof FormData;
    const validationResult = validators[keyName](value);
    if (!validationResult.isValid) {
      setErrorMessage(validationResult.errorMessage);
    } else setErrorMessage('');
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <main className={styles.registerPageContainer}>
      <Title addDay={false} isMain={false}>
        Let's get organised!
      </Title>
      <Subtitle>sign up to get started</Subtitle>
      <AuthForm onSubmit={handleSubmit}>
        <InputTextBox
          blurHandler={blurHandler}
          changeHandler={handleFormDataChange}
          focusHandler={() => setErrorMessage('')}
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
        />
        <InputTextBox
          blurHandler={blurHandler}
          changeHandler={handleFormDataChange}
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
        />
        <InputTextBox
          blurHandler={blurHandler}
          changeHandler={handleFormDataChange}
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
          value={formData.confirmPassword}
        />
        <SubmitButton active={isFormValid}>sign up</SubmitButton>
      </AuthForm>
      <Subtitle>{errorMessage}</Subtitle>
    </main>
  );
};

export default RegisterPage;
