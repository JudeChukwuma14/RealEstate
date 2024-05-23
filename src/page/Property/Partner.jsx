import React from "react";
import image1 from "../../assets/image/photo1.png";
import image2 from "../../assets/image/photo2.png";
import image3 from "../../assets/image/photo3.png";

export const Partner = () => {
  return (
    <div>
      <section>
      <div id="partner" className=" bg-center bg-no-repeat  w-[100%] h-[45vh]  bg-cover ">
        <div className=" bg-gray-800 bg-opacity-50 w-[100%]  h-[45vh] flex justify-center items-center flex-col gap-4 py-6 ">
          <div className=" text-center">
            <h1 className=" text-white text-3xl font-bold md:text-6xl lg:text-6xl">
            Join us to help global students find their ideal home
            </h1>
          </div>
          <div className=" flex justify-center">
            <a className=" flex justify-center items-center border rounded w-60 h-12 bg-[#FF5A5F] text-white text-2xl cursor-pointer">
            Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
      <div className=" text-center">
        <h1 className=" pt-7 pb-4 font-bold text-2xl lg:text-4xl md:text-3xl lg:pb-7">
          Why work with us?
        </h1>
      </div>
      <div>
        <div className=" flex flex-col-reverse items-center justify-center px-8 pb-9 lg:flex-row lg:gap-6 ">
          <div>
            <h1 className=" py-2 font-semibold text-lg lg:text-4xl md:text-3xl">
              Global Distribution Network
            </h1>

            <p className=" text-sm md:text-[25px] md:leading-9 lg:w-[500px]">
              Our business is all over the world, covering 1000+ cities, 3200+
              schools, and more than 40,000 apartments to choose from. The
              flexible lease period makes students feel free from the pressure
              of moving in, and the price-match guarantee allows students to
              book the most satisfactory room at the best price.
            </p>
          </div>
          <div>
            <img src={image1} className="w-[350px] md:w-[100%] lg:w-[550px]" />
          </div>
        </div>

        <div className=" flex flex-col-reverse items-center justify-center px-8 pb-9 lg:flex-row-reverse lg:gap-6 ">
          <div>
            <h1 className=" py-2 font-semibold text-lg lg:text-4xl md:text-3xl">
              Trusted by 2900+ Educational Agents & Institutions
            </h1>

            <p className=" text-sm md:text-[25px] md:leading-9 lg:w-[500px]">
              uhomes has conducted in-depth cooperation with 2,900+ educational
              institutions, providing rental housing options for 200,000+
              students recommended by these institutions to study abroad, and
              helping 55,000+ of them successfully find their ideal home.
            </p>
          </div>
          <div>
            <img
              src={image2}
              className="w-[350px] md:w-[100%] lg:w-[550px] pr-8"
            />
          </div>
        </div>
        <div className=" flex flex-col-reverse items-center justify-center px-8 pb-9 lg:flex-row lg:gap-6 ">
          <div>
            <h1 className=" py-2 font-semibold text-lg lg:text-4xl md:text-3xl">
              Excellent Service Experience
            </h1>

            <p className=" text-sm md:text-[25px] md:leading-9 lg:w-[500px]">
              It is our mission to provide the most convenient and professional
              service experience for students and partners. We provide 7*24
              hours of service assistance, and have long-term close cooperation
              with apartment developers around the world. Each apartment room
              has a variety way of online viewing, including photos, videos, VR,
              and live broadcasts, to show you the most authentic real estate
              status.
            </p>
          </div>
          <div>
            <img src={image3} className="w-[350px] md:w-[100%] lg:w-[550px]" />
          </div>
        </div>
      </div>

    

      <section>
        <div id="yellow" className=" bg-center bg-no-repeat bg-cover flex justify-center items-center flex-col gap-4 py-6">
          <div className=" text-center">
            <h1 className=" text-3xl text-white font-bold md:text-3xl lg:text-4xl">
              About Us
            </h1>
          </div>
          <div className=" flex justify-center">
            <a className=" flex justify-center items-center border rounded px-3 py-3 md:px-4 md:py-4 bg-[#FBAD39] text-white md:text-2xl cursor-pointer">
              Learn More About uhomes.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
