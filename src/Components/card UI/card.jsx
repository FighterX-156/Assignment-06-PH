import React from 'react';
import { toast } from 'react-toastify';

const Card = ({ product, cartCard, setCartCard }) => {
    const { name, description, price, period, tag, icon, features } = product;

    const handleAddToCart = () => {
        const isExist = cartCard.find(item => item.id === product.id);
        if (isExist) {
            return toast.info(`${name} is already in your cart!`);
        }
        setCartCard([...cartCard, product]);
        toast.success(`${name} added to cart!`);
    };

    return (
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full relative">
            {tag && (
                <div className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {tag}
                </div>
            )}
            
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">{description}</p>

            <div className="space-y-3 mb-8">
                {features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500">✓</span>
                        {feature}
                    </div>
                ))}
            </div>

            <div className="flex items-end justify-between mt-auto">
                <div>
                    <span className="text-2xl font-black text-gray-900">${price}</span>
                    {period !== "one-time" && <span className="text-gray-400 text-sm">/{period}</span>}
                </div>
                <button 
                    onClick={handleAddToCart}
                    className="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#4F39F6] transition-colors duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;