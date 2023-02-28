
import { useState } from "react";
import "./login.css"
import { authenticate } from "./loginServices";
function Login() {

    const[credential,setCredential] = useState({
        email:'',
        password:''
    })

    const handleOnChange =(event) =>{
        const update= {
            [event.target.name] :event.target.value
        }
        setCredential({...credential,...update});
    };
    const handlaLogin =(event) =>{
       event.preventDefault();
       try{
        authenticate(credential);
        
       }
       catch(err){
            alert("Wrong");
       }
       
    }
    return (
       <form className="login" onSubmit={handlaLogin}>
        <div className="formInput">
         <label>Email</label>
         <input name="email" type="email" onChange={handleOnChange}></input>
         </div>
         <div className="formInput">
         <label>Password</label>
         <input name="password" type="password" onChange={handleOnChange}></input>
         </div>

         <div className="formInput">
         <input type="submit" value="login"></input>
         </div>
       </form>
    );
}
export default Login;