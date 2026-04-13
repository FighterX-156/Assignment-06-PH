import React from "react";
import CartCard from "../card UI/CardOfCart";
import { toast } from "react-toastify";

const Cartsection = ({ cartCard, setCartCard }) => {
  const handleDeleteCart = (cart) => {
    const filteredCart = cartCard.filter((Cart) => Cart.id !== cart.id);

    setCartCard(filteredCart);
    toast.warning(`${cart.name} removed from cart!`);
  };
  const totalPrice = cartCard.reduce((sum, cart) => sum + cart.price, 0);
  const handleCheckout = () => {
    toast.success("Successfully proceeded to checkout!");
    setCartCard([]);
  };

  return (
    <div className="max-mA shadow-xs border border-base-300 rounded-2xl p-5">
      <h3 className="text-[24px] font-bold">Your Cart</h3>
      <div className="py-5 space-y-4">
        {cartCard.length === 0 ? (
          <div className="py-20 text-center space-y-2 rounded-xl border-2 border-base-200 shadow-xl">
            <h2 className="text-[24px] text-gray-900 font-bold">
              Your Cart is Empty
            </h2>
            <p className=" text-gray-600">Go to Products tab to buy product</p>
          </div>
        ) : (
          cartCard.map((cart) => {
            return (
              <CartCard
                cart={cart}
                key={cart.id}
                setCartCard={setCartCard}
                handleDeleteCart={handleDeleteCart}
              ></CartCard>
            );
          })
        )}
      </div>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-600">Total:</p>
          <p className="text-[18px] font-bold">${totalPrice}</p>
        </div>
        <button
          onClick={handleCheckout}
          className="btn btn-primary btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cartsection;
