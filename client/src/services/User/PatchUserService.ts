import { urls } from '../../constants';

type TUpdateUserFormProps = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

const PatchUserService = async ({
  name,
  email,
  password,
}: TUpdateUserFormProps) => {
  try {
    const response = await fetch(urls.patchMe, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
        // TODO finish, check optionals, fields that are different from before passwords match etc.
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
