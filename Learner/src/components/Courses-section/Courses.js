import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    yurl:"https://www.youtube.com/watch?v=spGDKJNq-EE",
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    yurl:"https://www.youtube.com/watch?v=qvQie2QP5Vg",
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    yurl:"https://www.youtube.com/watch?v=iA1ndcZls4Y",
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section className="d">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-70">
                <h2>Our Popular Courses</h2>
                <p>
                 Learners is one of the largest online learning platforms for professional learning.
                 According to the company, they have 57 million registered users. An analysis by
                  Class Central shows they’ve launched over 200,000 courses since 2010.
                </p>
              </div>

              
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6" key={item.id}>
              <CourseCard  item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
