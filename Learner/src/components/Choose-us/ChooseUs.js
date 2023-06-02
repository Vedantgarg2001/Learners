import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('access')){
      navigate('/login')
    }
  })
  return (
    <section className="choose_container_section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                 Online education enables the teacher and the student to set their own learning pace,
                 and there’s the added flexibility of setting a schedule that fits everyone’s agenda.
                 As a result, using an online educational platform allows for a better balance of
                 work and studies, so there’s no need to give anything up. Studying online teaches
                 you vital time management skills, which makes finding a good work-study balance
                 easier. Having a common agenda between the student and teacher can also prompt 
                 both parties to accept new responsibilities and have more autonomy. 
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=nzV1NmhC7ik"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    className="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
