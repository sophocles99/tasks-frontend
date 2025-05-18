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
  { regex: /^.{10,}$/, errorMessage: 'please include at least ten characters in your password' },
  {
    regex: /[A-Z]/,
    errorMessage: 'please include at least one capital letter in your password',
  },
  { regex: /[a-z]/, errorMessage: 'please include at least one small letter in your password' },
  { regex: /\d/, errorMessage: 'please include at least one number in your password' },
];
