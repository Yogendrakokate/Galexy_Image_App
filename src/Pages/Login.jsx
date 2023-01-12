import React,{useState} from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate, useLocation } from "react-router-dom"
import { login } from "../Redux/Authreducer/action"
import "./data.Module.css";


const Login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const handlelogin = (e) => {
    const comingfrom = location.state?.data || "/"
    
    e.preventDefault()
    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
      navigate(comingfrom,{replace:true})
      })
      
    }
  }
  return (
    <div>
      <div className="login">
      <h2 className="log">LOGIN</h2>
      <form onSubmit={handlelogin}>
        <div>
          <label className="useremail">User Email</label>
          
          <br /> <br />
          <input className="emailput"  type='email' value={email} onChange={(e)=>setemail(e.target.value)} /> <br /> <br />
        </div>
        <div>
          <label className="useremail">User Password</label>
          <br /> <br /> 
          <input className="emailput" type='password' value={password} onChange={(e)=>setpassword(e.target.value)} /> <br />
        </div>
        <button type="submit" className="sub">
          Submit
        </button>
      </form>
      </div>
     
      <div className="requre">
        <h4 className="loginreqres">This Login Is Authenticated with Reqres.in <br /> for test purpose So please <br /> use the below email &password</h4>
        <h5 className="reqemail">Email:"eve.holt@reqres.in"</h5>
        <h5 className="reqpass">Password:"cityslicka"</h5>
      </div>
    </div>
  );
};

export default Login;