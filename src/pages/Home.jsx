import React from 'react';
import "./Home.css";
import HomeCards from '../components/HomeCards';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Accordian from '../components/Accordian';


const Home = () => {
  return (
    <>
      <div className="header">
        <div className="container p-0 m-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="logo">
                <img src="images/Logo.png" alt="" />
              </div>
            </div>
            <div className="col-md-6  d-flex justify-content-end button p-0 m-0 header-right">
              <a href="/signup" className="proj">Get Projects</a>
              <a href="" className="Onboard">Onboard Talent</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title text-center mt-5">
          <p>Success stories</p>
        </div>
        <div className="sub-title text-center">
          <p>Every success journey <br /> we’ve encountered.</p>
        </div>
      </div>
      <div className="container explore-sec">
        <div className="row p-0 m-0">
          <div className="col-md-12 col-lg-7 p-0 m-0 left-section">
            <img className='left-section-img' src="images/aaa.png" alt="" />

            <div className='float-card-1-ctr hover-effect'>
              <div className='float-card-1'>
                <img src="/images/sparkle.svg"/>
                <h2>40%</h2>
                <p>Achieved reduction in project execution time by optimising team availability</p>
              </div>
            </div>

            <div className='float-card-round d-flex justify-content-between hover-effect'>
              <img src="/images/plane.svg" alt="" />
              <div>
              <h3 className='m-0'>10 DAYS</h3>
              <p className='m-0'>Staff Deployment</p>
              </div>
              
            </div>
            
            <div className='float-card-2 hover-effect'>
              <h2>$0.5 <span>MILLION</span></h2>
              <p>Reduced client expenses by saving on hiring and employee costs.</p>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 right-section align-items-center">

            <div className='row w-100'>
              <div className="col-md-12">
                <HomeCards />
              </div>

            </div>
            <div className="row w-100 btn-row">
              <div className="col-md-12 explore-btn">
                <a href="#">Explore More <FontAwesomeIcon style={
                  { paddingLeft: "12px" }
                } icon={faArrowRight}></FontAwesomeIcon></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-faq-sec">
        <img src="images/arrow.svg" alt="" />
        <div className="container">
          <div className="row home-faq-sec-row">
            <div className="col-md-6 faq-left">
              <h5 className='faq-title'> What’s on your mind</h5>
              <h2 className='faq-subtitle'>Ask Questions</h2>
            </div>
            <div className="col-md-6 faq-right">
              <Accordian />
            </div>
          </div>

        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 footer-left d-flex align-items-center">
              <img className='me-3' src="images/copyright.png" alt="" /> Talup 2023. All rights reserved

            </div>
            <div className="col-md-6 footer-right text-end">
              <a href="" className='me-5'>Terms & Conditions</a>
              <a href="">Privacy Policy</a>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home


