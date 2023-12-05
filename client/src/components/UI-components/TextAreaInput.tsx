import React from 'react';

type TFormTextAreaProps = {
  label: string;
  name: string;
  rows: number;
  maxLength: number;
  placeholder: string;
  inputRef?: React.RefObject<HTMLTextAreaElement>;
};

const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TFormTextAreaProps>(
  (props, ref) => {
    return (
      <div>
        <label htmlFor="email" className="mb-1 block text-md font-semibold text-gray-900">
          {props.label}
        </label>
        <textarea
          className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
          name={props.name}
          ref={props.inputRef}
          maxLength={props.maxLength}
          rows={props.rows}
          placeholder={props.placeholder}
          id={props.name}
          required
        ></textarea>
      </div>
    );
  }
);

export default TextAreaInput;
