/* eslint-disable no-unused-vars */
import CurvedLine from "./CurvedLine";
import Navbar from "./Navbar/Navbar";
import NavbarHook from "./NavbarHook/NavbarHook";
import Man from "/image/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import TitleWithTypingEffect from "./TitleWithypingEffect";
import Star from "/image/image1.png";
import CountdownTimer from "./CoundownTimer";
import Star2 from "/image/star.png";
import Creative1 from "/image/creative1.png";
import Chain from "/image/chain93651167621444.png";
import Boom from "/image/_1f4a5.png";
import Star3 from "/image/sataGra5.png";
import Star4 from "/image/starPu7.png";

const Header = () => {
  return (
    <header className=" text-white bg-[#150e28] all ">
      {/* <Navbar /> */}
      <Navbar />
      <div className="circle1 bg-no-repeat bg-cover absolute bg-purple-lens-flare pointer-events-none "></div>
      <div className="circle2 bg-no-repeat bg-cover absolute bg-purple-lens-flare left-[561px] top-0 w-[971px] h-[994px] pointer-events-none"></div>
      <div className="title pt-[120px]">
        <div className="all-inner">
          <TitleWithTypingEffect />

          <div className="box relative flex items-start justify-between w-full">
            <div className="text">
              <h1 className="text-5xl font-bold mb-3">getlinked Tech</h1>

              <h1 className="text-5xl font-bold mb-6 ">
                Hackathon <span className="text-[#D434FE]">1.0</span>{" "}
              </h1>
              <p className="mb-6">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <div className="button">
                <button
                  to="/get-started"
                  className="register 
          bg-gradient-to-r from-[#ff26b9] via-[#d434fe] to-[#903aff]
        text-white py-2.5 px-8 rounded cursor-pointer"
                >
                  Register
                </button>
              </div>

              <CountdownTimer />
            </div>
            <div className="image relative">
              <img src={Man} alt="" className="" />
              <img src={Star} alt="" className="image2 absolute top-0" />
            </div>
          </div>
        </div>
        <img src={Star2} alt="" className="small-star" />
        <img src={Creative1} alt="" className="creative1" />
        <img src={Boom} alt="" className="boom" />
        <img src={Chain} alt="" className="chain" />
        <img src={Star3} alt="" className="star3" />
        <img src={Star4} alt="" className="star4" />
      </div>
    </header>
  );
};

export default Header;
