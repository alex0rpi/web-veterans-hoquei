import { urls } from '../constants';

type TResetPasswordServiceProps = {
  newPassword: string;
  confirmNewPassword: string;
  resetToken: string;
};

const UpdatePasswordService = async ({
  newPassword,
  confirmNewPassword,
  resetToken,
}: TResetPasswordServiceProps) => {
  try {
    const response = await fetch(urls.updatePassword, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        newPassword,
        confirmNewPassword,
        resetToken,
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

export default UpdatePasswordService;
