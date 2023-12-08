import FormInput from '../UI-components/FormInput';
import { Button } from '../UI-components/Button';
import TextAreaInput from '../UI-components/TextAreaInput';

const ContactForm = () => {
  return (
    <div className="mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6">
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et accusamus
        rem est ad tempora quibusdam doloremque commodi eligendi ullam?
      </p>
      <form>
        <div className="flex flex-row justify-start gap-2 w-auto">
          <div className="w-1/2">
            <FormInput label="El teu nom" name="name" type="text" placeholder="Nom" />
          </div>
          <div className="w-1/2">
            <FormInput
              label="El teu email"
              name="email"
              type="email"
              placeholder="email@email.com"
            />
          </div>
        </div>
        <TextAreaInput
          label="Missatge"
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Escriu el teu missatge..."
        />
        <div className="w-full">
          <Button type="button" title="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
