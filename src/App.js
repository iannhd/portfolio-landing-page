
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';


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
