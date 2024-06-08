import { Button, FormInput, TextAreaInput, TitleSection } from '../UI-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from '@formspree/react';
import { useState } from 'react';

type componentProps = {
  id: string;
};

const ContactForm = ({ id }: componentProps) => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);
  const [message, setMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  if (state.succeeded) {
    toast.success('Missatge enviat correctament. Gràcies per contactar-nos!');
  }

  return (
    <section id={id}>
      <TitleSection sectionTitle='Contacte' />
      <p className='text-web'>
        Si vols estar al corrent de les nostres activitats o tens alguna consulta, no dubtis a
        contactar-nos.
      </p>
      <div className='mt-2 rounded-lg bg-slate-300 p-3'>
        <form onSubmit={handleSubmit} className=''>
          <div className='flex flex-row justify-start gap-2 w-auto'>
            <div className='w-1/2'>
              <FormInput label='El teu nom' name='name' type='text' placeholder='Nom' />
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
            onChange={handleInputChange}
          />
          {/* <Button type='submit' title='Enviar' disabled={state.submitting} /> */}
          <Button type='submit' title='Enviar' disabled={state.submitting || !message.trim()} />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
