import {
  Button,
  FormInput,
  TextAreaInput,
  TitleSection,
} from '../UI-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from '@formspree/react';

type TContactFormProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const ContactForm = ({ scrollRef }: TContactFormProps) => {
  const [state, handleSubmit, resetForm] = useForm(
    import.meta.env.VITE_FORMSPREE_KEY
  );
  if (state.succeeded) {
    toast.success('Missatge enviat correctament. Gràcies per contactar-nos!');
    resetForm();
  }

  return (
    <section ref={scrollRef}>
      <TitleSection sectionTitle='Contacte' />
      <div className='mt-4 rounded-xl bg-slate-300 p-4'>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et
          accusamus rem est ad tempora quibusdam doloremque commodi eligendi
          ullam?
        </p>
        <form onSubmit={handleSubmit} className='my-2'>
          <div className='flex flex-row justify-start gap-2 w-auto'>
            <div className='w-1/2'>
              <FormInput
                label='El teu nom'
                name='name'
                type='text'
                placeholder='Nom'
              />
            </div>
            <div className='w-1/2'>
              <FormInput
                label='El teu email'
                name='email'
                type='email'
                placeholder='email@email.com'
              />
            </div>
          </div>
          <TextAreaInput
            label='Missatge'
            name='message'
            rows={4}
            placeholder='Escriu el teu missatge...'
          />
          <Button type='submit' title='Enviar' disabled={state.submitting} />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

// const onContactSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//     const email: contactEmailRef.current?.value
//     const message: contactMessageRef.current?.value
//   const success = await contactEmailService(email, message)
//   if (success) {
//     toast.info(`Missagte enviat`);
//   }
// };

// import contactEmailService from '../../services/ContactEmailService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const onContactSubmitHandler = () => {};
