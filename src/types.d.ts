interface PasswordCheck {
  regex: RegExp;
  errorMessage: string;
}

type ValidationResult = boolean | null;

type ErrorMessage = string;

interface FieldState {
  value: string;
  isValid: ValidationResult;
  errorMessage: ErrorMessage;
  hasBeenValid: boolean;
}

interface RegistrationFormState {
  email: FieldState;
  password: FieldState;
  confirmPassword: FieldState;
}

type RegistrationFormField = keyof RegistrationFormState;

type Validator = (value: string, formState: RegistrationFormState) => [ValidationResult, ErrorMessage];

type User = {
  accessToken: string;
  email: string;
  firstName?: string;
  id: string;
  lastName?: string;
};
