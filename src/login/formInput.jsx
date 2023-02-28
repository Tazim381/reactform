function FormInput({ label, name, type, handleOnChange }) {
  return (
    <div className="formInput">
      <label>{label}</label>
      <input name={name} type={type} onChange={handleOnChange}></input>
    </div>
  );
}

export default FormInput;
