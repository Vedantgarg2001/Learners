import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
const showAlert = () =>{
  alert("Congratulations!!You have subscribed to E Learners.")
}
const Newsletter = () => {
  return (
    <section className="newsletter_section">
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" />
              <button className="btn btn-success" onClick={showAlert}>Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
