import React from 'react'
import GP from '../images/team/gp.jpg'
import RP from '../images/team/rp2.png'
import RK from '../images/team/rk.jpeg'
import AN from '../images/team/an.jpeg'
import SP from '../images/team/sp.jpeg'
import ld from '../images/team/linkedin.png'
import gh from '../images/team/github.png'
import Navbar from "./navbar";
import Footer from './Footer'

import './style.css'
const about = () => {
  return (

    
    
    <div>
        <Navbar/>
        <div className='about'>
        <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className='all_about'>


        {/* <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up"
          data-aos-delay="200">
          <div className="content">
            <h3>Who am I</h3>
            <h2>Prefinal year Computer Science undergrad student @PICT, Pune.</h2>
            <p>
              I am looking for a position in a organization where I can launch my career and learn new skills, expand my knowledge, contribute my ideas and be mentored towards a successful career.
            </p>

          </div>
        </div> */}


        <div className="col-lg-2 col-md-5 d-flex team">
          <div className="member" >

            <div className="member-img">
              <img src={GP} className="img-fluid profile-images" alt=""/>
              <div className="social">

                <a href="https://www.linkedin.com/in/ruturaj-patil-53b2021b4" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.github.com/Ruturaj-7802" target="__blank"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            <div className="member-info">
              <h4>Ghanshyam Patil</h4>
              <div>
                  <p> </p>
                </div>
              {/* <p>Pursuing my engineering degree in Computer Science. Have Good knowledge of Data Structures & 
                Algorithms, Competitive Programming, Web Devlopement & MERN stack</p> */}
                <div className='iconss'>
              
              
                <a href = "https://www.linkedin.com/in/ghanashyam-patil-9b7280230/"><img src={ld} className="img-fluid" alt="" width = "45vw" height = "45vh"/> </a>
              <a href = "https://www.github.com/patil-gm"><img src={gh} className="img-fluid" alt="" width = "40vw" height = "40vh"/>  </a>
              </div> 
                <div>
                  <p> </p>
                </div>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 d-flex align-items-stretch team">
          <div className="member" >

            <div className="member-img">
              <img src={RK} className="img-fluid profile-images" alt=""/>
              <div className="social">

                <a href="https://www.linkedin.com/in/ruturaj-patil-53b2021b4" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.github.com/Ruturaj-7802" target="__blank"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            <div className="member-info">
              <h4>Rushikesh Khiste</h4>
              <div>
                  <p> </p>
                </div>
              {/* <p>Pursuing my engineering degree in Computer Science. Have Good knowledge of Data Structures & 
                Algorithms, Competitive Programming, Web Devlopement & MERN stack</p> */}
                <div className='iconss'>
                <a href = "https://www.linkedin.com/in/rushikesh-khiste-091302230/"><img src={ld} className="img-fluid" alt="" width = "45vw" height = "45vh"/> </a>
              <a href = "https://github.com/RushikeshKhiste"><img src={gh} className="img-fluid" alt="" width = "40vw" height = "40vh"/>  </a>
              </div> 
                <div>
                  <p> </p>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 d-flex team">
          <div className="member" >

            <div className="member-img">
              <img src={RP} className="img-fluid profile-images" alt=""/>
              <div className="social">

                <a href="https://www.linkedin.com/in/ruturaj-patil-53b2021b4" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.github.com/Ruturaj-7802" target="__blank"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            <div className="member-info">
              <h4>Ruturaj Patil</h4>
              <div>
                  <p> </p>
                </div>
              {/* <p>Pursuing my engineering degree in Computer Science. Have Good knowledge of Data Structures & 
                Algorithms, Competitive Programming, Web Devlopement & MERN stack</p> */}
                <div className='iconss'>
                <a href = "https://www.linkedin.com/in/ruturaj-patil-53b2021b4"><img src={ld} className="img-fluid" alt="" width = "45vw" height = "45vh"/> </a>
              <a href = "https://www.github.com/Ruturaj-7802"><img src={gh} className="img-fluid" alt="" width = "40vw" height = "40vh"/>  </a>
              </div> 
                <div>
                  <p> </p>
                </div>
            </div>

          </div>
        </div>
        <div className="col-lg-2 col-md-6 d-flex align-items-stretch team">
          <div className="member" >

            <div className="member-img">
              <img src={AN} className="img-fluid profile-images" alt=""/>
              <div className="social">

                <a href="https://www.linkedin.com/in/ruturaj-patil-53b2021b4" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.github.com/Ruturaj-7802" target="__blank"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            <div className="member-info">
              <h4>Abhishek Nalawade</h4>
              <div>
                  <p> </p>
                </div>
              {/* <p>Pursuing my engineering degree in Computer Science. Have Good knowledge of Data Structures & 
                Algorithms, Competitive Programming, Web Devlopement & MERN stack</p> */}
                <div className='iconss'>
                <a href = "https://www.linkedin.com/in/nalawade-abhishek/"><img src={ld} className="img-fluid" alt="" width = "45vw" height = "45vh"/> </a>
              <a href = "https://GitHub.com/abhi0627"><img src={gh} className="img-fluid" alt="" width = "40vw" height = "40vh"/>  </a>
              </div> 
                <div>
                  <p> </p>
                </div>
            </div>

          </div>
        </div>
        <div className="col-lg-2 col-md-6 d-flex align-items-stretch team">
          <div className="member" >

            <div className="member-img">
              <img src={SP} className="img-fluid profile-images" alt=""/>
              <div className="social">

                <a href="https://www.linkedin.com/in/ruturaj-patil-53b2021b4" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.github.com/Ruturaj-7802" target="__blank"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            <div className="member-info">
              <h4>Sanket Pole</h4>
              <div>
                  <p> </p>
                </div>
              {/* <p>Pursuing my engineering degree in Computer Science. Have Good knowledge of Data Structures & 
                Algorithms, Competitive Programming, Web Devlopement & MERN stack</p> */}
                <div className='iconss'>
                <a href = "https://www.linkedin.com/in/sanket-pole-5268b8205"><img src={ld} className="img-fluid" alt="" width = "45vw" height = "45vh"/> </a>
              <a href = "https://github.com/Sanketpole123"><img src={gh} className="img-fluid" alt="" width = "40vw" height = "40vh"/>  </a>
              </div> 
                <div>
                  <p> </p>
                </div>
            </div>

          </div>
        </div>
        

      </div>
    </div>
        </div>
    
    
    <Footer/>
    </div> 
  )
}

export default about