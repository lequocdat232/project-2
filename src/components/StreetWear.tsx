import React from "react";
import ShoppingBtnOne from "./ShoppingBtnOne";

const StreetWear = () => {
  return (
    <div
      style={{ backgroundColor: "black" }}
      className='w-[582px] h-[473px] flex  align-middle flex-col text-center items-center gap-[10px]'
    >
      <span
        className='title text-[117px] bold tracking-[-.1em] leading-[1.0em] mt-[70px]'
        style={{ fontFamily: '"Josefin Sans", sans-serif;' }}
      >
        STREET WEAR
      </span>
      <span className='caption text-[16px] uppercase'>
        High quality cool tshirts for street fashion
      </span>
      <ShoppingBtnOne></ShoppingBtnOne>
    </div>
  );
};

export default StreetWear;
