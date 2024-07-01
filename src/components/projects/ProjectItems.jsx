import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <div className="video_Container">
        <video
          className="project__vid"
          src={item.video}
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
        ></video>
      </div>
      <h3 className="project__title">{item.title}</h3>
      <div className="project__buttons-container">
        <a href="#" className="project__button">
          Demo <HiOutlineArrowSmRight className="project__button-icon" />
        </a>
        <a href="#" className="project__button">
          Github <FaGithub className="project__button-icon" />{" "}
          {/* GitHub icon */}
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
