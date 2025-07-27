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

interface FormState {
  email: FieldState;
  password: FieldState;
  confirmPassword: FieldState;
}

type FormField = keyof FormState;

type Validator = (value: string, formState: FormState) => [ValidationResult, ErrorMessage];

type User = {
  accessToken: string;
  email: string;
  firstName?: string;
  id: string;
  lastName?: string;
};
