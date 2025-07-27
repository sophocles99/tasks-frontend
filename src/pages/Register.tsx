import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router';
import registerUser from '../api/register-user';
import AuthForm from '../components/AuthForm';
import InputTextBox from '../components/InputTextBox';
import SubmitButton from '../components/SubmitButton';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import { useAuth } from '../hooks/use-auth';
import { useFormValidation } from '../hooks/use-form-validation';
import styles from '../styles/Register.module.css';

const formFieldOrder: FormField[] = ['email', 'password', 'confirmPassword'];

const RegisterPage = () => {
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();
  const { displayErrorMesssage, formState, handleFormDataChange, handleBlur, handleFocus } =
    useFormValidation(formFieldOrder);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    setIsPending(true);
    const result = await registerUser(formState.email.value, formState.password.value);
    setIsPending(false);
    
    if (result.isSuccess) {
      setCurrentUser(result.user);
      navigate('/');
    } else {
      console.error('Registration failed:', result.errorMessage);
    }
  };

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
          {isPending ? 'signing up...' : 'sign up'}
        </SubmitButton>
      </AuthForm>
      <Subtitle>{displayErrorMesssage}</Subtitle>
    </main>
  );
};

export default RegisterPage;
