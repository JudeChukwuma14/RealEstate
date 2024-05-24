import React from "react";
import a1 from "../assets/image/about1.webp";
import a2 from "../assets/image/about2.webp";
import a3 from "../assets/image/about3.webp";
import a4 from "../assets/image/about4.webp";
import b1 from "../assets/image/book1.de92094.png";
import b2 from "../assets/image/book2.0c63787.png";
import b3 from "../assets/image/book3.c066c4c.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import image1 from "../assets/image/london.webp";
import image2 from "../assets/image/Manchester.webp";
import image3 from "../assets/image/Boston.webp";
import image4 from "../assets/image/Melbourne.webp";
import image5 from "../assets/image/Toronto.webp";
import image6 from "../assets/image/Singapore.webp";
import image7 from "../assets/image/Glasgrow.webp";
import image8 from "../assets/image/Sheffield.webp";
import image9 from "../assets/image/New York.webp";
import image10 from "../assets/image/Sydney.webp";
import image11 from "../assets/image/Ottawa.webp";
import image12 from "../assets/image/Hong Kong.webp";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Menu from "../page/City/Menu";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Card from "./Card";

export default function Hero() {
  const email = "ebukajude460@gmail.com";
  const phonenumber = "+2349023402939";
  return (
    <div>
      <Navbar />
      <section>
        <div className=" text-center">
          <h1 className=" pt-7 pb-2 font-bold text-2xl lg:text-4xl md:text-3xl">
            Find Your Sweet Student Accommodation
          </h1>
          <p className=" px-3 pt-0 pb-3 md:text-lg ">
            Let us worry about your student room while you enjoy your precious
            youth.
          </p>
        </div>
        <div className=" md:flex md:justify-center md:gap-5">
          <div className=" lg:flex lg:gap-5 lg:py-8 md:py-5">
            <div className=" lg:p-0 py-3 px-8 flex gap-4 items-center lg:flex-col  md:flex-col">
              <img src={a1} className=" w-20 lg:w-44 md:w-36" />
              <div className=" lg:flex lg:items-center lg:flex-col md:flex md:flex-col md:text-center">
                <h4 className=" font-semibold text-lg p-0 lg:font-bold lg:text-2xl md:font-bold md:text-lg">
                  Floor Plan & Room Details
                </h4>
                <p className=" text-xs p-0 lg:text-lg lg:text-center lg:w-64 md:text-[18px] md:w-64">
                  Get to know room number, orientation, floor plans and
                  roommates.
                </p>
              </div>
            </div>

            <div className=" lg:p-0 py-3 px-8 flex gap-4 items-center lg:flex-col md:flex-col">
              <img src={a2} className=" w-20 lg:w-44 md:w-36" />
              <div className=" lg:flex lg:items-center lg:flex-col  md:flex md:flex-col md:text-center">
                <h4 className=" font-semibold text-lg p-0 lg:font-bold lg:text-2xl md:font-bold md:text-lg">
                  100% Verified Properties
                </h4>
                <p className=" text-xs p-0 lg:text-lg lg:text-center lg:w-64 md:text-[18px] md:w-64">
                  What you see is what you get. Our promise.
                </p>
              </div>
            </div>
          </div>

          <div className=" lg:flex lg:gap-5 lg:py-8 md:py-5">
            <div className=" lg:p-0 py-3 px-8 flex gap-4 items-center lg:flex-col md:flex-col ">
              <img src={a3} className=" w-20 lg:w-44 md:w-36" />
              <div className=" lg:flex lg:items-center lg:flex-col  md:flex md:flex-col md:text-center">
                <h4 className=" font-semibold text-lg p-0 lg:font-bold lg:text-2xl md:font-bold md:text-lg">
                  Price-Match Guarantee
                </h4>
                <p className=" text-xs p-0 lg:text-lg lg:text-center lg:w-64 md:text-[18px] md:w-64">
                  Find a lower price and we'll match it.
                </p>
              </div>
            </div>

            <div className=" lg:p-0 py-3 px-8 flex gap-4 items-center lg:flex-col md:flex-col">
              <img src={a4} className=" w-20 lg:w-44 md:w-36" />
              <div className=" lg:flex lg:items-center lg:flex-col  md:flex md:flex-col md:text-center">
                <h4 className=" font-semibold text-lg p-0 lg:font-bold lg:text-2xl md:font-bold md:text-lg">
                  1-on-1 Professional Support
                </h4>
                <p className=" text-xs p-0 lg:text-lg lg:text-center lg:w-64 md:text-[18px] md:w-64">
                  Just one call away, we’ll be there for you around the clock
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-slate-100 py-8 ">
        <div className=" text-center">
          <h1 className=" pt-7 pb-2 font-bold text-2xl md:text-3xl lg:text-4xl">
            Most Popular Homes for Students
          </h1>
          <p className=" px-3 pt-0 md:text-lg lg:text-xl">
            Eliminate the inconvenience of arranging your student housing during
            these prime years.
          </p>
        </div>
        <Menu />
      </section>
      <section>
        <div className=" text-center">
          <h1 className=" pt-7 pb-2 font-bold text-2xl md:text-3xl lg:text-4xl">
            Book Your Perfect Student Housing
          </h1>
          <p className=" px-3 pt-0 pb-7 md:text-lg lg:text-xl">
            Eliminate the inconvenience of arranging your student housing during
            these prime years.
          </p>
        </div>
        <div className=" flex md:flex-col md:gap-3">
          <div className=" flex gap-4 px-4 flex-col md:flex-row">
            <div class="relative group">
              <img class=" w-full rounded" src={image1} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  London
                </span>
              </div>
            </div>

            <div class="relative group">
              <img class=" w-full rounded" src={image2} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  Manchester
                </span>
              </div>
            </div>

            <div class="relative group">
              <img class=" w-full rounded" src={image3} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  Boston
                </span>
              </div>
            </div>

            <div class="relative group">
              <img class=" w-full rounded" src={image4} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  Melbourne
                </span>
              </div>
            </div>

            <div class="relative group">
              <img class=" w-full rounded" src={image5} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  Toronto
                </span>
              </div>
            </div>

            <div class="relative group">
              <img class=" w-full rounded" src={image6} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  Singapore
                </span>
              </div>
            </div>
          </div>

          <div className=" flex gap-4 px-4 flex-col md:flex-row">
            <div class="relative group">
              <img class=" w-full rounded" src={image7} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  Glasgow
                </span>
              </div>
            </div>

            <div class="relative group">
              <img class=" w-full rounded" src={image8} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  Sheffield
                </span>
              </div>
            </div>

            <div class="relative group">
              <img class=" w-full rounded" src={image9} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  New York
                </span>
              </div>
            </div>

            <div class="relative group">
              <img class=" w-full rounded" src={image10} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  Sydney
                </span>
              </div>
            </div>

            <div class="relative group">
              <img class=" w-full rounded" src={image11} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  Ottawa
                </span>
              </div>
            </div>

            <div class="relative group">
              <img class=" w-full rounded" src={image12} alt="Your Image" />
              <div class="absolute inset-0  w-full rounded flex items-center justify-center opacity-100 group-hover:opacity-50 bg-gray-800 bg-opacity-50 transition-opacity">
                <span class="text-white text-xl font-bold md:text-lg md:font-semibold">
                  Hong Kong
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" pt-12">
        <div className=" text-center">
          <h1 className=" pt-7 pb-2 font-bold text-3xl md:text-3xl lg:text-4xl">
            Book in 3 Easy Steps!
          </h1>
        </div>
        <div className=" flex items-center flex-col md:flex md:items-center lg:justify-center py-5 lg:flex-row">
          <div className=" flex items-center flex-col  ">
            <div className=" py-3 px-8 flex gap-4 items-center md:flex-col">
              <img src={b1} className=" w-28 md:w-36" />
              <div className=" md:flex md:flex-col md:text-center">
                <h4 className=" font-semibold text-xl p-0">
                  Discover & Secure your place
                </h4>
                <p className=" text-xs p-0">
                  Choose from a wide range of verified student properties
                </p>
              </div>
            </div>
          </div>
          <div>
            <IoIosArrowDown className=" text-6xl text-orange-600 lg:hidden" />
            <IoIosArrowForward className=" hidden text-6xl text-orange-600 lg:flex" />
          </div>
          <div className=" flex items-center flex-col  ">
            <div className=" py-3 px-8 flex gap-4 items-center md:flex-col">
              <img src={b2} className=" w-28 md:w-36" />
              <div className=" md:flex md:flex-col md:text-center">
                <h4 className=" font-semibold text-xl p-0">
                  Complete your application
                </h4>
                <p className=" text-xs p-0">
                  Days of lengthy paperwork are gone. Let us do the heavy
                  lifting for you
                </p>
              </div>
            </div>
          </div>
          <div>
            <IoIosArrowDown className=" text-6xl text-orange-600 lg:hidden" />
            <IoIosArrowForward className=" hidden text-6xl text-orange-600 lg:flex" />
          </div>
          <div className=" flex items-center flex-col  ">
            <div className=" py-3 px-8 flex gap-4 items-center md:flex-col">
              <img src={b3} className=" w-28 md:w-36 " />
              <div className=" md:flex md:flex-col md:text-center">
                <h4 className=" font-semibold text-xl p-0">
                  Your booking is done
                </h4>
                <p className=" text-xs p-0">
                  Now you can relax, pack your bags, and begin your new journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-9">
        <div className=" text-center">
          <h1 className=" text-2xl font-bold md:text-3xl lg:text-4xl">
            Get in Touch
          </h1>
          <p className="">If you have any questions, feel free to contact us</p>
        </div>
        <div className=" flex gap-3 justify-center  lg:gap-5">
          <div className=" pt-4 lg:flex lg:gap-5">
            <a href={`tel:${phonenumber}`}>
              <div className=" mb-3 border w-40 md:w-72 md:mb-3 lg:mb-0 lg:w-56 flex items-center justify-center flex-col py-7 rounded cursor-pointer">
                <BiSolidPhoneCall className=" text-5xl text-[#FF5A5F]" />
                <h5 className=" text-lg font-semibold pt-4">Call Us</h5>
              </div>
            </a>

            <a href={`mailto:${email}`}>
              <div className=" border w-40 md:w-72 lg:w-56 flex items-center justify-center flex-col py-7 rounded cursor-pointer">
                <MdEmail className=" text-5xl text-[#FF5A5F]" />
                <h5 className=" text-lg font-semibold pt-4">Email Us</h5>
              </div>
            </a>
          </div>

          <div className=" pt-4 lg:flex lg:gap-5 ">
            <a href="https://wa.me/2349023402939">
              <div className="mb-3 border w-40 md:w-72 md:mb-3 lg:mb-0 lg:w-56 flex items-center justify-center flex-col py-7 rounded cursor-pointer">
                <BsWhatsapp className=" text-5xl text-[#FF5A5F]" />
                <h5 className=" text-lg font-semibold pt-4">Whatsapp Us</h5>
              </div>
            </a>
            <a>
              <div className="border w-40 md:w-72 lg:w-56 flex items-center justify-center flex-col py-7 rounded cursor-pointer">
                <BsFillChatSquareQuoteFill className=" text-5xl text-[#FF5A5F]" />
                <h5 className=" text-lg font-semibold pt-4">Chat Us</h5>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className=" flex justify-center items-center flex-col gap-4 py-6 bg-[#FAFAFA]">
          <div className=" text-center">
            <h1 className=" text-xl font-bold md:text-3xl lg:text-4xl">
              Landlords or Property Managers
            </h1>
            <p className=" text-xs md:text-sm ">
              If you have any questions, feel free to contact us
            </p>
          </div>
          <div>
            <NavLink
              to="/rental-manager"
              className=" flex justify-center items-center border rounded  py-4 px-5"
            >
              Add a Property <IoIosArrowForward />
            </NavLink>
          </div>
        </div>
      </section>
      <Card />
    </div>
  );
}
