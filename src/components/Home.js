import React, { useState } from "react";
import HomeImg from "../images/header.jpeg";
import axios from "axios";

function Home() {
  const [data, setData] = useState();

  const onHandle = async (e) => {
    const value = { ...data };
    value[e.target.id] = e.target.value;
    setData(value);
    console.log(data);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(data);
    const response = await axios.post("/user", data);
    if (response.data) console.log(response.data);
    window.location.assign(
      "http://localhost:3000/body"
    );
  };
  return (
    <div
      style={{
        margin: "auto",
        padding: "70px",
        marginTop: "40px",
        backgroundColor: "whitesmoke",

        borderRadius: "40px",
        maxWidth: "fit-content",
        justifyContent: "center",
        borderWidth: "thin",
      }}
      className='home'
    >
      <img
        src={HomeImg}
        alt='homeImg'
        style={{
          marginTop: "30px",
          alignContent: "center",
          borderRadius: "20px",
        }}
      />
      <div
        style={{
          margin: "20px",
          paddingLeft: "100px",
          //   display: "-ms-grid",
        }}
      >
        <form
          onSubmit={(e) => {
            submitForm(e);
          }}
        >
          <div>
            <label>
              <input
                className='form-control'
                onChange={(e) => {
                  onHandle(e);
                }}
                type='email'
                placeholder='Please enter your Email'
                style={{
                  //   padding: "10px",
                  height: "30px",
                  width: "300px",
                  paddingLeft: "10px",
                  borderRadius: "10px",
                  borderColor: "grey",
                  border: "none",
                  outline: "none",
                  backgroundColor: "whitesmoke",
                }}
                required
                id='email'
              />
            </label>
          </div>

          <input
            className='btn'
            type='submit'
            value='Continue'
            style={{
              padding: "10px",
              marginTop: "20px",
              width: "100px",
              justifyContent: "center",
              marginLeft: "90px",
              borderRadius: "10px",
              border: "none",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: "#d1d1ff",
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Home;
