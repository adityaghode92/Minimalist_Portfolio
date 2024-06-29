import React from "react";
// import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <div className="video_Container">
        <video
          className="project__img"
          src={item.video}
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
        ></video>

        {/* <img className="project__img" src={item.image} alt="" /> */}
      </div>

      <h3 className="project__title">{item.title}</h3>
      {/* <a href="#" className="project__button">
        Demo <HiOutlineArrowSmRight className="project__button-icon" />
      </a> */}
    </div>
  );
};

export default ProjectItems;
