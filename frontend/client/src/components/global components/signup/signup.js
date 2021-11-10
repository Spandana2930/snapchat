import React, { Component, useState } from "react";
import Controller from "../../controller/control"
import PhoneInput from "react-phone-number-input";

function Signup() {
  const validateEmail =(email)=>
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match   (regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}
  const isUpper = (pswd) => {
    let format=/[A-Z]/
    if(format.test(pswd)){
        return true;
    }
    else{
        return false;
    }
}
const isLower = (pswd) => {
    let format=/[a-z]/
    if(format.test(pswd)){
        return true;
    }
    else{
        return false;
    }
}

const specialTest=(pswd)=>{
let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
if(format.test(pswd)){
  return true;
} else {
  return false;
}
}
const isNumber=(pswd)=>{
    let hasNumber = /\d/;
    if(hasNumber.test(pswd))  {
        return true;
    }
    else{
        return false;
    }
}

const validate=(password)=>{
    // let pswd=this.state.password
    let length=password.length;
    
    if(length>=8 && isUpper(password) && isLower(password) && specialTest(password) && isNumber(password))
    {
        console.log("Strong password")
        setValidateMsg("strong password")
        return true
    }
    else{
        console.log("Please enter a valid password")
       setValidateMsg("Please enter a valid password")
       return false
    }
    setValidateMsg("")
    }
  const submitDetails = () => {
    
    if(validateEmail(email) && validate(password) && check ){
      const body = { firstName, lastName, userName,email, password, phoneNumber, bday };
      console.log(body);
   
    let url = "http://localhost:1109/userPostData";

    const success = (data) => {
      if(data){
      setError("User created successfully")
      }
      setError("")
    };
    const failure = (err) => {
      console.log("Error", err);
    };
    Controller.sendRequest(
      url,
      "post",
      body,
      false,
      null,
      success,
      failure
    );
    }
}
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [email,setEmail]= useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhonenumber] = useState("")
  const [bday, setBirthday] = useState("")
  const [validatemsg,setValidateMsg]=useState("");
  const [error,setError] = useState("")
  const [check,setCheck] = useState("false")
  const [color,setColor] = useState("")
  return (
    <>
      <div className="container d-flex flex-column align-items-center mt-5" >
        <div className="card d-flex flex-column align-items-center p-3 shadow-lg">
          <i className="fab fa-snapchat-ghost fa-3x text-center" style={{ color: "yellow" }}></i>
          <h1>Sign Up for Snapchat</h1>
          <div style={{ width: "40rem" }} className="d-flex flex-row">
            <input
              type="text"
              className="form-control mt-3 mb-3"
              placeholder="Enter First Name"
              onChange={(event) => setFirstName(event.target.value)}

            />
            <input
              type="text"
              className="form-control mt-3 mb-3"
              placeholder="Enter Last Name"
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter  UserName"
            onChange={(event) => setUserName(event.target.value)}
          />
          <input type="email" className="form-control mb-3" placeholder="Enter Email" onChange={(event)=>setEmail(event.target.value)}/>
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter Password"
            onChange={(event) =>{
               setPassword(event.target.value)
               validate(event.target.value)
              }}
          />
          <p className="flex-start" style={{fontSize:"5px",float:"left"}}>{validatemsg}</p>
          <div style={{ width: "40rem" }} className="d-flex flex-row">
            <PhoneInput
              className="form-control "
              placeholder="Enter Phone Number"
              onChange={setPhonenumber}
              value={phoneNumber}
            />
          </div>
          <div style={{ width: "40rem" }} className="d-flex flex-row mt-3">
            <input type="date" name="birthday" className="form-control" onChange={(event)=>setBirthday(event.target.value)} />
          </div>
          <div style={{ width: "40rem" }} className="d-flex flex-row mt-3" >
            <input type = "checkbox" onClick ={()=> setCheck(!check)}/>
            <p className="font-weight-bold" style={{ fontSize: "10px" }}>By tapping Sign Up & Accept, you acknowledge that you have read the Privacy Policy and agree to the Terms of Service. We'll send you a message to verify this number. Messaging rates may apply. Snapchatters can always capture or save your messages, such as by taking a screenshot or using a camera. Be mindful of what you Snap!</p>
          </div>
          <div className="d-flex flex-column justify-content-center mt-3">
            <button className="btn btn-primary" onClick={() => submitDetails()}>SignUp & Accept </button>
          <p style = {{}}>{error}</p>
          </div>
        </div>
      </div>
    </>
  );
}


export default Signup;
