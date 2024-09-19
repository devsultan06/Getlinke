/* eslint-disable react/no-unescaped-entities */
import two from "../../public/image/two.png";
import Star from "/image/sataGra5.png";
import Arrow from "/image/arrow.png";
const Criteria = () => {
  return (
    <div className="criteria bg-[#150e28] text-white border-b border-[#753386]">
      <div className="circle1 bg-no-repeat bg-cover absolute bg-purple-lens-flare pointer-events-none"></div>
      <div className="circle2 bg-no-repeat bg-cover absolute bg-purple-lens-flare right-[-400px] top-[300px] w-[971px] h-[994px] pointer-events-none"></div>
      <div className="into-image">
        <img src={two} alt="" className="" />
      </div>

      <div className="into">
        <h2 className="text-3xl font-bold">Judging Criteria</h2>
        <h2 className="text-[#D434FE] text-3xl font-bold mb-6">
          Key attributes
        </h2>
        <div className="criterias">
          <p className="text-[14px]">
            <span className="text-[#FF26B9] font-semibold">
              {" "}
              Innovation and Creativity:{" "}
            </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="text-[14px] mt-[12px]">
            <span className="text-[#FF26B9] font-semibold">
              {" "}
              Functionality:{" "}
            </span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p className="text-[14px] mt-[12px]">
            <span className="text-[#FF26B9] font-semibold">
              {" "}
              Impact and Relevance:{" "}
            </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="text-[14px] mt-[12px]">
            <span className="text-[#FF26B9] font-semibold">
              Technical Complexity:{" "}
            </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="text-[14px] mt-[12px]">
            <span className="text-[#FF26B9] font-semibold">
              {" "}
              Adherence to Hackathon Rules:{" "}
            </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
        </div>
        <div className="button mt-4">
          <button
            to="/get-started"
            className="register 
          bg-gradient-to-r from-[#ff26b9] via-[#d434fe] to-[#903aff]
        text-white py-2.5 px-8 rounded cursor-pointer"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="images">
        <img src={Star} alt="" className="star5" />
        <img src={Star} alt="" className="star6" />
        <img src={Arrow} alt="" className="arrow" />
      </div>
    </div>
  );
};

export default Criteria;
