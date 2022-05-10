import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Header.css";
import logo from "../images/logo.jpeg";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

function Header() {

  const sendMail = async () => {
      const request = await axios.post("https://87c3-129-205-124-226.in.ngrok.io/sendMail");
         if (request.data === 'success') {  
           alert('An email would be sent to you shortly')
              }else if(request.data === "invalid"){
                alert('Unable to connect to internet')
              }
    
  };

  return (
    <div
      className='header'
      style={{
        backgroundColor: "whitesmoke",
        alignItems: "center",
        paddingBottom: "20px",
      }}
    >
     
        <img
          src={logo}
          alt='logo'
          className='headerLogo'
          style={{
            width: "60px",
            height: "50px",
            borderRadius:'20px',
            //   backgroundColor: "whitesmoke",
            //   paddingRight: "1000px",
            marginTop: "10px",
            justifyContent: "space-around",
          }}
        />
     
      <h3 style={{ marginTop: "10px" }}>Motivation</h3>
      <div
        onClick={() => {
          sendMail();
        }}
      >
        <SaveAltIcon className='svg_icon' />
      </div>
    </div>
  );
}

export default Header;
