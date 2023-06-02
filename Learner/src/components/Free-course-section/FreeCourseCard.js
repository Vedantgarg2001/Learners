import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";

const FreeCourseCard = (props) => {
  const { imgUrl, yurl,title, students, rating } = props.item;
  const [runVideo,setrunVideo] = useState(true);
  const runingvideo = ()=>{
    setrunVideo(false);
  }
 

  return (
    <div className="single__free__course">
    {runVideo?(<div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn btn-success free__btn" onClick={runingvideo}>Free</button>
      </div>): (<ReactPlayer
                  url={yurl}
                  controls
                  width="100%"
                  height="350px"
                />)}
     
 
       <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <i className="ri-user-line"></i> {students}k
          </span>

          <span className=" d-flex align-items-center gap-2">
            <i className="ri-star-fill"></i> {rating}k
          </span>
        </div>
      </div>  
      </div>
  );
};

export default FreeCourseCard;
