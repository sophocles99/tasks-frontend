import { FormEventHandler } from 'react';

import AuthForm from '../components/AuthForm';
import InputTextBox from '../components/InputTextBox';
import SubmitButton from '../components/SubmitButton';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import { useFormValidation } from '../hooks/useFormValidation';
import styles from '../styles/Register.module.css';

const formFieldOrder: FormField[] = ['email', 'password', 'confirmPassword'];

const RegisterPage = () => {
  const { displayErrorMesssage, formState, handleFormDataChange, handleBlur, handleFocus } =
    useFormValidation(formFieldOrder);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  console.log(JSON.stringify(formState, null, 2));

  return (
    <main className={styles.registerPageContainer}>
      <Title addDay={false} isMain={false}>
        Let's get organised!
      </Title>
      <Subtitle>sign up to get started</Subtitle>
      <AuthForm onSubmit={handleSubmit}>
        <InputTextBox
          blurHandler={handleBlur}
          changeHandler={handleFormDataChange}
          focusHandler={handleFocus}
          name="email"
          placeholder="Email"
          type="email"
          value={formState.email.value}
        />
        <InputTextBox
          blurHandler={handleBlur}
          changeHandler={handleFormDataChange}
          focusHandler={handleFocus}
          name="password"
          placeholder="Password"
          type="password"
          value={formState.password.value}
        />
        <InputTextBox
          blurHandler={handleBlur}
          changeHandler={handleFormDataChange}
          focusHandler={handleFocus}
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
          value={formState.confirmPassword.value}
        />
        <SubmitButton active={Object.values(formState).every((fieldState) => fieldState.isValid)}>
          sign up
        </SubmitButton>
      </AuthForm>
      <Subtitle>{displayErrorMesssage}</Subtitle>
    </main>
  );
};

export default RegisterPage;
