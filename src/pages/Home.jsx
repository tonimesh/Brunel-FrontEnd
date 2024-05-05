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
          <div className="col-md-12 col-lg-6 p-0 m-0 left-section">
            <img src="images/left-section.png" alt="" />
          </div>
          <div className="col-md-12 col-lg-6 right-section align-items-center">


            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Enhance fortune 50 company’s insights teams research capabilities</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-none d-md-block">
                    <h5>...</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Kill fortune 50 company’s insights teams research capabilities</h5>
                  </div>
                </div>

              </div>
            </div> */}

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


