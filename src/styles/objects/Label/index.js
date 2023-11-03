import React from 'react';
import './style.css';

const Label = ({content, htmlFor})=>{
  return (
    <label className='label' htmlFor={htmlFor}>{content}</label>
  );
}

export default Label;
