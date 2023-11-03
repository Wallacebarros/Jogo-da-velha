import React from "react";
import './style.css'

import Input from "../../styles/objects/Input";
import Label from "../../styles/objects/Label";

const CheckBox = ()=>{
  return (
    <>
      <Input type={'checkbox'} value={'show'} id={'MostrarEventos'}/>
      <Label content={'Mostrar Eventos'} htmlFor={'MostrarEventos'}/>
    </>
  );
}

export default CheckBox
