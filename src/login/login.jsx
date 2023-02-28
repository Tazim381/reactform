import { useState } from "react";
import "./login.css";
import { authenticate } from "./loginServices";
import FormInput from "./formInput";
function Login() {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const update = {
      [event.target.name]: event.target.value,
    };
    setCredential({ ...credential, ...update });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    try {
      authenticate(credential);
      alert("right");
    } catch (err) {
      alert("Wrong");
    }
  };
  return (
    <form className="login" onSubmit={handleLogin}>
      <FormInput
        name="email"
        type="email"
        label="Email"
        handleOnChange={handleOnChange}
      />
      <div className="formInput">
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={handleOnChange}
        ></input>
      </div>

      <div className="formInput">
        <input type="submit" value="login"></input>
      </div>
    </form>
  );
}
export default Login;
