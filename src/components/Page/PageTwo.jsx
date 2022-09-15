import React from 'react'
import profile from '../../img/picture.jpg'
function PageTwo() {
  return (
    <div className='container h-100 d-flex justify-content-center align-items-center w-75'>
        <div className="row">
            <div className="col-lg-8">
              <div className="row">
              <h3 className='text-uppercase align-self-start'>My Learning Journey</h3>
                <p className='desc'>I'm started learning web developer at building wordpress ecommerce based project and then finished Binar Academy Full Stack Web Developer Program on July 2022</p>
              </div>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className='p-3'>
                      <li className='font-weight-bold skills'>Javascript ES6</li>
                      <li className='font-weight-bold skills'>ExpressJs</li>
                      <li className='font-weight-bold skills'>ReactJs</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                  <ul className='p-3'>
                    <li className='font-weight-bold skills'>NextJs</li>
                    <li className='font-weight-bold skills'>MySQL</li>
                    <li className='font-weight-bold skills'>POSTGRESQL</li>
                  </ul>
                </div>
              </div>
          </div>
          <div className="col-4">
            <img src={profile} alt="" className='profile side'/>
          </div>
        </div>
        <div className="row">
        </div>
    </div>
  )
}

export default PageTwo  