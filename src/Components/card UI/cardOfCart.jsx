import React from 'react';

const CardOfCart = ({ cart, handleDeleteCart }) => {
    const { name, price, icon } = cart;

    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm">
                    {icon}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{name}</h4>
                    <p className="text-gray-500 text-sm">${price}</p>
                </div>
            </div>
            <button 
                onClick={() => handleDeleteCart(cart)}
                className="btn btn-ghost btn-circle text-red-500 hover:bg-red-50 transition-colors"
                title="Remove from cart"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default CardOfCart;