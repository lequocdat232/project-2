import React, { Children, ReactNode } from "react";

const Feature = ({ children }: { children?: ReactNode }) => {
  const result = Array();

  Children.forEach(children, (child, index) => {
    result.push(child);
  });

  return (
    <div
      style={{ backgroundColor: "white" }}
      className='w-[72vw] h-[190px] flex justify-between mx-auto'
    >
      {result}
    </div>
  );
};

export default Feature;
