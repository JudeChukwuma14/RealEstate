import React from "react";
import image1 from "../../assets/image/L1.webp";
import image3 from "../../assets/image/L3.webp";
import image4 from "../../assets/image/L4.webp";
import image5 from "../../assets/image/L5.webp";
import image6 from "../../assets/image/L6.webp";
import image7 from "../../assets/image/L7.webp";
import image8 from "../../assets/image/L8.webp";
import image2 from "../../assets/image/L8.webp";

export default function () {
  return (
    <div className=" flex justify-center">
      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image1} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">IQ Vega</h1>
            <p className=" text-[13px]">
              6 Miles Street Vauxhall, London, England SW8 1RZ
            </p>
            <p className=" text-[13px]">
              Non En-suite • En-suite • Studio • 28 Options
            </p>
            <h2 className=" text-lg font-bold py-5">
              <span className=" text-[14px] font-semibold">From</span> £399
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image2} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">Coppermaker Square</h1>
            <p className=" text-[13px]">
              1 Cherry Park Lane, London, England E20 1NX
            </p>
            <p className=" text-[13px]">Studio • 1B • 2B • 3 Options</p>
            <h2 className=" text-lg font-bold py-5">
              <span className=" text-[14px] font-semibold">From</span> £2,645
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image3} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">
              Vita Student Lewisham Exchange
            </h1>
            <p className=" text-[13px]">
              Exchange Point, Loampit Vale, London, England SE13 7NX
            </p>
            <p className=" text-[13px]">Studio • En-suite • 7 Options</p>
            <h2 className=" text-lg font-bold py-5">
              <span className=" text-[14px] font-semibold">From</span> £413
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image4} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">Alameda Building</h1>
            <p className=" text-[13px]">
              48 Olympic Way, Wembley Park, London, England HA9 0HS
            </p>
            <p className=" text-[13px]">1B • 2B • 2 Options</p>
            <h2 className=" text-lg font-bold py-5">
              <span className=" text-[14px] font-semibold">From</span> £2,195
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image5} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">The Lyra</h1>
            <p className=" text-[13px]">
              1 Portal W North Acton, London, England W3 6BX
            </p>
            <p className=" text-[13px]">Studio • 9 Options</p>
            <h2 className=" text-lg font-bold py-5">
              <span className=" text-[14px] font-semibold">From</span> £390
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image6} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">iQ Highbury</h1>
            <p className=" text-[13px]">
              201 Isledon Road, London, England N7 7JR
            </p>
            <p className=" text-[13px]">En-suite • Studio • 13 Options</p>
            <h2 className=" text-lg font-bold py-5">
              <span className=" text-[14px] font-semibold">From</span> £440
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image7} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">iQ Tufnell House</h1>
            <p className=" text-[13px]">
              Huddleston Road, London, England N7 0EG
            </p>
            <p className=" text-[13px]">En-suite • Studio • 1B • 12 Options</p>
            <h2 className=" text-lg font-bold py-5">
              <span className=" text-[14px] font-semibold">From</span> £430
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image8} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">Chapter Islington</h1>
            <p className=" text-[13px]">
              32-34 Market Road, London, England N7 9AW
            </p>
            <p className=" text-[13px]">En-suite • Studio • 30 Options</p>
            <h2 className=" text-lg font-bold py-5">
              <span className=" text-[14px] font-semibold">From</span> £390
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
