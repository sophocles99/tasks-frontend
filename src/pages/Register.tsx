import { FormEventHandler, useState } from 'react';

import AuthForm from '../components/AuthForm';
import InputTextBox from '../components/InputTextBox';
import SubmitButton from '../components/SubmitButton';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import styles from '../styles/Register.module.css';

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
    <main className={styles.registerPageContainer}>
      <Title addDay={false} isMain={false}>
        Let's get organised!
      </Title>
      <Subtitle>sign up to get started</Subtitle>
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
    </main>
  );
};

export default RegisterPage;
