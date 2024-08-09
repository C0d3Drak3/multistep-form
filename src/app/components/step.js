"use client";
import React, { useState } from "react";

export default function Step(props) {
  return (
    <div className="flex flex-col w-[500px] h-[550px] border-2 border-red-700 text-blue-900 m ">
      <h1 className="text-3xl font-bold mt-4 ">Personal info</h1>
      <p className="text-lg text-gray-400 mt-1 mb-2">
        Please provide your name, email adress, and phone number.
      </p>
      <div className="mt-4">
        <p className="text-blue-900 font-medium">Name</p>
        <input className="rounded-md border-2 border-gray-400 focus:border-blue-800 focus"></input>
      </div>
    </div>
  );
}
