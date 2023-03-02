import PropTypes from "prop-types";
function Form({ formInputChildren, handleOnChange, handleLogin }) {
  return (
    <form className="login" onSubmit={handleLogin}>
      {formInputChildren}
      <div className="formInput">
        <input type="submit" value="login"></input>
      </div>
    </form>
  );
}

Form.PropType = {
  formInputChildren: PropTypes.array.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Form;
