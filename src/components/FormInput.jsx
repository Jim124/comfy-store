const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <fieldset className='fieldset'>
      <legend className='fieldset-legend'>{label}</legend>
      <input
        type={type}
        className='input'
        name={name}
        defaultValue={defaultValue}
      />
    </fieldset>
  );
};
export default FormInput;
