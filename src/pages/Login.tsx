import { FormEventHandler, useState } from 'react';

import { useNavigate } from 'react-router';

import loginUser from '../api/login-user';
import AuthForm from '../components/AuthForm';
import InputTextBox from '../components/InputTextBox';
import PrimaryButton from '../components/PrimaryButton';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import { useAuth } from '../hooks/use-auth';
import styles from '../styles/AuthForm.module.css';

const Login = () => {
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [password, setPassword] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    setIsPending(true);
    console.log('Submitting form...');
    const result = await loginUser(email, password);
    setIsPending(false);

    if (result.isSuccess) {
      console.log(result.user);
      setCurrentUser(result.user);
      navigate('/'); // Navigate straight to main page
    } else {
      console.error('Login failed:', result.errorMessage);
      setErrorMessage(result.errorMessage || 'Incorrect email or password');
    }
  };

  return (
    <main className={styles.authFormPageContainer}>
      <Title addDay={false} isMain={false}>
        Login
      </Title>
      <Subtitle>enter your email and password</Subtitle>
      <AuthForm onSubmit={handleSubmit}>
        <InputTextBox changeHandler={handleChange} name="email" placeholder="Email" type="email" value={email} />
        <InputTextBox
          changeHandler={handleChange}
          name="password"
          placeholder="Password"
          type="password"
          value={password}
        />
        <PrimaryButton active={email !== '' && password !== '' && !isPending}>
          {isPending ? 'logging in...' : 'login'}
        </PrimaryButton>
      </AuthForm>
      <Subtitle>{errorMessage}</Subtitle>
    </main>
  );
};

export default Login;
