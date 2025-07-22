import retry from 'async-retry';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface UserCreateResponseApi {
  access_token: string;
  email: string;
  first_name?: string;
  id: string;
  last_name?: string;
  token_type: 'bearer';
}

type RegisterUserResult =
  | { isSuccess: true; user: User; errorMessage?: never }
  | { isSuccess: false; user?: never; errorMessage: string };

const registerUser = async (email: string, password: string): Promise<RegisterUserResult> => {
  const requestBody = { email, password };

  try {
    const user = await retry(async (bail, attempt) => {
      console.log(`Registering user. Attempt: ${attempt}.`);
      const response = await fetch(`${API_BASE_URL}/users`, {
        body: JSON.stringify(requestBody),
        headers: { 'content-type': 'application/json' },
        method: 'POST',
      });

      if (!response.ok) {
        if (response.status === 409) {
          console.error('Email already in use.');
          bail(new Error('Email already in use.'));
        }
        console.error(`HTTP error. Status: ${response.status}`);
        throw new Error('Network error. Please try again later.');
      }

      console.log(`User ${email} registered successfully.`);
      const responseBody: UserCreateResponseApi = await response.json();
      return {
        accessToken: responseBody.access_token,
        email: responseBody.email,
        firstName: responseBody.first_name,
        id: responseBody.id,
        lastName: responseBody.last_name,
      };
    });

    return { isSuccess: true, user };
  } catch (error) {
    console.error('Error registering user:', error);
    return {
      isSuccess: false,
      errorMessage: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
};

export default registerUser;
