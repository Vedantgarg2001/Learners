import React, { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const CourseCard = (props) => {
  const { imgUrl, title, yurl, lesson, students, rating } = props.item;
  const [runVideo,setrunVideo] = useState(true);
  const runingvideo = ()=>{
    setrunVideo(false);
  }
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('access')){
      navigate('/login')
    }
  })

  return (
    <div className="single__course__item">
      {runVideo?(<div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn btn-success popular_free__btn" onClick={runingvideo}>Free</button>
      </div>):(<ReactPlayer
                  url={yurl}
                  controls
                  width="100%"
                  height="350px"
                />) }
      

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i className="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i className="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {rating}K
          </p>

        
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
