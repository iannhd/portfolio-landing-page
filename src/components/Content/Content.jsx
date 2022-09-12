import React, { Component } from "react";
import Slider from "react-slick";
import PageOne from "../Page/PageOne";
import PageThree from "../Page/PageThree";
import PageTwo from "../Page/PageTwo";
import './content.css'

function Content () {

    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div>
        <Slider {...settings}>
          <div>
            <PageOne/>
          </div>
          <div>
            <PageTwo/>
          </div>
          <div>
            <PageThree/>
          </div>
          <div>
            4
          </div>
        </Slider>
      </div>
    );
  }
export default Content