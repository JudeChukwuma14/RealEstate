import React, { useState } from "react";
import leaf from "../../assets/image/Hong Kong.webp";
import London from "./London";
import Glasgow from "./Glasgow";
import Manchester from "./Manchester";
import Melbourne from "./Melbourne";
import Southampton from "./Southampton";
import Sydeny from "./Sydeny";

export default function Menu() {
  const [active, setActive] = useState(0);
  const meanBar = [
    "London",
    "Glasgow",
    "Manchester",
    "Melbourne",
    "Southampton",
    "Sydeny",
  ];

  const render = () => {
    switch (active) {
      case 0:
        return <London />;
      case 1:
        return <Glasgow />;
      case 2:
        return <Manchester />;
      case 3:
        return <Melbourne />;
      case 4:
        return <Southampton />;
      case 5:
        return <Sydeny />;
    }
    return null;
  };

  return (
    <div name="menu" className="bg-pattern bg-cover">
    
      <div className="tablet:px-2">
        <div className="flex tablet:flex-1 tablet:flex-wrap tablet:gap-5 justify-start md:justify-center lg:justify-center text-black pt-6  pl-4 overflow-x-auto">
          {meanBar.map((item, index) => (
            <div key={index}>
              <button
                className={`  tablet:px-2 px-[8px] font-semibold text-[16px] transition-colors duration-700 ease-in-out hover:text-red-600 ${
                  active === index
                    ? " text-red-600 transition-colors duration-300 ease-in-out border-b-2 border-red-600"
                    : ""
                }`}
                onClick={() => setActive(index)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        <div className="w-full mt-12">{render()}</div>
      </div>
    </div>
  );
}
