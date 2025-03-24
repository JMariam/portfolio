import React from "react";

interface ExperienceProps {
  date: string;
  title: string;
  text: string;
}

export default function Experience({ date, title, text }: ExperienceProps) {
  return (
    <div className="hover:bg-background3 rounded-lg text-text p-8 ">
      <div className="mb-6">
        <p className="text-[14px] leading-[24px]">{title}</p>
        <p className="text-[12px] leading-[19px]">{date}</p>
      </div>
      <p className="text-[13px] leading-[20px]">{text}</p>
    </div>
  );
}
