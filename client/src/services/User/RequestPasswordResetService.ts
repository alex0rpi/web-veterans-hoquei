import { urls } from '../../constants';

type TRequestPasswordResetServiceProps = {
  email: string;
};

const RequestPasswordResetService = async ({
  email,
}: TRequestPasswordResetServiceProps) => {
  try {
    const response = await fetch(urls.requestPasswordReset, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
      }),
    });
    if (!response.ok) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export default RequestPasswordResetService;
