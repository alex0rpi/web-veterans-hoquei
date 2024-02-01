import { urls } from '../constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      const error = await response.json();
      toast.warning(error.message);
      return false;
    }
    return true;
  } catch (error) {
    toast.warning('Alguna cosa ha fallat, sisplau torna-ho a provar més tard.');
    return false;
  }
};

export default UpdatePasswordService;
