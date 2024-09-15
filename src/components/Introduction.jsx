/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Idea from "/image/theBigIdea1.png";
import Star from "/image/sataGra5.png";
import Arrow from "/image/arrow.png";
const Introduction = () => {
  return (
    <div className="introduction bg-[#150e28] text-white border-b border-[#753386]">
      <div className="into-image">
        <img src={Idea} alt="" className="" />
      </div>

      <div className="into">
        <h2 className="text-2xl font-bold ">Introduction to getlinked </h2>
        <h2 className="text-[#D434FE] text-2xl font-bold mb-6">
          tech Hackathon 1.0
        </h2>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>

      <div className="images">
        <img src={Star} alt="" className="star5" />
        <img src={Star} alt="" className="star6" />
        <img src={Arrow} alt="" className="arrow" />
      </div>
    </div>
  );
};

export default Introduction;
