import React from "react";

const Workflow = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 text-center py-25 
        bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
    >
      <h2 className="text-[40px] font-extrabold">
        Ready to Transform Your Workflow?
      </h2>
      <p className="text-sm text-gray-300 max-w-135">
        Join thousands of professionals who are already using Digitools to work
        smarter. Start your free trial today.
      </p>
      <div className="flex gap-4 items-center">
        <button className="p-3 btn bg-white text-[#9514fa] rounded-full">
          Explore Products
        </button>
        <button className="p-3 btn bg-transparent rounded-full border border-white text-white">
          View Pricing
        </button>
      </div>
      <p className="text-sm text-gray-300">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default Workflow;
