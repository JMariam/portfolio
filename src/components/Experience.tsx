import React from "react";

interface ExperienceProps {
  date: string;
  title: string;
  text: string;
}

export default function Experience({ date, title, text }: ExperienceProps) {
  return (
    <div className="bg-background3 hover:bg-background2 rounded-lg text-text p-8 ">
      <div className="mb-6">
        <p className="text-[14px] leading-[24px]">{title}</p>
        <p className="text-[12px] leading-[22px]">{date}</p>
      </div>
      <p className="text-[13px] leading-[24px]">{text}</p>
    </div>
  );
}
