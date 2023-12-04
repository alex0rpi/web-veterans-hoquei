import React from 'react';

type TFormInputProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
};

const FormInput = React.forwardRef<HTMLInputElement, TFormInputProps>((props, ref) => {
  return (
    <div>
      <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-900">
        {props.label}
      </label>
      <input
        required
        ref={props.inputRef}
        type={props.type}
        name={props.name}
        id={props.name}
        className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
        placeholder={props.placeholder}
      />
    </div>
  );
});

export default FormInput;
