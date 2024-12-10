"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "../context/FormContext";
//import Image from "next/image";
import Step from "./step";

export default function Form() {
  const [step, setStep] = useState("");
  const { form } = useForm();

  // useEffect para sincronizar el estado del contexto con el estado local
  useEffect(() => {
    setStep(form.step); // Actualizamos el estado del step cuando cambia en el contexto
  }, [form.step]);

  return (
    <div className="bg-slate-100 flex flex-col md:flex-row md:rounded-xl shadow-xl w-full md:w-[1000px] md:h-[600px] justify-between font-ubuntu">
      <div className="relative flex md:flex-col justify-center md:items-center md:w-[300px] md:h-[600px] ">
        {/* BACKGROUND IMG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[274px] h-[650px] fill-none md:block hidden"
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
        {/* BACKGROUND IMG MOBILE */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[768px] h-auto fill-none md:hidden"
          viewBox="0 0 375 172"
        >
          <rect width="375" height="172" className="fill-[#483EFF]" />
          <mask
            id="a"
            x="0"
            y="0"
            width="375"
            height="172"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
          >
            <rect width="375" height="172" className="fill-white" />
          </mask>
          <g mask="url(#a)">
            <path
              className="fill-[#6259FF]"
              d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z"
              transform="scale(0.8) translate(-30 -100)"
            />
            <ellipse
              cx="129.864"
              cy="258.711"
              className="fill-[#FFAF7E]"
              rx="96.329"
              ry="96.373"
              transform="scale(0.8) translate(-30 -100)"
            />
            <path
              className="fill-[#F9818E]"
              d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z"
              transform="scale(0.8) translate(-30 -100)"
            />
            <path
              className="stroke-white"
              strokeLinecap="round"
              strokeLinejoin="bevel"
              strokeWidth="5"
              d="m367.336 243.125 15.263-15.549M430.872 251.016l-17.995-15.112M399.36 271.751l-9.94 21.293"
              transform="scale(0.8) translate(-30 -100)"
            />
          </g>
        </svg>

        {/* STEPS  */}
        <div className="absolute z-30 justify-between md:mt-0 mt-[18px] md:justify-normal md:w-[200px] md:h-[500px] w-[200px] h-[45px] text-white flex md:flex-col flex-row">
          <div className="flex md:flex-row md:w-[200px] w-[40px] h-[40px] md:items-center mb-8">
            <div
              className={`rounded-full border-2  h-[40px] w-[40px] text-center font-semibold p-1 ${
                step === 1
                  ? "bg-sky-200 border-sky-200 text-blue-800"
                  : " border-white"
              }`}
            >
              {" "}
              1{" "}
            </div>
            <div className="md:block hidden text-sm ml-4">
              <h1>STEP 1</h1>
              <p className="font-semibold">YOUR INFO</p>
            </div>
          </div>
          <div className="flex flex-row md:w-[200px] h-[40px] items-center mb-8">
            <div
              className={`rounded-full border-2  h-[40px] w-[40px] text-center font-semibold p-1 ${
                step === 2
                  ? "bg-sky-200 border-sky-200 text-blue-800"
                  : " border-white"
              }`}
            >
              {" "}
              2{" "}
            </div>
            <div className=" md:block hidden text-sm ml-4">
              <h1>STEP 2</h1>
              <p className="font-semibold">SELECT PLAN</p>
            </div>
          </div>
          <div className="flex flex-row md:w-[200px] h-[40px] items-center mb-8">
            <div
              className={`rounded-full border-2  h-[40px] w-[40px] text-center font-semibold p-1 ${
                step === 3
                  ? "bg-sky-200 border-sky-200 text-blue-800"
                  : " border-white"
              }`}
            >
              {" "}
              3{" "}
            </div>
            <div className="md:block hidden text-sm ml-4">
              <h1>STEP 3</h1>
              <p className="font-semibold">ADD-ONS</p>
            </div>
          </div>
          <div className="flex flex-row md:w-[200px] h-[40px] items-center mb-8">
            <div
              className={`rounded-full border-2  h-[40px] w-[40px] text-center font-semibold p-1 ${
                step === 4
                  ? "bg-sky-200 border-sky-200 text-blue-800"
                  : " border-white"
              }`}
            >
              {" "}
              4{" "}
            </div>
            <div className="md:block hidden text-sm ml-4">
              <h1>STEP 4</h1>
              <p className="font-semibold">SUMMARY</p>
            </div>
          </div>
        </div>

        <div className="absolute z-30 flex mt-[100px] justify-center items-center w-[350px] md:h-[600px] h-[450px] md:hidden bg-slate-50 rounded-lg shadow-lg">
          <Step />
        </div>
      </div>
      <div className="md:flex justify-center items-center w-[700px] h-[600px] hidden">
        <Step />
      </div>
    </div>
  );
}
