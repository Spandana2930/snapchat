import React from 'react';

function Button(props) {
    const {className,handleClick,value} = props;
    return (
      <button className={className} onClick={handleClick}>
        {value}
      </button>
    );
   }

export default Button;
