import React from 'react'
import Typewriter from "typewriter-effect";
import saurav from '../assets/sauraval.png'
import '../Components/Home.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';


function Home() {
  return (
    <div className='row'>
      <section id='home'>
        <div className="main col-lg-4 col-sm-12 " class='heading'>
          <h1 className='text-center m-5' >
            Hello,I am <span className='text-primary fw-bolder' style={{ fontSize: '80px' }}>Saurav AL</span>

          </h1>
          <div className='text-center m-5  fs-1  fw-bolder '>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("MEARN Stack Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("API Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Full Stack Web Developer")
                  .start();
              }}
            />
          </div>
          <p className='text-center m-3 ' style={{ textAlign: 'justify' }}>An adept ME(A)RN Stack Developer, proficient in a diverse array of programming tools and languages, <br />adeptly navigates the intricacies of both backend and frontend development needs.</p>
        </div>
      </section>


      <section id='about' class='heading2'>
        <h1 className='text-center m-5 fw-bold '>
          About
          <span className='text-primary fw-bold ms-2'>
            Me
          </span>
        </h1>
        <div className="row" style={{ margin: '100px' }}>
          <div className="col-lg-6   ">
            <img src={saurav} alt="" width={'55%'} height={'450px'} style={{ marginLeft: '40px' }} />
          </div>
          <div className="col-lg-6">
            <p style={{ textAlign: 'justify' }} className='text-center m-3 fs-3 '> Hi Everyone, My name is <span className='text-primary fw-bold '>Saurav AL</span> and I am from <span className='text-primary fw-bold'>Thiruvananthapuram, Kerala (India)</span>. I have completed my Under graduation in <span className='text-primary fw-bold'>BTech Computer Science</span> from <span className='text-primary fw-bold'>John Cox Memorial CSI Institute of Technology</span>. Then I joined full stack development course by <span className='text-primary fw-bold'>Luminar TechnoLab</span> a military type coding school.</p>
          </div>
        </div>
      </section>
      <section id='skill'>
        <h1 className='text-center text-primary fw-bold m-5'>Skills</h1>
        <div class="skills">
          <div className="row d-flex flex-row">
            <div className="col-sm-4 m-3">
              <img width={'60%'} src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png" alt="" />

            </div>
            <div className="col-sm-4 m-3">
              <img width={'60%'} src="https://clipground.com/images/html-logo-png-3.png" alt="" />

            </div>
            <div className="col-sm-4 m-3">
              <img width={'60%'} src="https://logospng.org/download/css-3/logo-css-3-2048.png" alt="" />

            </div>
            <div className="col-sm-4 m-3">
              <img width={'60%'} src="https://cdn.freebiesupply.com/logos/large/2x/bootstrap-4-logo-png-transparent.png" alt="" />

            </div>
            
            <div className="col-sm-4 m-3">
              <img width={'60%'} src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png" alt="" />

            </div>
            <div className="col-sm-4 m-3">
              <img width={'60%'} src="https://pluspng.com/img-png/logo-mongodb-png-mongo-db-badge-sticker-600.png" alt="" />

            </div>
            <div className="col-sm-4 m-3">
              <img width={'60%'} src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png" alt="" />
            </div>
          </div>
        </div>

      </section>

      <section class="project" id='project'>
        <h1 className='text-center text-primary fw-bold m-5' >Projects</h1>
        <div className="row m-3 d-flex flex-row justify-content-evenly  ">
          <div className="col-lg-4 m-3 " style={{ height: '550px', width: '500px' }}>
            <MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?cs=srgb&dl=pexels-pixabay-262978.jpg&fm=jpg' fluid alt='...' />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle className='text-center fw-bold text-primary'>Restaurant</MDBCardTitle>
                <MDBCardText>
                  Delighted to unveil my newest creation in ReactJS :- A Restaurant App that showcases finest dining in town by fetching details from JSON-file. This project has been an incredible journey of growth and learning for me.        </MDBCardText>
                <MDBBtn href='https://saurav-restaurant-app.netlify.app/' target='_blank' className='btn btn-light text-primary border-primary ' style={{ marginLeft: '70px' }}>See this Live</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-lg-4 m-3">
            <MDBCard style={{ height: '550px', width: '500px' }}>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://www.thecalculatorsite.com/images/facebook-share-images/homepage.jpg' fluid alt='...' />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>Calculator</MDBCardTitle>
                <MDBCardText>
                  Simple Calculator        </MDBCardText>
                <MDBBtn href='https://661ffc38ccc8a5f85c2c3bcb--inspiring-kringle-15aa5a.netlify.app/' target='_blank' className='btn btn-light text-primary border-primary ' style={{ marginLeft: '70px' }}>See this Live</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-lg-4 m-3">
            <MDBCard style={{ height: '550px', width: '500px' }}>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://media.istockphoto.com/photos/quiz-picture-id933914672?k=6&m=933914672&s=170667a&w=0&h=G5mWSMz29oTM4l2FxONE4tgOO4jDLqxyf5kNuxCpy48=' fluid alt='...' />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle className='text-center fw-bold text-primary'>Quiz App</MDBCardTitle>
                <MDBCardText>
                  This project allowed me to explore the art of responsive website . By implementing media queries in my CSS code I was able to create my website more responsive.        </MDBCardText>
                <MDBBtn href='https://661ff88d7b10266b6f002496--gregarious-froyo-88cd5c.netlify.app/' target='_blank' className='btn btn-light text-primary border-primary ' style={{ marginLeft: '70px' }}>See this Live</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-lg-4 m-3">
            <MDBCard style={{ height: '550px', width: '500px' }}>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src='https://wallpapercave.com/wp/wp3537586.jpg' fluid alt='...' />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle className='text-center fw-bold text-primary'>E-Commerce Website</MDBCardTitle>
                <MDBCardText>
                  A dynamic e-commerce website built with React for seamless user experience and efficient product browsing.        </MDBCardText>
                <MDBBtn href='https://661ffafb5fc4e660605038ef--frolicking-dusk-bd6fd4.netlify.app/' target='_blank' className='btn btn-light text-primary border-primary ' style={{ marginLeft: '70px' }}>See this Live</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

        </div>
      </section>
      <section id='get'>
        <h1 className='text-center m-5 fw-bold '>
          GET IN
          <span className='text-primary fw-bold ms-2'>
            TOUCH
          </span>
        </h1>
        <div className='d-flex icon-contact' >
          <div class='beep ' >
            <a href="https://www.linkedin.com/in/saurav-ambujakshan-286a791aa/" target='_blank'>
            <i  class="fa-brands fa-linkedin "></i>

            </a>

          </div>
          <div className="beep2">
          <a  href="https://github.com/sauraval" target='_blank'>
          <i  class="fa-brands fa-github "></i>

            </a>

          </div>
          <div className="beep2">
          <a  href="https://www.instagram.com/saurav_a_l/" target='_blank'>
          <i class="fa-brands fa-instagram"></i>

            </a>
          </div>
         
        </div>
        <div className='text-center'>
        <i  class="fa-regular fa-envelope text-primary me-2"></i>
        alsaurav2001@gmail.com
        </div>
      </section >
    </div >
  )
}

export default Home