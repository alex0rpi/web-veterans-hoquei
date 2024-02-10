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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void | undefined;
  value?: string;
  accept?: string;
  ImageSelected?: boolean;
  onCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined;
};

const ImageInput = React.forwardRef<HTMLInputElement, TFormInputProps>(
  (props) => {
    return (
      <div>
        <label
          htmlFor={props.name}
          className="mb-1 block text-md font-semibold text-gray-900"
        >
          {props.label}
          {props.ImageSelected && (
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "#2b6e66" }}
              className="ms-1"
            />
          )}
        </label>
        <div className="flex flex-row">
          <input
            required
            ref={props.inputRef}
            type={props.type}
            name={props.name}
            id={props.name}
            className="flex-grow block w-full h-full rounded-lg border border-gray-300 bg-gray-100 p-2 text-gray-800"
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
            accept={props.accept}
          />
          {props.ImageSelected && (
            <button
              type="button"
              className="flex-shrink-0 font-bold p-2 group"
              onClick={props.onCancel}
              name={props.name}
            >
              <p className="hidden transition-all px-1 group-hover:inline-block ">
                Esborra
              </p>
              <p className="group-hover:scale-125 inline-block">❌</p>
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default ImageInput;
