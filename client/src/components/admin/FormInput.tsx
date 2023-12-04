type TFormInputProps = {
    label: string;
    name: string;
    type: string;
    placeholder: string;

}

const FormInput = (props: TFormInputProps) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="mb-1 block text-sm font-semibold text-gray-900"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default FormInput