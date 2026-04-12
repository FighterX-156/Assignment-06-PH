import React from "react";
import { Play } from "lucide-react";
import bannerImg from "../../assets/banner.png";
import Bottompart from "./bottompart";

const Banner = () => {
  return (
    <>
      <div
        className="max-mr flex flex-col lg:flex-row items-center justify-center 
        md:justify-between py-10 md:py-20 px-2 gap-4"
      >
        <div className="flex flex-col gap-5 max-w-160 items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#E1E7FF] rounded-full w-67">
            <div className="inline-grid *:[grid-area:1/1]">
              <div className="status status-primary animate-pulse"></div>
              <div className="status bg-[#9514FA]"></div>
            </div>
            <p className="text-sm text-[#9514FA] font-semibold ">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h1 className="text-[48px] md:text-[72px] font-extrabold leading-15 md:leading-25">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-[18px] text-gray-800 tracking-wider">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <div className="flex items-center gap-3">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
              Explore Products
            </button>
            <button className="btn  text-[#9514FA] rounded-full border-[#9514FA] border">
              <Play />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="hover:scale-103 transition-all">


          <img src={bannerImg} alt="Banner" />



        </div>
      </div>
      <Bottompart></Bottompart>
       </>
  );
};

export default Banner;
