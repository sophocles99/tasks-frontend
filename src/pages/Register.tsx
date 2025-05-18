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

type FormField = keyof FormData;
type ValidationResult = { isValid: boolean | null; errorMessage: string };
type FormStatus = Record<FormField, ValidationResult>;
type Error = { field: FormField; message: string };
type DisplayError = Error | null;
type Validator = (value: string, formData: FormData) => ValidationResult;

const RegisterPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({
    email: { isValid: null, errorMessage: '' },
    password: { isValid: null, errorMessage: '' },
    confirmPassword: { isValid: null, errorMessage: '' },
  });
  const [displayError, setDisplayError] = useState<DisplayError>(null);
  const [visitedFields, setVisitedFields] = useState<FormField[]>([]);

  const validators: Record<keyof FormData, Validator> = {
    email: (value) =>
      isValidEmail(value)
        ? { isValid: true, errorMessage: '' }
        : { isValid: false, errorMessage: 'please enter a valid email address' },
    password: (value) => {
      const failedCheck = passwordChecks.find((check) => !check.regex.test(value));
      return failedCheck
        ? { isValid: false, errorMessage: failedCheck.errorMessage }
        : { isValid: true, errorMessage: '' };
    },
    confirmPassword: (value, formData) => {
      const passwordIsValid = validators.password(formData.password, formData).isValid;
      if (value === '' && !passwordIsValid) {
        return { isValid: null, errorMessage: '' };
      }
      return value === formData.password
        ? { isValid: true, errorMessage: '' }
        : { isValid: false, errorMessage: 'passwords do not match' };
    },
  };

  const validateField = (field: FormField, value: string, formData: FormData) => {
    return validators[field](value, formData);
  };

  const getNextDisplayError = (
    newVisitedFields: FormField[],
    newFormStatus: FormStatus,
  ): DisplayError => {
    const nextErrorField = newVisitedFields.find((field) => newFormStatus[field].isValid === false);
    if (nextErrorField) {
      return {
        field: nextErrorField,
        message: newFormStatus[nextErrorField].errorMessage,
      };
    }
    return null;
  };

  const handleFormDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const field = name as FormField;
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    const validationResult = validateField(field, value, newFormData);
    setFormStatus((prev) => ({ ...prev, [field]: validationResult }));
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    const field = name as FormField;

    const newVisitedFields = [field, ...visitedFields.filter((f) => f !== field)];
    setVisitedFields(newVisitedFields);

    const validationResult = validateField(field, value, formData);
    const newFormStatus = { ...formStatus, [field]: validationResult };
    setFormStatus(newFormStatus);

    if ((value || field === 'confirmPassword') && validationResult.isValid === false) {
      setDisplayError({ field, message: validationResult.errorMessage });
    } else {
      setDisplayError(getNextDisplayError(newVisitedFields, newFormStatus));
    }
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    const field = event.target.name as FormField;
    if (displayError?.field === field) {
      setDisplayError(null);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
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
          value={formData.email}
        />
        <InputTextBox
          blurHandler={handleBlur}
          changeHandler={handleFormDataChange}
          focusHandler={handleFocus}
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
        />
        <InputTextBox
          blurHandler={handleBlur}
          changeHandler={handleFormDataChange}
          focusHandler={handleFocus}
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
          value={formData.confirmPassword}
        />
        <SubmitButton active={Object.values(formStatus).every((f) => f.isValid)}>
          sign up
        </SubmitButton>
      </AuthForm>
      <Subtitle>{displayError?.message}</Subtitle>
    </main>
  );
};

export default RegisterPage;
