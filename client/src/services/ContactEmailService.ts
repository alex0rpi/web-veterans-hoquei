// <form action="https://formspree.io/f/mzbljkgl" method="POST">
import { toast } from 'react-toastify';
import { urls } from '../constants';

type TContactEmailProps = {
  email: string | undefined;
  message: string | undefined;
};

const contactEmailService = async (props: TContactEmailProps) => {
  const { email, message } = props;

  try {
    const response = await fetch(urls.sendContactEmail, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        message,
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

export default contactEmailService;
