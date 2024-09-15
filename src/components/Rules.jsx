/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Woman from "/image/woman.png";
import Star from "/image/sataGra5.png";
import Arrow from "/image/arrow.png";
const Introduction = () => {
  return (
    <div className="rules bg-[#150e28] text-white border-b border-[#753386]">
      <div className="circle1 bg-no-repeat bg-cover absolute bg-purple-lens-flare pointer-events-none "></div>
      <div className="circle2 bg-no-repeat bg-cover absolute bg-purple-lens-flare right-[-400px] top-0 w-[971px] h-[994px] pointer-events-none"></div>
      <div className="rules-into">
        <h2 className="text-2xl font-bold ">Rules and</h2>
        <h2 className="text-[#D434FE] text-2xl font-bold mb-6">Guidelines</h2>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>

      <div className="rules-image">
        <img src={Woman} alt="" className="" />
      </div>

      <div className="images">
        <img src={Star} alt="" className="star5" />
        <img src={Star} alt="" className="star6" />
      </div>
    </div>
  );
};

export default Introduction;
