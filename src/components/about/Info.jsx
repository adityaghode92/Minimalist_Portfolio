import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
      <a href="#qualification" >
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">InternShips</h3>
            <span className="about__subtitle">2+</span>
        </div>
        </a>
        <a href="#portfolio" >
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">3+ Projects</span>
        </div>
        </a>
        <a href="https://leetcode.com/adityaghode92/" target="_blank" rel="noreferrer" >
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">LeetCode</h3>
            <span className="about__subtitle">100 Problems+</span>
        </div>
        </a>
    </div>
  );
}

export default Info;