import { useRef } from 'react';
import { Button, FormInput, TextAreaInput } from '../UI-components';
// import contactEmailService from '../../services/ContactEmailService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

type TContactFormProps = {
  scrollRef?: React.RefObject<HTMLDivElement>;
};

const ContactForm = ({ scrollRef }: TContactFormProps) => {
  const contactEmailRef = useRef<HTMLInputElement>(null);
  const contactMessageRef = useRef<HTMLTextAreaElement>(null);
  // const onContactSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //     const email: contactEmailRef.current?.value
  //     const message: contactMessageRef.current?.value
  //   const success = await contactEmailService(email, message)
  //   if (success) {
  //     toast.info(`Missagte enviat`);
  //   }
  // };
  const onContactSubmitHandler = () => {};
  return (
    <section ref={scrollRef}>
      <h4 className='mb-3 mt-6 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700'>
        Contacte
      </h4>
      <div className='mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6'>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et
          accusamus rem est ad tempora quibusdam doloremque commodi eligendi
          ullam?
        </p>
        <form onSubmit={onContactSubmitHandler}>
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
                inputRef={contactEmailRef}
              />
            </div>
          </div>
          <TextAreaInput
            label='Missatge'
            name='message'
            rows={4}
            placeholder='Escriu el teu missatge...'
            inputRef={contactMessageRef}
          />
          <div className='w-full'>
            <Button type='submit' title='Enviar' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
