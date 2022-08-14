import { Link } from "react-router-dom";
import React, { useState } from 'react'
import logo from '../imgs/logo.jfif'
import { Create } from './Create'

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Login from "./Login";
export const Navbar = () => {

const [burgerr,setburgerr]=useState(true);
const navclick=()=>{
  burgerr?setburgerr(false):setburgerr(true);

}

const { logOut, user } = useUserAuth();
const navigate = useNavigate();
const handleLogout = async () => {
  try {
    await logOut();
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

  return (
    
    <div>
       
    
    {/* <div className="">
      <Button variant="primary" onClick={handleLogout}>
        Log out
      </Button>
    </div> */}
        <nav className={burgerr?"navbar background h-nav-resp":"navbar background v-nav-resp"}>
        <ul className={burgerr?"nav-list vclass-resp":"nav-list hclass-resp"}>
            <div className="logo"><img src={logo} alt="logo"/></div>
            <li><Link to="/">HOME</Link></li>
            {/* <!-- <li><a href="#about">ABOUT US</a></li> --> */}
            <li><Link to="/aboutus">ABOUT US</Link></li>
            <li><Link to="/contactus">CONTACT US</Link></li>
            <li><Link to={user?"/create":"/login"}>CREATE TEAM</Link> </li>
            <li><Link to={user?"/teams":"/login"}>SEE OPPONENTS</Link> </li>
          {user?  <li> <Button variant="primary" onClick={handleLogout}>
        Log out
      </Button></li>
      :<li ><Button  variant="primary"><Link to="/login">Login</Link></Button></li>}
      <li style={{color:'white'}}>{user && user.email}</li>
        
        </ul>
        {/* <!-- <div className="rightNav">
            <input type="text" name="search" id="search">
            <button className="btn btn-sm">Search</button>
        </div> --> */}
        <div onClick={navclick} className="burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </nav>
    </div>
  )
}
