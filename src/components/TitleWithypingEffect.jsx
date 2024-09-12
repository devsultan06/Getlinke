import CurvedLine from "./CurvedLine"; // Make sure to import your CurvedLine component
import { ReactTyped } from "react-typed";

const TitleWithTypingEffect = () => {
  return (
    <div className="title-inner float-right">
      <div className="typing-container">
        <h1 className="text-3xl title">
          <ReactTyped
            strings={["Igniting a Revolution in HR Innovation"]}
            typeSpeed={50} // Speed of typing
            backSpeed={50} // Speed of deleting if needed
            loop={true} // Set to true if you want the typing to repeat
            showCursor={true} // Hide the blinking cursor after typing
          />
        </h1>
      </div>

      <CurvedLine />
    </div>
  );
};

export default TitleWithTypingEffect;
