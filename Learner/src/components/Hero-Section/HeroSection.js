
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";
import {Link,useNavigate} from 'react-router-dom'
import { useEffect } from "react";


const HeroSection = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('access')){
      navigate('/login')
    }
  })
  return (
    <section className="f">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-3 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
              An electronic learning platform is an integrated set of interactive online services
               that provide trainers, learners, and others involved in education with information,
                tools, and resources to support and enhance education delivery and management. 
                One type of eLearning platform is a learning management system (LMS).
              </p>
            </div>
            <div  className="search">
              <input type="text" placeholder="Search" />
              <Link className="btn btn-success" rel="" type="" to="https://www.google.com" target="blank">Search</Link>
            
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
