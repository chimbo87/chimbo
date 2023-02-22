import React from 'react';
import './Home.css';



function Home() {
  return (
    <>
 <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" id='imgHomeBox'>
      <img src="./assets/home1.jpeg" class="d-block w-100" alt="..."id='imgHome'/>
      <div class="carousel-caption d-none d-md-block" id='homeTextBox'>
        <h1>Development and Maintenance</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Aliquam varius felis at leo varius, sit amet sagittis nisi varius. Nam ultrices, 
          urna sed tristique tempus, magna odio laoreet sapien, at pellentesque massa.</h5>
        <button>Our Work</button>
      </div>
    </div>
    <div class="carousel-item"  id='imgHomeBox'>
      <img src="./assets/home2.jpeg" class="d-block w-100" alt="..."id='imgHome'/>
      <div class="carousel-caption d-none d-md-block" id='homeTextBox'>
        <h1>Civil Engineering</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
          liquam varius felis at leo varius, sit amet sagittis nisi varius. Nam ultrices, 
          urna sed tristique tempus, magna odio laoreet sapien, at pellentesque massa.</h5>
          <button>Our Work</button>
      </div>
    </div>
    <div class="carousel-item"  id='imgHomeBox'>
      <img src="./assets/svs.jpeg" class="d-block w-100" alt="..." id='imgHome'/>
      <div class="carousel-caption d-none d-md-block" id='homeTextBox'>
        <h1>Quantity Surviying</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
          liquam varius felis at leo varius, sit amet sagittis nisi varius. Nam ultrices, u
          rna sed tristique tempus, magna odio laoreet sapien, at pellentesque massa</h5>
          <button>Our Work</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='container-fluid'>
  <div className='container'>
        <div class="row">
          <div class="col" id='missionCard'>
           <div id='innerCard'>
              <i class="far fa-comments"></i>
           </div>
              <h4>Friendly and Customer Support</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Aliquam varius felis at leo varius, sit amet sagittis</p>
          </div>
          <div class="col" id='missionCard'>
          <div id='innerCard'>
              <i class="far fa-paper-plane"></i>
              
           </div>
           <h4>Fast Service Delivery</h4>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aliquam varius felis at leo varius, sit amet sagittis</p>
          </div>
          <div class="col" id='missionCard'>
          <div id='innerCard'>
              <i class="fas fa-laptop-house"></i>
              
           </div>
           <h4>We are Freindly</h4>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aliquam varius felis at leo varius, sit amet sagittis</p>
          </div>
        </div>
        <div class="row">
                <div class="col" id='missionCard'>
                    <div id='innerCard'>
                        <i class="fas fa-tools"></i>
                        
                    </div>
                    <h4>Quality Services</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Aliquam varius felis at leo varius, sit amet sagittis</p>
                </div>
                <div class="col" id='missionCard'>
                <div id='innerCard'>
                        <i class="fas fa-hand-holding-usd"></i>
                        
                    </div>
                    <h4>Affordable Services</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Aliquam varius felis at leo varius, sit amet sagittis</p>
                </div>
                <div class="col"id='missionCard'>
                <div id='innerCard'>
                        <i class="fas fa-drafting-compass"></i>
                    </div>
                    <h4>We are Freindly</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Aliquam varius felis at leo varius, sit amet sagittis</p>
                </div>
              </div>
  </div>
</div>

  <div className='container-fluid' id='homeContainer'>
    <div className='container' id='homeHeadLine'>
      <h2><span>What we</span> do</h2>
        <div class="row" id='homeUl'>
           <div class="col-4" id='homeOfferTxt'>
             <ul>
                  <li><h3>Civil Engineering</h3></li>
                  <li><h3>Development and Maintenance</h3></li>
                  <li><h3>Project Management</h3></li>
                  <li><h3>Renovations</h3></li>
                  <li><h3>Property Management</h3></li>
                  <li><h3>Architectural Designs</h3></li>
                  <li><h3>Houses, Malls & Schools</h3></li>
                  <li><h3>Swimming pools or Ponds</h3></li>
                  <li><h3>Bridges and Gobious</h3></li>
                  <li><h3>Tiling</h3></li>
              </ul>
           </div>
        <div class="col-4" id='homeOfferTxt'>
              <ul>
              <li><h3>Architectural Designs</h3></li>
                  <li><h3>Houses, Malls & Schools</h3></li>
                  <li><h3>Swimming pools or Ponds</h3></li>
                  <li><h3>Bridges and Gobious</h3></li>
                  <li><h3>Tiling</h3></li>
                  <li><h3>Paving</h3></li>
                  <li><h3>Roofing and Ceiling skimming</h3></li>
                  <li><h3>Painting</h3></li>
                  <li><h3>Plumbing</h3></li>
                  <li><h3>House Wiring</h3></li>
              </ul>
        </div>
        <div class="col-4" id='homeOfferTxt'>
              <ul>
                  <li><h3>Paving</h3></li>
                  <li><h3>Roofing and Ceiling skimming</h3></li>
                  <li><h3>Painting</h3></li>
                  <li><h3>Plumbing</h3></li>
                  <li><h3>House Wiring</h3></li>
                  <li><h3>Architectural Designs</h3></li>
                  <li><h3>Houses, Malls & Schools</h3></li>
                  <li><h3>Swimming pools or Ponds</h3></li>
                  <li><h3>Bridges and Gobious</h3></li>
                  <li><h3>Tiling</h3></li>
              </ul>
        </div>
      </div>
      </div>
   </div>
    <div className='container-fluid'>
      <div className='container' id='homeHistory'>
              <div class="row">
              <div class="col">
                <h2>Over <span>10 Years </span>Of Experience</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius felis 
                  at leo varius, sit amet sagittis nisi varius. Nam ultrices, urna sed tristique tempus,
                   magna odio laoreet sapien, at pellentesque massa dolor molestie orci. Pellentesque eu 
                   laoreet ligula. Fusce pulvinar velit a ligula vehicula maximus. Sed nec lacinia odio. 
                   Morbi euismod neque eu porta mollis. In et sem at sem rhoncus finibus id in dui.
                    Suspendisse blandit tempor libero vitae posuere. Donec gravida sapien eget semper molestie.
                     Donec lorem nulla, malesuada a mauris egestas, maximus molestie dui. Fusce bibendum urna
                      tempor metus posuere porttitor. Vivamus congue augue vel quam placerat scelerisque.
                    Quisque volutpat arcu ex, vitae elementum erat lobortis non. Duis ante libero, elementum
                    in euismod nec, sollicitudin eu turpis. Maecenas non neque eget est pretium lacinia. Suspendisse potenti. Maecenas pretium lobortis velit quis sodales. Sed vitae enim eu nibh egestas egestas. Maecenas ultricies gravida vestibulum. Morbi vitae pellentesque tortor, placerat pulvinar justo. Ut sit amet eleifend leo. Nullam malesuada tortor in tortor maximus ullamcorper. Donec ut lorem et justo rhoncus hendrerit eu vitae leo.

                    </p>
              </div>
              <div class="col">
                  <img src="./assets/home2.jpeg" class="figure-img img-fluid rounded" alt="..."/>
              </div>
            </div>
            </div>
        </div>

        <div className='container-fluid' id='footer'>
<div class="container text-start">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-6" id='footerWrap'>
      <h2><span>BuagoPula Proper</span>ties</h2>
      <p><b>BuagoPula Property</b>  has been around for over a decade now and was
         established to help provide people with a full turnkey solution with regards to 
         property maintenance and development. We have also kept a strong core focus on quality in terms of 
         everything that we do. This has helped us to build a strong reputable 
        brand over the years in countries include Zimbabwe, Zambia and Botswana and one that clients can trust to deliver time and time again.</p>
      <div id='socialIcons'>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-whatsapp"></i>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3" id='footerWrap1'>
    <h2><span>Useful Li</span>nks</h2>
     <p><a href='#'>HOME</a></p>
     <p><a href='#'>ABOUT</a></p>
     <p><a href='#'>SERVICES</a></p>
     <p><a href='#'>PROJECTS</a></p>
     <p><a href='#'>REVIEWS</a></p>
     <p><a href='#'>CONTACT</a></p>
    </div>
    <div class="col-12 col-md-6 col-lg-3" id='footerWrap2'>
    <h2><span>Contact </span>Us</h2>
          <div id='footerIcons'>
              <i class="fas fa-home"></i>
              <p>108 Central Avenue,<br></br>
                Harare Zimbabwe</p>
          </div>
          <div id='footerIcons'>
              <i class="fas fa-envelope-square"></i>
              <div>
                  <p>buagopulaproperties@gmail.com<br></br>
                  support@buagopulaproperties.co.zw</p>
              </div>
             
          </div>
          <div id='footerIcons'>
             <i class="fas fa-phone"></i>
             <div>
                <p>+263 772 000 000<br></br>
                +263 772 000 000<br></br>
                +263 772 000 000</p>
             </div>
           </div>
    </div>
  </div>
</div>
</div>
<div className='container-fluid' id='footerTall'>
     <div className='container'id='footerRty'>
      <p>All rights reserved.BuagoPula Properties 2023. Designed and Developed by Chimbo</p>
     </div>
</div>

  
    </>
  )
}

export default Home