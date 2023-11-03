import React from 'react';
import './style.css';
import PlayerX from '../../../img/option.png'
import PlayerY from '../../../img/player_o.png'

const Player = ({player})=>{
  let players = []
  players['x'] = PlayerX
  players['o'] = PlayerY

  return (
    <button className='player'>
      <img src={players[player]}/>
    </button>
  );
}

export default Player;
