import React from 'react';
import './style.scss';
import Header from './Componets/header';
import Banner from './Componets/banner';
import Preview from './Componets/preview';
// import Mylist from './Componets/mylist';

function App() {
  return (
    <>
      <Banner/>
      <Preview/>
      {/* <Mylist/> */}
      <Header/>
     
    </>
  );
}

export default App;
