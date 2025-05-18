interface PasswordCheck {
  regex: RegExp;
  errorMessage: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const capitaliseFirstLetter = (str: string): string => {
  if (!str || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isValidEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

export const passwordChecks: PasswordCheck[] = [
  {
    regex: /[A-Z]/,
    errorMessage: 'password must include at least one capital letter',
  },
  { regex: /[a-z]/, errorMessage: 'password must include at least one small letter' },
  { regex: /\d/, errorMessage: 'password must include at least one number' },
];
