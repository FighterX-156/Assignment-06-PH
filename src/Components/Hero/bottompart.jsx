import React from "react";

const Bottompart = () => {
  return (
    <div className=" p-10 md:p-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="max-mx text-center flex flex-col md:flex-row justify-center items-center gap-6 md:gap-35 text-white">
        <div className="lg:px-15">
          <h2 className=" text-[48px] lg:text-[60px] font-extrabold">50k+</h2>
          <p className="lg:text-[24px]">Active Users</p>
        </div>
        <div className="md:px-15 md:border-l-2 md:border-r-2 border-0">
          <h2 className="text-[48px] lg:text-[60px] font-extrabold">200+</h2>
          <p className="lg:text-[24px]">Premium Tools</p>
        </div>
        <div className="lg:px-15">
          <h2 className="text-[48px] lg:text-[60px] font-extrabold">4.9</h2>
          <p className="lg:text-[24px]">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Bottompart;
