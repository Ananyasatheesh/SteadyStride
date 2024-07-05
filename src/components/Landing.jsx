import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import myImage1 from '../assets/img1.jpg'
import myImage2 from '../assets/img2.jpg'
import myImage3 from '../assets/img3.jpg'
import ImageCard from './UserPage'


const Landing = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <h1>STEADY STRIDE</h1>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <DropdownButton
              id="dropdown-basic-button"
              title="SIGN IN"
              className="mt-3"
            >
              <Dropdown.Item href="/adlogin">Admin</Dropdown.Item>
              <Dropdown.Item href="/userLanding">User</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
      {/* <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={myImage1} alt="My Image" />
    </div>
    <div class="carousel-item">
    <img src={myImage2} alt="My Image" />
    </div>
    <div class="carousel-item">
    <img src={myImage3} alt="My Image" />

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
{/* </div> */}
<div class="m-5">
<Carousel>
<Carousel.Item>
        <img
          className="d-block w-100"
          src={myImage1}
          alt="First slide"
          height={600}
          width={100}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myImage2}
          alt="First slide"
          height={600}
          width={100}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={myImage3}
          alt="First slide"
          height={600}
          width={100}
        />
        
      </Carousel.Item>
      
      </Carousel>
      <br/>
      <h1 class="text-center">COURSES AVAILABLE</h1 >
      <ImageCard/>
      </div>
    </>
  )
}

export default Landing
