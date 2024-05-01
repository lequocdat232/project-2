import React, { ReactNode } from "react";
import Product from "./Product";
import { Children } from "react";
import AllProdBtn from "./AllProdBtn";

const ProductsComponent = (children: any) => {
  return (
    <div className='w-[68vw] justify-center text-black text-center mx-auto bg-white'>
      <div className='flex flex-col gap-[45px] items-center'>
        <span className='text-[36px] font-light'>NEW ARRIVAL</span>
        <hr className='w-[100px] h-[2px] bg-black' />
        <div className='rowOne gap-[20px] flex mx-auto w-full justify-between mt-[20px] bg-white'>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
        <div className='rowTwo gap-[10px] flex mx-auto w-full justify-between bg-white '>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
      <AllProdBtn></AllProdBtn>
    </div>
  );
};

export default ProductsComponent;
