import React from 'react';
import './style.css';
import Card from '../../styles/objects/Card'
import Player from '../../styles/objects/Player'

const Hashtag = ()=>{
  return(
    <Card >
      <ul className='hashtag'>
        <li className='item'> <Player player={'x'}/> </li>
        <li className='item'> <Player player={'o'}/> </li>
        <li className='item'> <Player player={'x'}/> </li>

        <li className='item'> <Player player={'o'}/> </li>
        <li className='item'> <Player player={'x'}/> </li>
        <li className='item'> <Player player={'o'}/> </li>

        <li className='item'> <Player player={'x'}/> </li>
        <li className='item'> <Player player={'o'}/> </li>
        <li className='item'> <Player player={'x'}/> </li>
      </ul>
    </Card >
  );
} 

export default Hashtag;
