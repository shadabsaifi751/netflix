import React from 'react';
import './style.scss';
import Header from './Componets/header';
import Banner from './Componets/banner';
import Api from './Componets/api';
import Api2 from './Componets/playbutton';

function App() {
  return (
    <>
      <Banner/>
      <Api/>
      <Api2/>
      {/* <Header/> */}
     
    </>
  );
}

export default App;
