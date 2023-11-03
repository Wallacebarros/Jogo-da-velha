import React from "react";

const Input = ({type, value, id})=>{
  return (
    <input className='input' type={type} value={value} id={id} />
  );
}

export default Input;
