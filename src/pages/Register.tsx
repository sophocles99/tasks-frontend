import { FormEventHandler, useState } from 'react';

import AuthForm from '../components/AuthForm';
import AuthTitle from '../components/AuthTitle';
import InputTextBox from '../components/InputTextBox';
import shared_styles from '../styles/shared_styles.module.css';
import SubmitButton from '../components/SubmitButton';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleFormDataChange = <T extends keyof FormData>(name: T, value: FormData[T]) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <AuthTitle>Let's get organised!</AuthTitle>
      <div
        className={`${shared_styles.secondaryText}`}
        style={{ alignItems: 'center', height: '7.75rem' }}
      >
        sign up to get started
      </div>
      <AuthForm onSubmit={handleSubmit}>
        <InputTextBox
          name="email"
          onChange={(event) => handleFormDataChange('email', event.target.value)}
          placeholder="Email"
          type="email"
          value={formData.email}
        />
        <InputTextBox
          name="password"
          onChange={(event) => handleFormDataChange('password', event.target.value)}
          placeholder="Password"
          type="password"
          value={formData.password}
        />
        <InputTextBox
          name="confirmPassword"
          onChange={(event) => handleFormDataChange('confirmPassword', event.target.value)}
          placeholder="Confirm password"
          type="password"
          value={formData.confirmPassword}
        />
        <SubmitButton>sign up</SubmitButton>
      </AuthForm>
    </>
  );
};

export default RegisterPage;
