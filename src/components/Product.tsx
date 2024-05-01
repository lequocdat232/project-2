"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Product = () => {
  const router = useRouter();
  function productDetailRedirect() {
    router.push("/product");
  }
  return (
    <div className=''>
      <div className='w-[300px] h-[445px] cursor-pointer'>
        <Image
          src={"/images/t-shirt.jpg"}
          width={300}
          height={445}
          alt='T-shirt'
          onClick={productDetailRedirect}
        ></Image>
      </div>
      <div className='flex justify-between mt-[30px]'>
        <span className='font-bold text-[21px]'>Seven Zero Five</span>
        <span className='font-light  text-[21px]'>30.00$</span>
      </div>
    </div>
  );
};

export default Product;
