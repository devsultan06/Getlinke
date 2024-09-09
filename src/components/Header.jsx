/* eslint-disable no-unused-vars */
import Navbar from "./Navbar/Navbar";
import NavbarHook from "./NavbarHook/NavbarHook";

const Header = () => {
  return (
    <header className="h-[900vh] text-white bg-[#150e28] all">
      {/* <Navbar /> */}
      <NavbarHook />
      <div className="circle1 bg-no-repeat bg-cover absolute bg-purple-lens-flare pointer-events-none "></div>
      <div className="circle2 bg-no-repeat bg-cover absolute bg-purple-lens-flare left-[561px] top-0 w-[971px] h-[994px] pointer-events-none"></div>
    </header>
  );
};

export default Header;
