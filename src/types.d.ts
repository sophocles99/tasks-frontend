interface PasswordCheck {
  regex: RegExp;
  errorMessage: string;
}

type ValidationResult = boolean | null;

type ErrorMessage = string;

interface IFieldState {
  value: string;
  isValid: ValidationResult;
  errorMessage: ErrorMessage;
  hasBeenValid: boolean;
}

interface IFormState {
  email: IFieldState;
  password: IFieldState;
  confirmPassword: IFieldState;
}

type FormField = keyof IFormState;

type Validator = (value: string, formState: IFormState) => [ValidationResult, ErrorMessage];
