import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type TFormTextAreaProps = {
  label: string;
  name: string;
  rows: number;
  placeholder: string;
  inputRef?: React.RefObject<HTMLTextAreaElement>;
  defaultValue?: string;
  error?: string | undefined;
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void | undefined;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void | undefined;
  value?: string;
  check?: boolean | undefined;
};

const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TFormTextAreaProps>(
  (props) => {
    return (
      <div>
        <label
          htmlFor='email'
          className='mb-1 block text-md font-semibold text-gray-900'
        >
          {props.label}
          {props.error && ( // Condición para mostrar el mensaje de error
            <p className='text-red-600 text-md inline-block ms-1'>
              -{props.error}
            </p>
          )}
          {props.check && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: '#2b6e66' }}
              className='ms-1'
            />
          )}
        </label>
        <textarea
          required
          ref={props.inputRef}
          name={props.name}
          id={props.name}
          className='mb-3 block w-full rounded-lg border border-gray-300 bg-slate-100 p-2.5 text-gray-800'
          placeholder={props.placeholder}
          // defaultValue={props.defaultValue}
          rows={props.rows}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        ></textarea>
      </div>
    );
  }
);

export default TextAreaInput;
