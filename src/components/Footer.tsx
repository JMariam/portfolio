"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Beau_Rivage } from "next/font/google";

const beau = Beau_Rivage({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "mariamjubril29@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 1000 * 60 * 60); // Check hourly

    return () => clearInterval(timer);
  }, [currentYear]);

  return (
    <div
      className="h-[5rem] relative bg-background2 text-accent"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+5rem)] -top-[100vh]">
        <div className="h-[5rem] sticky top-[calc(100vh-5rem)]">
          {" "}
          <div className="flex justify-between items-center h-full w-[90%] mx-auto">
            <div className={beau.className}>
              <p className="text-[24px]">Jmariam</p>
            </div>
            <p className="text-[12px]">
              © {currentYear} Jmariam. All rights reserved.
            </p>
            <p className="text-[12px] w-fit flex items-center gap-2">
              <button onClick={handleCopy} className="">
                {copied ? "Email copied to clipboard!" : "Click to copy email"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
