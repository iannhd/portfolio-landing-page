import React from 'react'
import profile from '../../img/picture.jpg'
function PageTwo() {
  return (
    <div className='container w-75'>
         <h3>My Learning Journey</h3>
        <div className="row">
            <div className="col-9">
            <p className='desc'>I'm started learning web developer at building wordpress ecommerce based project and then finished Binar Academy Full Stack Web Developer Program on July 2022</p>
            </div>
            <div className="col-3 side">
                <img src={profile} alt="" className='profile'/>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <ul className='p-3'>
            <li className='font-weight-bold'>Javascript ES6</li>
            <li className='font-weight-bold'>ExpressJs</li>
            <li className='font-weight-bold'>ReactJs</li>
            </ul>
            </div>
            <div className="col">
            <ul className='p-3'>
            <li className='font-weight-bold'>NextJs</li>
            <li className='font-weight-bold'>MySQL</li>
            <li className='font-weight-bold'>POSTGRESQL</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default PageTwo  