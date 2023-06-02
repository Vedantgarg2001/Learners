import React, { useEffect } from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToScroll: 1,
  };
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('access')){
      navigate('/login')
    }
  })
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" md="12" className="m-auto">
            <div className="testimonial__wrapper">
              <div className="testimonial__img col-12 col-sm-6">
                <img src={img} alt="" className="testimoni_image" />
              </div>

              <div className="testimonial__content col-11 col-sm-6">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      Online education is a procedure of gaining skills and knowledge through 
                      electronic devices like computers, mobiles, laptops, etc using the internet.
                       Online education makes it possible for tutors or mentors to reach all the 
                       students more flexibly and teach them the relevant skills more efficiently,
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                       Today there is such an easy way to get an education that
                       we do not need to go anywhere to get an education. To 
                       take education, we can get education from the teacher 
                       just sitting at home from the online mood.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      Online education is being achieved through computers in a way 
                      with the facility of the internet. Computers and many types of
                       gadgets are used for online education. But for this the quality
                       of the internet should be good, we have to pay attention to this.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
