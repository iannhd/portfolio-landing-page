
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Slider from './components/Slider/Slider';
import CarouselPage from './components/Carousel/Carousel';
import { LeftSidebar } from './components/LeftSidebar/LeftSidebar';


function App() {

  const clicked = () => {
    console.log('masuk');
}
   return(
    <div>
      <Navbar/>
        <div className='bg'>
            <LeftSidebar/>
            <CarouselPage/>
        </div>
      </div> 
   )
}

export default App;
