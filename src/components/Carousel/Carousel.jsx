import React from 'react'
import { useState } from 'react'
import slideOne from '../../img/test.png'
import PageOne from '../Page/PageOne'
import PageTwo from '../Page/PageTwo'
import './Carousel.css'



function Carousel() {

    const words = [
        {id: 0, value: <PageOne/>},
        {id: 1, value: <PageTwo/>},
        {id: 2, value: "Cherry"},
    ]

    const [wordData, setWordData] = useState(words[0].value)

    const handleClick = (index) => {

        const wordSlider = words[index].value
        setWordData(wordSlider)
        console.log(index)
    }

    return (
        <div>
        <div>{wordData}</div>
        <div className='d-flex align-items-center justify-content-center'>
            {words.map((data, i) => { 
                return(
                    <h1 key={data.id}onClick={()=>handleClick(i)}>.</h1>
                )})}
        </div>
        </div>
  )
}

export default Carousel