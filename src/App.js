import React from 'react';
import './App.css';

import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import CheckBox from './components/CheckBox';

const App = ()=>{
  return (
    <main className='app'>
      <Header />
      <Hashtag /> 
      <CheckBox />
    </main>
  );
}

export default App;
