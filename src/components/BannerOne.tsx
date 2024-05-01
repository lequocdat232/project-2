import React, { Children, ReactNode } from "react";

const BannerOne = ({ children }: { children?: ReactNode }) => {
  const result = Array();

  Children.forEach(children, (child, index) => (
    <div className=''>
      {index == 0 && result.push(child)}
      {index == 1 &&
        result.push(<div className='ml-[427px] mt-[372px]'>{child}</div>)}
    </div>
  ));

  return (
    <div
      style={{ backgroundImage: " url('/images/billboard.jpg')" }}
      className='w-[100vw] h-[1133px] block'
    >
      {result}
    </div>
  );
};

export default BannerOne;
