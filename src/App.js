
import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Carousel from './components/Carousel/Carousel';
import { Button } from '@material-ui/core';

function App() {

   return(
    <div className='bg'>
      <Navbar/>
    <div className='mt-5'>
      <Content/>
    </div>
    </div>
   )
}

export default App;
