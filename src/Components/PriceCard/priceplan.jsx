import React, { use } from "react";

const Priceplan = ({ pricingPromise }) => {
  const pricing = use(pricingPromise);
  return (
    <div className="max-mA py-15 px-3">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h2 className="text-[32px] md:text-[48px] font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-5 my-15">
        {pricing.map((price) => {
          return (
            <div
              key={price.id}
              className={`card w-full h-full ${price.name == "Pro" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-base-100"} shadow-sm hover:scale-102 transition-all `}
            >
              <div className="card-body relative justify-between">
                <span
                  className={`${price.name == "Pro" ? "block" : "hidden"} badge badge-sm  badge-warning absolute -top-2 right-0 left-0 mx-auto`}
                >
                  Most Popular
                </span>
                <h2 className="text-2xl font-bold">{price.name}</h2>
                <span className="text-sm">{price.description}</span>
                <span className="text-xl font-bold">
                  ${price.price}
                  <span className="text-sm font-light">
                    /{price.period}
                  </span>{" "}
                </span>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  {price.features.map((feature, ind) => {
                    return (
                      <li key={ind}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6">
                  <button
                    className={`${price.name == "Pro" ? "bg-base-100 text-[#9514FA]" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"} btn btn-primary btn-block rounded-full`}
                  >
                    {price.button}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Priceplan;
