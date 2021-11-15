import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type || "text"}  
        className="form-control mt-3 mb-3"
        onChange={(event) => props.handleChange(event.target.value)}
        placeholder={props.placeholder}
        value={props.firstName}
      />
    </>
  );
};

export default Input;
