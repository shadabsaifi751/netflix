import React from 'react';
import './style.scss';
import Header from './Componets/header';
import Banner from './Componets/banner';
import Preview from './Componets/preview';
import Mylist from './Componets/mylist';
import Watching from './Componets/watching';
import Europ from './Componets/europ';
import Romance from './Componets/romance';

function App() {
  return (
    <>
      <Banner/>
      <Preview/>
      <Mylist/>
      <Watching/>
      <Europ/>
      <Romance/>
      <Header/>
     
    </>
  );
}

export default App;
