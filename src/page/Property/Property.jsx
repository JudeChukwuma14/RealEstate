import React from "react";
import image1 from "../../assets/image/desc1.1fffd09.png";
import image2 from "../../assets/image/Money.png";
import image3 from "../../assets/image/Lady.png";
import background from "../../assets/image/addProperty.jpg"
import yellow from "../../assets/image/aboutUs.png"
export const Property = () => {
  const mybg ={
    backgroundImage: `url(${background})`
  }
  const myAbout ={
    backgroundImage: `url(${yellow})`
  }
  return (
    <div>
      <section>
        <div style={mybg}  className="bg-center bg-no-repeat  w-[100%] h-[45vh]  bg-cover ">
          <div className=" bg-gray-800 bg-opacity-50 w-[100%]  h-[45vh] flex justify-center items-center flex-col gap-4 py-6 ">
            <div className=" text-center">
              <h1 className=" text-white text-3xl font-bold md:text-6xl lg:text-6xl">
                List your property on uhomes.com
              </h1>
            </div>
            <div className=" flex justify-center">
              <a className=" flex justify-center items-center border rounded w-60 h-12 bg-[#FF5A5F] text-white text-2xl cursor-pointer">
                Add a Property
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className=" text-center">
        <h1 className=" pt-7 pb-4 font-bold text-2xl lg:text-4xl md:text-3xl lg:pb-7">
          Why list on uhomes.com
        </h1>
      </div>
      <div>
        <div className=" flex flex-col-reverse items-center justify-center px-8 pb-9 lg:flex-row lg:gap-6 ">
          <div>
            <h1 className=" py-2 font-semibold text-lg lg:text-4xl md:text-3xl">
              Go-to platform for students
            </h1>

            <p className=" text-sm md:text-[25px] md:leading-9 lg:w-[500px]">
              When you list on uhomes.com, your property is advertised on one of
              the most popular rental platform for overseas students. Every
              month, over three millions renters come to us looking for a place
              around the campus.
            </p>
          </div>
          <div>
            <img src={image1} className="w-[350px] md:w-[100%] lg:w-[550px]" />
          </div>
        </div>

        <div className=" flex flex-col-reverse items-center justify-center px-8 pb-9 lg:flex-row-reverse lg:gap-6 ">
          <div>
            <h1 className=" py-2 font-semibold text-lg lg:text-4xl md:text-3xl">
              Cheaper and better
            </h1>

            <p className=" text-sm md:text-[25px] md:leading-9 lg:w-[500px]">
              Just pay $200-400/mo for one property and get much more valuable
              leads.
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
              Higher efficiency
            </h1>

            <p className=" text-sm md:text-[25px] md:leading-9 lg:w-[500px]">
              A renter can contact you with our Instant Message Service. And you
              won’t miss any enquiries because we will send you by email at the
              same time. Besides, there are a lot of solutions coming soon: Room
              Tour on Live, Video Call, Marketing Data Analysis.
            </p>
          </div>
          <div>
            <img src={image3} className="w-[350px] md:w-[100%] lg:w-[550px]" />
          </div>
        </div>
      </div>

      <div className=" flex justify-center pb-8">
        <a className=" flex justify-center items-center border rounded w-60 h-14 bg-[#FF5A5F] text-white text-2xl cursor-pointer">
          Add a Property
        </a>
      </div>

      <section>
        <div style={myAbout} className="bg-center bg-no-repeat bg-cover flex justify-center items-center flex-col gap-4 py-6">
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
