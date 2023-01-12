import React from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./image.Module.css"

const Navbar = () => {
  const isAuth = useSelector((store) => store.Authreducer.isAuth)

  return (
    <div className="navbar">
      <div >
        <Link to="/">
        <img
          src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png"
          width="100px"
          alt="logo"
          className="nvimg"
        />
        </Link>
       
      </div>
      
      <div className="glx">
        <h1>Galxy image app</h1>
      </div>

      <div>
        
  {!isAuth &&  <Link to="/login"><button className="lgbtn">LOGIN</button></Link> }     
        
      </div>
    </div>
  );
};

export default Navbar;