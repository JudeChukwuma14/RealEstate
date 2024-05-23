
import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import redlog from "../assets/image/RedLog.png";
import whitelog from "../assets/image/Whitelogo.png";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

export default function Navbar() {
  const phonenumber = "+2349023402939";
  const [open, setOpen] = useState(false);

  return (
    <div  className=" bg-home bg-center bg-no-repeat w-[100%] h-[90vh] bg-cover">
      <div className="bg-gray-800 bg-opacity-50 h-[90vh]">
        <div className="px-4 py-4 flex justify-between w-[100%] items-center bg-white md:bg-transparent">
          <div>
            <img src={redlog} className="w-[150px] md:hidden" />
            <img src={whitelog} className="hidden md:flex md:w-[300px] lg:w-[200px]" />
          </div>
          <div className="flex items-center gap-2 text-xl md:hidden">
            <a href="https://wa.me/2349023402939"><IoLogoWhatsapp className="text-green-500" /></a>
            <a href={`tel:${phonenumber}`}><BiSolidPhoneCall /></a>
            <div onClick={() => setOpen(!open)} className="flex items-center gap-2 text-xl md:hidden">
              {open ? <ImCancelCircle /> : <CiMenuFries />}
            </div>
          </div>
          <div className={`lg:flex gap-7 items-center ${open ? "flex" : "hidden"}  flex-col md:flex-row md:static absolute top-[51px] w-full h-[40vh] lg:h-0 md:w-auto left-0 rounded-b-xl md:bg-transparent bg-gray-50 `}>
            <div className="flex gap-4 flex-col lg:flex-row pt-6">
              <div>
                <a className="lg:text-white flex flex-col items-center" href={`tel:${phonenumber}`}><FiPhoneCall />
                <p className="text-[10px]">Contact</p></a>

              </div>
              <div className="lg:text-white flex flex-col items-center">
                <IoPersonOutline />
                <p className="text-[10px]">Log in</p>
              </div>
            </div>
            <div className="lg:text-white flex gap-3 flex-col lg:flex-row">
              <NavLink to="/rental-manager" className="flex justify-center items-center w-[140px] h-[42px] text-sm lg:border rounded-md lg:text-gray-100 cursor-pointer lg:hover:text-white hover:font-bold">
                Add a Property
              </NavLink>
              <NavLink to='/become-partner' className="flex justify-center items-center w-[140px] h-[42px] text-sm lg:border rounded-md lg:text-gray-100 cursor-pointer lg:hover:text-white hover:font-bold">
                Become a Partner
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[150px] md:mt-[200px]">
          <div className="pb-12">
            <h1 className="text-5xl font-bold text-white text-center">
              Home For Global Students
            </h1>
          </div>
          <div className="md:flex items-center">
            <input
              type="text"
              placeholder="Search by City, University, Neighborhood or Property"
              className="px-3 h-[60px] w-[280px] md:h-[70px] md:w-[600px] md:pl-6 md:placeholder:text-lg"
            />
            <button className="cursor-pointer flex justify-center items-center h-[60px] w-[280px] md:h-[70px] md:w-[150px] bg-[#FF5A5F] gap-3 text-white font-semibold text-lg">
              <IoSearch />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
