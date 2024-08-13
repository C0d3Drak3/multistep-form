"use client";
import React, { useState } from "react";

export default function Step(props) {
  return (
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
  );
}
