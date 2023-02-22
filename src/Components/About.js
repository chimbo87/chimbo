import React from 'react';
import './About.css'


function About() {

  return (
  <>
        <div className='container-fluid' id='aboutBox'>
              <div className='container' id='aboutTxt'>
                    <h1>About Us</h1>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius
                       felis at leo varius, sit amet sagittis nisi varius. Nam ultrices, 
                      urna sed tristique tempus, magna odio laoreet sapien, at pellentesque massa</h5>
              </div>
        </div>

    <div className="container" id='about'>
    <h2>Who are we ?</h2>
      <div class="row">
         <div class="col-12 col-md-6 col-lg-6" id='homeTxt'>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius felis at leo varius, sit amet sagittis nisi varius. Nam ultrices, urna sed tristique tempus, magna odio laoreet sapien, at pellentesque massa dolor molestie orci. Pellentesque eu laoreet ligula. Fusce pulvinar velit a ligula vehicula maximus. Sed nec lacinia odio. Morbi euismod neque eu porta mollis. In et sem at sem rhoncus finibus id in dui. Suspendisse blandit tempor libero vitae posuere. Donec gravida sapien eget semper molestie. Donec lorem nulla, malesuada a mauris egestas, maximus molestie dui. Fusce bibendum urna tempor metus posuere porttitor. Vivamus congue augue vel quam placerat scelerisque. Quisque volutpat arcu ex, vitae elementum erat lobortis non.

                Duis ante libero, elementum in euismod nec, sollicitudin eu turpis. Maecenas non neque eget est pretium lacinia. Suspendisse potenti. Maecenas pretium lobortis velit quis sodales. Sed vitae enim eu nibh egestas egestas. Maecenas ultricies gravida vestibulum. Morbi vitae pellentesque tortor, placerat pulvinar justo. Ut sit amet eleifend leo. Nullam malesuada tortor in tortor maximus ullamcorper. Donec ut lorem et justo rhoncus hendrerit eu vitae leo.</p>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius felis at leo varius, sit amet sagittis nisi varius. Nam ultrices, urna sed tristique tempus, magna odio laoreet sapien, at pellentesque massa dolor molestie orci. Pellentesque eu laoreet ligula. Fusce pulvinar velit a ligula vehicula maximus. Sed nec lacinia odio. Morbi euismod neque eu porta mollis. In et sem at sem rhoncus finibus id in dui. Suspendisse blandit tempor libero vitae posuere. Donec gravida sapien eget semper molestie. Donec lorem nulla, malesuada a mauris egestas, maximus molestie dui. Fusce bibendum urna tempor metus posuere porttitor. Vivamus congue augue vel quam placerat scelerisque. Quisque volutpat arcu ex, vitae elementum erat lobortis non.

            Duis ante libero, elementum in euismod nec, sollicitudin eu turpis. Maecenas non neque eget est pretium lacinia. Suspendisse potenti. Maecenas pretium lobortis velit quis sodales. Sed vitae enim eu nibh egestas egestas. Maecenas ultricies gravida vestibulum. Morbi vitae pellentesque tortor, placerat pulvinar justo. Ut sit amet eleifend leo. Nullam malesuada tortor in tortor maximus ullamcorper. Donec ut lorem et justo rhoncus hendrerit eu vitae leo.</p>
        </div>
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



    <div className='container' id='faq'>
      <h2>Frequent Asked Questions</h2>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h4>What payment methods do you accept ?</h4>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h4>Do you have flexible payment plans ?</h4>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <h4>Do you cover remote places ?</h4>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
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

export default About