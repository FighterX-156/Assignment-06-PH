import React from 'react';
import { toast } from 'react-toastify';

const Card = ({ product, cartCard, setCartCard }) => {
    const isBuyNow = cartCard.some((item) => item.id === product.id);

  const handelBuyNow = () => {
    toast.success(`${product.name} added to cart`);
    setCartCard([...cartCard, product]);
  };

    return (
        <div className="card w-full h-full bg-base-100 shadow-sm border border-base-300 hover:scale-105 hover:shadow-xl transition-all decoration-1">
        <div className="card-body">
          <div className="flex justify-between">
            <div className="p-2 shadow border-dotted border-2 border-base-300 rounded-full">
              <span className="h-10">{product.icon}</span>
            </div>
            <span
              className={`badge badge-soft ${product.tagType == "popular"
                  ? "badge-primary"
                  : product.tagType == "new"
                    ? " badge-success"
                    : "badge-warning"
                } p-3 rounded-full`}
            >
              {product.tag}
            </span>
          </div>
          <h2 className="text-[24px] font-bold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <span className="text-2xl font-bold">
            ${product.price}
            <span className="text-gray-600 text-[16px] font-normal">
              /{product.period}
            </span>
          </span>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {product.features.map((feature, ind) => {
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
              onClick={handelBuyNow}
              className={`btn ${isBuyNow == true
                  ? "btn-disabled opacity-50 bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
                  : "opacity-100 bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
                } rounded-full border-0 text-white btn-block`}
            >
              {isBuyNow == true ? "Added To Cart" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    );
};

export default Card;
