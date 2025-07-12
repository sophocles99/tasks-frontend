import { ChangeEvent, FocusEventHandler, useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

const passwordChecks: PasswordCheck[] = [
  { regex: /^.{10,}$/, errorMessage: 'please include at least ten characters in your password' },
  {
    regex: /[A-Z]/,
    errorMessage: 'please include at least one capital letter in your password',
  },
  { regex: /[a-z]/, errorMessage: 'please include at least one small letter in your password' },
  { regex: /\d/, errorMessage: 'please include at least one number in your password' },
];

const validators: Record<FormField, Validator> = {
  email: (value) =>
    isValidEmail(value) ? [true, ''] : [false, 'please enter a valid email address'],
  password: (value) => {
    const failedCheck = passwordChecks.find((check) => !check.regex.test(value));
    return failedCheck ? [false, failedCheck.errorMessage] : [true, ''];
  },
  confirmPassword: (value, formState) => {
    if (!formState.password.isValid) return [null, ''];
    return value === formState.password.value ? [true, ''] : [false, 'passwords do not match'];
  },
};

export const validateField = (field: FormField, value: string, formState: IFormState) => {
  return validators[field](value, formState);
};

const getDisplayErrorMessage = (
  formFieldOrder: FormField[],
  activeField: FormField | null,
  formState: IFormState,
): ErrorMessage => {
  if (activeField) {
    const activeFieldState = formState[activeField];
    if (activeFieldState.isValid === false && activeFieldState.hasBeenValid) {
      return activeFieldState.errorMessage;
    }
  }

  let maxErrorIndex = formFieldOrder.length;
  if (activeField && formState[activeField].isValid === false) {
    maxErrorIndex = formFieldOrder.indexOf(activeField);
  }
  const displayErrorMessageField = formFieldOrder.find(
    (field, index) => formState[field].isValid === false && index < maxErrorIndex,
  );
  return displayErrorMessageField ? formState[displayErrorMessageField].errorMessage : '';
};

export const useFormValidation = (formFieldOrder: FormField[]) => {
  const [formState, setFormState] = useState<IFormState>({
    email: { value: '', isValid: null, errorMessage: '', hasBeenValid: false },
    password: { value: '', isValid: null, errorMessage: '', hasBeenValid: false },
    confirmPassword: { value: '', isValid: null, errorMessage: '', hasBeenValid: false },
  });
  const [activeField, setActiveField] = useState<FormField | null>(null);
  const displayErrorMesssage = getDisplayErrorMessage(formFieldOrder, activeField, formState);

  const handleFormDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const field = name as FormField;
    setFormState((prevFormState) => {
      const [isValid, errorMessage] = validateField(field, value, prevFormState);
      const hasBeenValid = prevFormState[field].hasBeenValid || isValid;
      return { ...prevFormState, [field]: { value, isValid, errorMessage, hasBeenValid } };
    });
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = () => {
    setActiveField(null);
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    const { name } = event.target;
    const field = name as FormField;
    setActiveField(field);
  };

  return {
    displayErrorMesssage,
    formState,
    handleFormDataChange,
    handleBlur,
    handleFocus,
  };
};
