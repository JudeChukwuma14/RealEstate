import React from "react";
import image1 from "../../assets/image/Mel1.webp";
import image2 from "../../assets/image/Mel2.webp";
import image3 from "../../assets/image/Mel3.webp";
import image4 from "../../assets/image/Mel4.webp";
import image5 from "../../assets/image/Mel5.webp";
import image6 from "../../assets/image/Mel6.webp";
import image7 from "../../assets/image/Mel7.webp";
import image8 from "../../assets/image/Mel8.webp";
export default function Melbourne() {
  return (
    <div className=" flex justify-center">
      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image1} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">UniLodge Melbourne CBD</h1>
            <p className=" text-[13px]">
              17 Wills Street, Melbourne, Victoria 3000
            </p>
            <p className=" text-[13px]">
              Shared Room • En-suite • Studio • 9 Options
            </p>
            <h2 className=" text-lg font-bold pt-5">
              <span className=" text-[14px] font-semibold">From</span> Au$431
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image2} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">Scape Franklin</h1>
            <p className=" text-[13px]">
              99 Franklin St, Melbourne, Victoria VIC 3000
            </p>
            <p className=" text-[13px]">
              Non En-suite • En-suite • Studio • 8 Options
            </p>
            <h2 className=" text-lg font-bold pt-5">
              <span className=" text-[14px] font-semibold">From</span>Au$431
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
              UniLodge Melbourne Central
            </h1>
            <p className=" text-[13px]">
              293 La Trobe Street, Melbourne, Victoria 3000
            </p>
            <p className=" text-[13px]">
              Non En-suite • En-suite • Studio • 6 Options
            </p>
            <h2 className=" text-lg font-bold pt-5">
              <span className=" text-[14px] font-semibold">From</span> Au$445
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image4} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">
              Melbourne Victoria Market
            </h1>
            <p className=" text-[13px]">
              A'Beckett Street, Melbourne, Victoria 3000
            </p>
            <p className=" text-[13px]">
              Shared Room • Non En-suite • En-suite • Studio • 9 Options
            </p>
            <h2 className=" text-lg font-bold pt-5">
              <span className=" text-[14px] font-semibold">From</span> Au$435
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image5} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">
              1403B/639 Little Lonsdale Street
            </h1>
            <p className=" text-[13px]">
              Little Lonsdale Street, Melbourne, Victoria 3000
            </p>
            <p className=" text-[13px]">1B • 1 Option</p>
            <h2 className=" text-lg font-bold pt-5">
              <span className=" text-[14px] font-semibold">From</span> AU$600
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image6} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">
              dwell Village Melbourne City
            </h1>
            <p className=" text-[13px]">
              5-17 Flemington Road North Melbourne, Melbourne, Victoria 3051
            </p>
            <p className=" text-[13px]">
              Non En-suite • Studio • 1B • 14 Options
            </p>
            <h2 className=" text-lg font-bold pt-5">
              <span className=" text-[14px] font-semibold">From</span> AU$358
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image7} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">House</h1>
            <p className=" text-[13px]">
              6 Miles Street Vauxhall, London, England SW8 1RZ
            </p>
            <p className=" text-[13px]">
              Non En-suite • En-suite • Studio • 28 Options
            </p>
            <h2 className=" text-lg font-bold pt-5">
              <span className=" text-[14px] font-semibold">From</span> £431
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>

        <div className=" cursor-pointer w-[350px] h-[351px] border rounded shadow overflow-hidden">
          <div className=" h-[175px] overflow-hidden">
            <img src={image8} className=" w-[100%] h-[100%] object-cover" />
          </div>
          <div className=" px-4">
            <h1 className=" text-lg font-bold py-3">
              2507/614-666 Flinders Street
            </h1>
            <p className=" text-[13px]">
              614-666 Flinders Street, Melbourne, Victoria 3008
            </p>
            <p className=" text-[13px]">1B • 1 Option</p>
            <h2 className=" text-lg font-bold pt-5">
              <span className=" text-[14px] font-semibold">From</span> AU$600
              <span className=" text-[14px] font-semibold">/week</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
