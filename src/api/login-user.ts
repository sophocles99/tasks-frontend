import retry from 'async-retry';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface LoginUserApiResponse {
  access_token: string;
  email: string;
  first_name?: string;
  id: string;
  last_name?: string;
  token_type: string;
}

type LoginResult =
  | { isSuccess: true; user: User; errorMessage?: never }
  | { isSuccess: false; user?: never; errorMessage: string };

const loginUser = async (email: string, password: string): Promise<LoginResult> => {
  const formData = new URLSearchParams();
  formData.append('username', email);
  formData.append('password', password);

  try {
    const user = await retry(async (bail, attempt) => {
      console.log(`Logging in user. Attempt: ${attempt}.`);
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        body: formData.toString(),
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        method: 'POST',
      });

      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          const errorMessage = response.status === 401 ? 'Invalid email or password.' : 'Login unsuccessful.';
          console.error(`${errorMessage} Status: ${response.status}`);
          bail(new Error(errorMessage));
        }
        console.error(`Server error. Status: ${response.status}`);
        throw new Error('Server error. Please try again later.');
      }

      console.log(`User ${email} logged in successfully.`);
      const responseBody: LoginUserApiResponse = await response.json();
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
    console.error('Error logging in user:', error);
    return {
      isSuccess: false,
      errorMessage: error instanceof Error ? error.message : 'Login unsuccessful.',
    };
  }
};

export default loginUser;
