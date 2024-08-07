"use client";
import React, { useState } from "react";

export default function Step(props) {
  return (
    <div className="flex flex-col w-[500px] h-[550px] border-2 border-red-700 text-blue-900 ">
      <h1>Personal Info</h1>
      <p>Please provide your name, email adress, and phone number.</p>
    </div>
  );
}
