import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
const Header = () => {
  return (
    <div
      className='w-[100vw] items-center mx-auto flex gap-[450px] mt-[31px] h-[80px] justify-evenly'
      style={{ fontFamily: "'Jost', sans-serif", color: "black" }}
    >
      <div className='menuOne flex gap-[60px] font-bold text-[18px]   items-center '>
        <Link href={"/"}>LOGO</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Shop</Link>
        <Link href={"/"}>Hoodies</Link>
        <Link href={"/"}>T-shirts</Link>
        <Link href={"/"}>Accessories</Link>
        <Link href={"/"}>Jacket</Link>
      </div>
      <div className='menuTwo flex gap-[60px]  h-[80px] items-center '>
        <IoPersonOutline size={24} />
        <FaRegHeart size={24} />

        <AiOutlineShopping size={30} className='mb-[5px]' />
      </div>
    </div>
  );
};

export default Header;
