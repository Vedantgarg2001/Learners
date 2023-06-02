import React, { useEffect } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('access')){
      navigate('/login')
    }
  })
  return (
    <section className="s">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img ">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              Professional courses set an individual apart from other candidates. 
              These courses provide the best skill sets that are required to survive in any field.
               They improve the candidate’s personality and enhance the quality of their CVs.
                We all know in today’s situation where jobs are limited and candidates are unlimited,
                 every individual needs special skills that set them apart from the crowd.
                  It makes their survival easier and their job secured. It helps an individual 
                  shine brighter than his or her competitors.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={10} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={10} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={10} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={10} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
};

export default AboutUs;
