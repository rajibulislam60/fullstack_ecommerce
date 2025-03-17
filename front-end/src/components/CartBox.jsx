import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBagShopping } from "react-icons/fa6";

const CartBox = ({ className }) => {
    const navigate = useNavigate();
    const [showPrev, setShowPrev] = useState(false);

    const handleCartbox = () => {
        navigate("/cart");
        setShowPrev(true);
    };

    const handleGoBack = () => {
        navigate(-1); 
        setShowPrev(false);
    };

    return (
        <div className={`${className} px-2 py-2 lg:px-8 lg:py-5 rounded-md cursor-pointer`}>
            {!showPrev ? (
                <div onClick={handleCartbox}>
                    <FaBagShopping className='text-[20px] lg:text-[40px] text-white' />
                    <h4 className='text-[14px] lg:text-[20px] text-white'>Item</h4>
                </div>
            ) : (
                <button 
                    onClick={handleGoBack} 
                    className="lg:text-[30px] text-[20px] text-white"
                >
                    X
                </button>
            )}
        </div>
    );
};

export default CartBox;
