import { useState } from "react";
import faqimage from "../../public/image/faqimg.png";
import plus from "../../public/image/plus.png";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Yes, you can work on a project you started before the hackathon.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "We have mentors who will be available to help you during the hackathon.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "You can join a team and work on a project with other participants.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "You can join a team or come with one. We will have a team-building session at the beginning of the hackathon.",
    },
    {
      question: "What happens after the hackathon ends?",
      answer:
        "After the hackathon ends, you can continue working on your project or start a new one. We will also have a showcase event where you can present your project to the judges.",
    },
  ];

  return (
    <div className="rules bg-[#150e28] text-white border-b border-[#753386]">
      <div className="rules-into">
        <h2 className="text-3xl font-bold">Frequently Ask</h2>
        <h2 className="text-[#D434FE] text-3xl font-bold mb-6">Question</h2>
        <p>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>

        <div className="faqs">
          {faqData.map((item, index) => (
            <div className="faq" key={index}>
              <div className="box2" onClick={() => toggleAnswer(index)}>
                <p>{item.question}</p>
                <img src={plus} alt="" />
              </div>
              <p className={`answer ${openIndex === index ? "open" : ""}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rules-image">
        <img src={faqimage} alt="FAQ Illustration" />
      </div>
    </div>
  );
};

export default Faq;
