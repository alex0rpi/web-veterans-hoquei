import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type TFormInputProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  defaultValue?: string;
  error?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined;
  value?: string;
  check?: boolean | undefined;
};

const FormInput = React.forwardRef<HTMLInputElement, TFormInputProps>(
  (props) => {
    return (
      <div>
        <label
          htmlFor={props.name}
          className="mb-1 block text-md font-semibold text-gray-900"
        >
          {props.label}
          {props.error && ( // Condición para mostrar el mensaje de error
            <p className="text-red-600 text-md inline-block ms-1">
              -{props.error}
            </p>
          )}
          {props.check && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "#2b6e66" }}
              className="ms-1"
            />
          )}
        </label>
        <input
          required
          ref={props.inputRef}
          type={props.type}
          name={props.name}
          id={props.name}
          className={`mb-3 block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-gray-800 ${
            props.error ? "border-red-500" : ""
          }`}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
      </div>
    );
  }
);

export default FormInput;
