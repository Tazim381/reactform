import { useState } from "react";
import "./login.css";
import { authenticate } from "./loginServices";
import FormInput from "./formInput";
import Form from "./Form";
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
    <div className="loginFrom">
      <Form
        handleLogin={handleLogin}
        handleOnChange={handleOnChange}
        formInputChildren={[
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleOnChange={handleOnChange}
          />,
          <FormInput
            name="password"
            type="password"
            label="Password"
            handleOnChange={handleOnChange}
          />,
        ]}
      />
    </div>
  );
}
export default Login;
