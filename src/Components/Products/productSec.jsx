import React, { use, useState } from "react";
import Products from "./Products";
import Cartsection from "../Cart/Cartsection";

const ProductSec = ({ productPromise, cartCard, setCartCard }) => {
  const [btnType, setBtnType] = useState("products");
  const products = use(productPromise);
  return (
    <div className="py-25">
      <div className="py-10 mx-auto text-center flex flex-col items-center justify-center gap-4 max-w-135">
        <h2 className="font-extrabold text-[32px] md:text-[48px]">Premium Digital Tools</h2>
        <p className="text-gray-600">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex items-center overflow-hidden rounded-full border-[#d6c9e0] border">
          <button
            onClick={() => setBtnType("products")}
            className={`btn ${btnType == "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-ghost"}  border-0 rounded-none`}
          >
            Products
          </button>
          <button
            onClick={() => setBtnType("cart")}
            className={`btn ${btnType == "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "btn-ghost"}  border-0 rounded-none`}
          >
            Cart ({cartCard.length})
          </button>
        </div>
      </div>
      {btnType == "products" ? (
        <Products
          products={products}
          cartCard={cartCard}
          setCartCard={setCartCard}
        ></Products>
      ) : (
        <Cartsection cartCard={cartCard} setCartCard={setCartCard}></Cartsection>
      )}

    </div>
  );
};

export default ProductSec;
