import FormInput from '../UI-components/FormInput';
import { Button } from '../UI-components/Button';

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
        <label
          htmlFor="contactMessage"
          className="mb-1 block text-sm font-semibold text-gray-900"
        >
          Missatge
        </label>
        <textarea
          className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
          name="message"
          rows={4}
          id="contactMessage"
          placeholder="Escriu el teu missatge..."
          maxLength={2000}
        ></textarea>

        <div className="w-full">
          <Button type="button" title="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
