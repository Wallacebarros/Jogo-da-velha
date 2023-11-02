import React from 'react';
import './style.css'

import Sobre from '../../styles/objects/sobre';
import Logo from '../../styles/objects/Logo';
import Menu from '../../styles/objects/Menu';

const Header = ()=>{
  return (
    <header className='header'>
      <Logo />
      <Sobre />
      <Menu />
    </header>
  );
}

export default Header;
