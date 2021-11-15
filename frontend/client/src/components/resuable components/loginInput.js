import React from 'react';

const Logininput = (props) => {
    return (
            <>
        <input
        type={props.type || "text"}  
        id = {props.id}
        className="form-control mt-3 mb-3"
        onChange={(event) => props.handleChange(event.target.value)}
        placeholder={props.placeholder}
        value={props.firstName}/> 
     </>
        );
    
}

export default Logininput;
