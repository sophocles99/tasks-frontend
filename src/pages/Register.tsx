import { FormEventHandler, useState } from 'react';

import { useNavigate } from 'react-router';

import registerUser from '../api/register-user';
import AuthForm from '../components/AuthForm';
import InputTextBox from '../components/InputTextBox';
import PrimaryButton from '../components/PrimaryButton';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import { useAuth } from '../hooks/use-auth';
import { useValidateRegistrationForm } from '../hooks/use-validate-registration-form';
import styles from '../styles/AuthForm.module.css';

const Register = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useAuth();
  const { validationErrorMessage, formState, handleFormDataChange, handleBlur, handleFocus } =
    useValidateRegistrationForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    setIsPending(true);
    const result = await registerUser(formState.email.value, formState.password.value);
    setIsPending(false);

    if (result.isSuccess) {
      setCurrentUser(result.user);
      navigate('/registration-success');
    } else {
      console.error('Registration failed:', result.errorMessage);
      setErrorMessage(result.errorMessage);
    }
  };

  return (
    <main className={styles.authFormPageContainer}>
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
        <PrimaryButton active={Object.values(formState).every((fieldState) => fieldState.isValid)}>
          {isPending ? 'signing up...' : 'sign up'}
        </PrimaryButton>
      </AuthForm>
      <Subtitle>{errorMessage || validationErrorMessage}</Subtitle>
    </main>
  );
};

export default Register;
