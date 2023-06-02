import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Easy learning exists to help you succeed in life. Each course has been hand-tailored to teach a specific skill. I hope you agree!We try to create a project-based course that helps you to learn professionally and make you fell as a complete developer.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "If you have general questions or are experiencing issues during the course creation and management process, please reach out to our team at instructorsupport@udemy.com. You can expect to hear back in 1-2 business days.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "When you complete a learners course, you will receive a certificate of completion, which you can share with your friends, relatives, co-workers and potential employers!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section className="c">
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
