import { urls } from '../../constants';

type TUpdateUserFormProps = {
  name?: string;
  email?: string;
};

const PatchUserService = async ({ name, email }: TUpdateUserFormProps) => {
  try {
    const response = await fetch(urls.patchMe, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
      }),
    });
    if (!response.ok) {
      const error = await response.json();
      return error;
    }
    return true;
  } catch (error) {
    return false;
  }
};

export default PatchUserService;
