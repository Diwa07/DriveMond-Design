import React, { useState } from "react";

const TenthPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "1. What is DriveMond?",
      content:
        "DriveMond is a complete ride sharing app and parcel delivery solution that comes with a Laravel admin panel, and Flutter user & driver app. ",
    },
    {
      title: "2. Do You Have Technical documentation for DriveMond?",
      content:
        "Yes, we do. You'll get the technical documentation with the script zip.",
    },
    {
      title: "3. How many businesses can I do with DriveMond?",
      content:
        "Currently, DriveMond has two business modules- ride sharing and parcel delivery. And you can do both.",
    },
    {
      title:
        "I have multiple clients. As a developer, which license should I need?",
      content: "For multiple clients' you need to purchase agency package.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col px-[10%] items-center h-screen ">
          <h1 className="text-[28px] py-9 ">
        <span className="text-[#00A08D] text-[38px] font-[bold] " >Frequently Asked Questions</span> About DriveMond
      </h1>
      <div className="w-full py-8 ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`mb-4 text-[${
              openIndex === index ? "#000000 , border-[#7FB0AA] " : "#00A08D"
            }] border hover:border-[#7FB0AA] rounded`}
          >
            <div
              className="flex items-center justify-between p-4 text-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg font-semibold text-center">
                {item.title}
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openIndex === index && (
              <div className="p-4 border-t">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenthPage;
