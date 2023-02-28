import PropTypes from "prop-types";

function FormInput({ label, name, type, handleOnChange }) {
  return (
    <div className="formInput">
      <label>{label}</label>
      <input name={name} type={type} onChange={handleOnChange}></input>
    </div>
  );
}

FormInput.prototype = {
  label: PropTypes.string.isRequired, //required
  name: PropTypes.string.isRequired, //required
  type: PropTypes.string.isRequired, //required
  handleOnChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  type: "email",
};

export default FormInput;
