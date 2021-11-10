import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../resuable components/button";

function Login() {
  const onSubmit = () => {
    const body = {userName, password};      
    console.log(body);
  };
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex flex-row justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center">
            <div
              className="card p-3 shadow-lg"
              style={{ borderRadius: "10px", width: "600px" }}
            >
              <i
                className="fab fa-snapchat-ghost fa-3x text-center"
                style={{ color: "yellow" }}
              ></i>
              <h1 className="heading text-center">Log in to Snapchat</h1>
              <div className="form">
                <label
                  for="email"
                  className="col-12 font-weight-bold"
                  style={{ fontSize: "10px" }}
                  
                >
                  Username or Email
                </label>
                <input className="form-control col-12" id="email" type="text" onChange={(event) => setUserName(event.target.value)}/>
                <label
                  for="passsword"
                  className="col-12 font-weight-bold"
                  style={{ fontSize: "10px" }}
                  >
                  Password
                </label>
                <input
                  className="form-control col-12"
                  id="password"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Link to="/">
                  <p className="col-12 text-right">Forget Password</p>
                </Link>
                <div className="d-flex flex-row justify-content-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => onSubmit()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
