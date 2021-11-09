import React, { Component ,useState} from "react";
import Control from "../../controller/control"
import Button from "../../resuable components/button"

function Signup () {
    const submitDetails = () => {
        const body = { firstName, lastName,userName,password,place,phoneNumber,month,day,year};
        console.log(body);
        let url = "http://localhost:1109/data";

      const success = (res) => {
        console.log("Success", res);
        alert("User created successfully")
      };
      const failure = (err) => {
        console.log("Error", err);
      };
      Control.sendRequest(
        url,
        "post",
        body,
        false,
        null,
        success,
        failure
      );  
};
    const[firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName,setUserName]= useState("")
    const [password, setPassword] = useState("")
    const [place, setPlace] = useState("")
    const [phoneNumber,setPhonenumber]=useState("")
    const [month,setMonth] = useState("")
    const [day,setDay] = useState("")
    const [year,setYear] = useState("")
    return (
      <>
        <div className="container d-flex flex-column align-items-center mt-5" >
          <div className="card d-flex flex-column align-items-center p-3 shadow-lg">
          <i className="fab fa-snapchat-ghost fa-3x text-center" style={{color:"yellow"}}></i>
            <h1>Sign Up for Snapchat</h1>
            <div  style={{width:"40rem"}}  className="d-flex flex-row">
              <input
                type="text"
                className="form-control mt-3 mb-3"
                placeholder="Enter First Name"
                onChange = {(event)=>setFirstName(event.target.value)}

              />
              <input
                type="text"
                className="form-control mt-3 mb-3"
                placeholder="Enter Last Name"
                onChange = {(event)=>setLastName(event.target.value)}
              />
            </div>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter  UserName"
              onChange = {(event)=>setUserName(event.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter Password"
              onChange = {(event)=>setPassword(event.target.value)}
            />
            <div style={{ width: "40rem" }} className="d-flex flex-row">
              <select id="selectNumber" className="form-control"  onChange = {(event)=>setPlace(event.target.value)}>
                <option value="1">US</option>
                <option value="2">IN</option>
              </select>
              <input
                type="number"
                className="form-control "
                placeholder="Enter Phone Number"
                onChange = {(event)=>setPhonenumber(event.target.value)}
              />
            </div>
            <div style={{width:"40rem"}}  className="d-flex flex-row mt-3">
              <select id="selectMonth" className="form-control"  onChange = {(event)=>setMonth(event.target.value)}>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select id="selectDay" className="form-control"  onChange = {(event)=>setDay(event.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <select id="selectYear" className="form-control"  onChange = {(event)=>setYear(event.target.value)}>
                <option value="1">1999</option>
                <option value="2">2000</option>
              </select>
            </div>
            <div style={{ width: "40rem" }} className="d-flex flex-row mt-3" >
            <p className="font-weight-bold" style={{fontSize:"10px"}}>By tapping Sign Up & Accept, you acknowledge that you have read the Privacy Policy and agree to the Terms of Service. We'll send you a message to verify this number. Messaging rates may apply. Snapchatters can always capture or save your messages, such as by taking a screenshot or using a camera. Be mindful of what you Snap!</p>
            </div>
            <div className="d-flex flex-row justify-content-center mt-3">
              <button className="btn btn-primary" onClick = {()=>submitDetails()}>SignUp & Accept </button>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Signup;
