import React from "react";

interface ExperienceProps {
  date: string;
  title: string;
  text: string;
}

export default function Experience({ date, title, text }: ExperienceProps) {
  return (
    <div className="bg-background3 hover:bg-background2 rounded-lg text-text p-4 lg:p-8">
      <div className="mb-6">
        <p className="text-[18px] leading-[26px]">{title}</p>
        <p className="text-[14px] leading-[24px]">{date}</p>
      </div>
      <p className="text-[16px] leading-[25px]">{text}</p>
    </div>
  );
}
