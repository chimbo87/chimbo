import React from 'react'
import './Review.css';


function Reviews() {
  return (
    <>
       <div className='container-fluid' id='aboutBox'>
              <div className='container' id='aboutTxt'>
                    <h1>What are clients say</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius
                       felis at leo varius, sit amet sagittis nisi varius. Nam ultrices, 
                      urna sed tristique tempus, magna odio laoreet sapien, at pellentesque massa</h5>
              </div>
        </div>
       
  <div className='container-fluid' id='chartBox'>
        <div class="container text-center" id='chartBoxInner'>
        <div class="row">
          <div class="col" id='abtChart'>
          <i class="fas fa-chart-pie"></i>
          <h4>+ 1000<br></br>Projects Completed</h4>
          </div>
          <div class="col" id='abtChart'>
          <i class="fas fa-user-friends"></i>
          <h4>+ 1000<br></br>Projects Completed</h4>
          </div>
          <div class="col" id='abtChart'>
          <i class="fas fa-chart-line"></i>
          <h4>+ 1000<br></br>Projects Completed</h4>
          </div>
        </div>
      </div>
  </div> 
    

<div className='container'>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" id='reviewBox'>
            <img src="./assets/home1.jpeg" class="d-block w-100" alt="..." id='reviewImg'/>
              <div class="carousel-caption d-none d-md-block" id='homeTextBox'>
                <h1>Development and Maintenance</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam varius felis at leo varius, sit amet sagittis nisi varius. Nam ultrices, 
                  urna sed tristique tempus, magna odio laoreet sapien, at pellentesque massa.</h5>
              </div>
          </div>
          <div class="carousel-item" id='reviewBox' >
            <img src="./assets/home1.jpeg" class="d-block w-100" alt="..." id='reviewImg'/>
          </div>
          <div class="carousel-item" id='reviewBox'>
            <img src="./assets/home1.jpeg" class="d-block w-100" alt="..." id='reviewImg'/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
  </div>
</div>
    </>
  )
}

export default Reviews