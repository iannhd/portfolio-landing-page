import React from 'react'
import './Pagestyle.css'
import {Button} from 'reactstrap'
function PageOne() {


  const clicked = () => {
    
  }

  return (
    <div className='container h-100 w-75 d-flex flex-column justify-content-center align-items-center'>
        <h5 className='align-self-start'>Hello, my name is</h5>
        <h1 className='mt-3 align-self-start'>Ihdhar Nur Hadyan</h1>
        <div>
        <p className='desc'>I'm a web developer focused on front end development, based in Yogyakarta Indonesia. Currently experienced in ReactJs and NextJs with eagerness to learn other JavaScript based projects</p>
        </div>
        <Button color='success' className="align-self-center" onClick={clicked}>
        <a href="https://linkedin.com/in/ihdhar-nur-hadyan-802398110">Contact Me</a>
        </Button>
    </div>
  )
}

export default PageOne  