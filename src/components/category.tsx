import React from "react";

const category = () => {
  return (
    <div className='w-[1706px] justify-center text-black text-center mx-auto bg-white flex gap-10 mt-[140px] pb-[100px]'>
      <div
        className='w-[530px] h-[206px] cursor-pointer'
        style={{
          backgroundImage:
            "url('/images/nathan-oakley-UJWFy-5uzS8-unsplash_1.jpg')",
        }}
      >
        <div className='w-[260px] text-[white] text-[24px] ml-[20px] mt-[150px] uppercase'>
          Printed t-shirts
        </div>
      </div>
      <div
        className='w-[530px] h-[206px] cursor-pointer'
        style={{
          backgroundImage:
            "url('/images/nathan-oakley-UJWFy-5uzS8-unsplash_1.jpg')",
        }}
      >
        {" "}
        <div className='w-[260px] text-[white] text-[24px] ml-[20px] mt-[150px] uppercase'>
          T-shirts
        </div>
      </div>
      <div
        className='w-[530px] h-[206px] cursor-pointer'
        style={{
          backgroundImage:
            "url('/images/nathan-oakley-UJWFy-5uzS8-unsplash_1.jpg')",
        }}
      >
        {" "}
        <div className='w-[260px] text-[white] text-[24px] ml-[20px] mt-[150px] uppercase'>
          Speak your mind
        </div>
      </div>
    </div>
  );
};

export default category;
