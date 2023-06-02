import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "A01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    yurl:"https://www.youtube.com/watch?v=HVjjoMvutj4",
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "A02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    yurl:"https://www.youtube.com/watch?v=HcOc7P5BMi4",
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "A03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    yurl:"https://www.youtube.com/watch?v=4vLHe-25ll0",
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "A04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    yurl:"https://www.youtube.com/watch?v=iA1ndcZls4Y",
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section className="k">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard  item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
