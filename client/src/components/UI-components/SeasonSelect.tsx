import React from 'react';

type TSelectInputProps = {
  label: string;
  name: string;
  seasonRef?: React.RefObject<HTMLSelectElement>;
};

const SelectInput = React.forwardRef<HTMLSelectElement, TSelectInputProps>((props) => {
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
      <label htmlFor="season" className="text-md mb-1 block font-semibold text-gray-900">
        {props.label}
      </label>
      <select
        name={props.name}
        id={props.name}
        className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
        ref={props.seasonRef}
      >
        {/* Funció per a què agafi desde la temporada actual fins la del 17-18 */}
        {generateSeasonOptions()}
      </select>
    </div>
  );
});

export default SelectInput;
