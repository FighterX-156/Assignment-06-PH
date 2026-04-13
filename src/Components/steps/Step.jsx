import React, { Suspense, use } from "react";

const Steps = ({ stepsPromise }) => {
  const steps = use(stepsPromise);
  return (
    <>
      <div className="py-20 px-3 max-mA">
        <div className="flex flex-col items-center justify-center gap-3 max-w-135 mx-auto text-center py-10">
          <h2 className="text-[32px] md:text-[48px] font-bold">
            Get Started in 3 Steps
          </h2>
          <p className="text-gray-600">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-5">
          {steps.map((step, ind) => {
            return (
              <div
                key={ind}
                className="card w-96 sm:w-full bg-base-100 shadow-xl"
              >
                <div className="card-body relative text-center px-10 py-20">
                  <span className="badge h-10 w-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white  absolute right-4 top-4">
                    {step.id}
                  </span>
                  <div className="flex flex-col items-center justify-between gap-3">
                    <div className="p-4 rounded-full bg-[#e1cdf0] ">
                      <img src={step.icon} alt="" />
                    </div>
                    <h2 className="text-[24px] font-bold">{step.title}</h2>
                    <span className="text-gray-600">{step.desc}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Steps;
