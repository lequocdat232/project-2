import React, { ReactNode } from "react";

const SubFeature = ({
  icon,
  title,
  content,
}: {
  icon?: ReactNode;
  title: string;
  content?: string;
}) => {
  return (
    <div className='flex gap-[20px] flex-col '>
      <div className='icon text-black w-[34px] h-[34px]'>{icon}</div>
      <div className='title text-black font-bold text-[24px]'>{title}</div>
      <div className='content text-black text-[16px]'>{content}</div>
    </div>
  );
};

export default SubFeature;
