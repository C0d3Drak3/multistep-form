"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arcade from "../../../public/images/icon-arcade.svg";
import Advanced from "../../../public/images/icon-advanced.svg";
import Pro from "../../../public/images/icon-pro.svg";

export default function Step(props) {
  const [page, setPage] = useState(2);

  return (
    <div>
      {page === 1 ? (
        <div className="flex flex-col w-[500px] h-[550px] border-0 text-blue-900  py-4 place-content-between">
          <div className="flex flex-col mt-4 ">
            <h1 className="text-3xl font-bold  ">Personal info</h1>
            <p className="text-lg text-gray-400 mt-1 ">
              Please provide your name, email adress, and phone number.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <p className="font-medium">Name</p>
              <input className="rounded-md border-[1px] mt-1 border-gray-400 focus:border-blue-800 focus h-[45px] w-full p-3 text-lg font-semibold"></input>
            </div>
            <div className="flex flex-col mt-6 ">
              <p className="font-medium">Email Address</p>
              <input className="rounded-md border-[1px] mt-1 border-gray-400 focus:border-blue-800 focus h-[45px] w-full p-3 text-lg font-semibold"></input>
            </div>
            <div className="flex flex-col mt-6 ">
              <p className="font-medium">Phone Number</p>
              <input className="rounded-md border-[1px] mt-1 border-gray-400 focus:border-blue-800 focus h-[45px] w-full p-3 text-lg font-semibold"></input>
            </div>
          </div>
          <div className="flex mt-8 w-full  place-content-end ">
            <button className="bg-sky-900 rounded-md h-[50px] w-[120px] text-white font-medium">
              Next Step
            </button>
          </div>
        </div>
      ) : page === 2 ? (
        <div className="flex flex-col w-[500px] h-[550px] border-0 text-blue-900  py-4 place-content-between">
          <div className="flex flex-col mt-4 ">
            <h1 className="text-3xl font-bold  ">Select Your Plan</h1>
            <p className="text-lg text-gray-400 mt-1 ">
              You have the option of monthly or yearly billing.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between ">
              <button className="w-[150px] h-[180px] flex flex-col rounded-md border-[1px] border-gray-400 justify-start p-4">
                <Image
                  src={Arcade}
                  alt="arcade"
                  width={55}
                  height={55}
                  className="w-[50px] h-[50px]"
                />

                <p className="text-lg font-bold text-blue-900 mt-10 ">Arcade</p>
                <p className="text-lg  text-gray-400">$9/mo</p>
              </button>
              <button className="w-[150px] h-[180px] flex flex-col rounded-md border-[1px] border-gray-400 justify-start p-4">
                <Image
                  src={Advanced}
                  alt="advanced"
                  width={55}
                  height={55}
                  className="w-[50px] h-[50px]"
                />

                <p className="text-lg font-bold text-blue-900 mt-10 ">
                  Advanced
                </p>
                <p className="text-lg  text-gray-400">$12/mo</p>
              </button>
              <button className="w-[150px] h-[180px] flex flex-col rounded-md border-[1px] border-gray-400 justify-start p-4">
                <Image
                  src={Pro}
                  alt="pro"
                  width={55}
                  height={55}
                  className="w-[50px] h-[50px]"
                />

                <p className="text-lg font-bold text-blue-900 mt-10 ">Pro</p>
                <p className="text-lg  text-gray-400">$15/mo</p>
              </button>
            </div>
            <div className="flex flex-row text-blue-900 font-bold mt-10 justify-center">
              <p className="mx-5">Monthly</p>
              <div className="rounded-2xl bg-slate-400">Selector</div>
              <p className="mx-5">Yearly</p>
            </div>
          </div>
          <div className="flex flex-row mt-8 w-full  justify-between ">
            <button className=" text-sky-900 font-medium">Go Back</button>
            <button className="bg-sky-900 rounded-md h-[50px] w-[120px] text-white font-medium">
              Next Step
            </button>
          </div>
        </div>
      ) : page === 3 ? (
        <div></div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
