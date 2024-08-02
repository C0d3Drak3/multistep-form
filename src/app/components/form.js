"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Form() {
  const [name, setName] = useState("");

  return (
    <div className="bg-slate-100 flex flex-row rounded-xl shadow-xl w-[1200px] h-[700px]">
      <div className="flex flex-col justify-center items-center w-[300px] h-[700]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[274px] h-[568px] fill-none"
          viewBox="0 0 274 568"
        >
          <rect className="w-[274px] h-[568px] fill-[#483EFF]" rx="10" />
          <mask
            id="a"
            className="w-[274px] h-[568px]"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
          >
            <rect className="w-[274px] h-[568px] fill-white" rx="10" />
          </mask>
          <g mask="url(#a)">
            <path
              className="fill-[#6259FF]"
              fillRule="evenodd"
              d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z"
              clipRule="evenodd"
            />
            <path
              className="fill-[#F9818E]"
              fillRule="evenodd"
              d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z"
              clipRule="evenodd"
            />
            <path
              className="stroke-white"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              strokeWidth="5"
              d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"
            />
            <path
              className="fill-[#FFAF7E]"
              d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
