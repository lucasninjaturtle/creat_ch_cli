import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios';
import CatalogContainer from './Components/CatalogContainer/CatalogContainer';

function App() {

 
  return (
    <div className="App">
      <div> Hello ascii emoji world</div>


      <CatalogContainer/>
    </div>
  );
}

export default App;
