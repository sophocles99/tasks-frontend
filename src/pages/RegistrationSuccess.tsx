import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router';

import PrimaryButton from '../components/PrimaryButton';
import Subtitle from '../components/Subtitle';
import TaskCard from '../components/TaskCard';
import Title from '../components/Title';
import { useAuth } from '../hooks/use-auth';
import styles from '../styles/RegistrationSuccess.module.css';
import { TaskStatus } from '../tasks';

const TIME_BEFORE_NAVIGATION = 5 * 1000; // 5 seconds
const TIME_STEP_MS = 10;

const RegistrationSuccess = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState(TIME_BEFORE_NAVIGATION);

  const decrementTimerOrNavigate = () => {
    setTimeRemaining((previousTimeRemaining) => {
      if (previousTimeRemaining <= 0) {
        console.log('Navigating to main page');
        navigate('/');
        return 0;
      } else {
        return previousTimeRemaining - TIME_STEP_MS;
      }
    });
  };

  useEffect(() => {
    const intervalId = setInterval(decrementTimerOrNavigate, TIME_STEP_MS);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main className={styles.registrationSuccessPageContainer}>
      <section className={styles.registrationSuccessPageContent}>
        <Title addDay={false} isMain={false}>
          Welcome!
        </Title>
        <Subtitle>{currentUser?.email}</Subtitle>
        <TaskCard
          task={{
            categoryIds: [],
            description: '',
            due_date: new Date(),
            id: '0',
            name: 'Sign up successfully',
            status: TaskStatus.Done,
          }}
        ></TaskCard>
        <PrimaryButton
          active={true}
          indicatorBarPercentageWidth={(timeRemaining / TIME_BEFORE_NAVIGATION) * 100}
        >
          Continue
        </PrimaryButton>
      </section>
    </main>
  );
};

export default RegistrationSuccess;
