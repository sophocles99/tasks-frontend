const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email: string): [ValidationResult, ErrorMessage] =>
  emailRegex.test(email) ? [true, ''] : [false, 'please enter a valid email address'];

const passwordChecks: PasswordCheck[] = [
  { regex: /^.{10,}$/, errorMessage: 'please include at least ten characters in your password' },
  {
    regex: /[A-Z]/,
    errorMessage: 'please include at least one capital letter in your password',
  },
  { regex: /[a-z]/, errorMessage: 'please include at least one small letter in your password' },
  { regex: /\d/, errorMessage: 'please include at least one number in your password' },
];

export const validatePassword = (password: string): [ValidationResult, ErrorMessage] => {
  const failedCheck = passwordChecks.find((check) => !check.regex.test(password));
  return failedCheck ? [false, failedCheck.errorMessage] : [true, ''];
};

export const validateConfirmPassword = (password: string, confirmPassword: string): [ValidationResult, ErrorMessage] => {