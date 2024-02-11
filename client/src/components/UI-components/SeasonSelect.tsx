import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TSelectInputProps = {
  label: string;
  name: string;
  seasonRef?: React.RefObject<HTMLSelectElement>;
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void | undefined;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void | undefined;
  check?: boolean | undefined;
  error?: string | undefined;
};

const SelectInput = React.forwardRef<HTMLSelectElement, TSelectInputProps>(
  (props) => {
    const getCurrentYear = () => new Date().getFullYear();
    const generateSeasonOptions = () => {
      const currentYear = getCurrentYear();
      const options = [];
      for (let year = currentYear; year >= 2017; year--) {
        options.push(
          <option
            key={year}
            value={`${year}-${year + 1}`}
            className={year % 2 === 0 ? `bg-slate-200` : `bg-slate-300`}
          >
            {`${year}-${year + 1}`}
          </option>
        );
      }
      return options;
    };
    return (
      <div>
        <label
          htmlFor="season"
          className="text-md mb-1 block font-semibold text-gray-900"
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
        <select
          name={props.name}
          id={props.name}
          className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
          ref={props.seasonRef}
          // defaultValue={props.defaultValue}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        >
          {/* Funció per a què agafi desde la temporada actual fins la del 17-18 */}
          {generateSeasonOptions()}
        </select>
      </div>
    );
  }
);

export default SelectInput;
