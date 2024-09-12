"use client";
import React, { useState } from "react";
import { useForm } from "../context/FormContext";
import Image from "next/image";
import Arcade from "../../../public/images/icon-arcade.svg";
import Advanced from "../../../public/images/icon-advanced.svg";
import Pro from "../../../public/images/icon-pro.svg";

export default function Step(props) {
  const [page, setPage] = useState(1);
  //monthly=false, and yearly=true in the billing type
  const [billing, setBilling] = useState(1);
  const { form, addToForm } = useForm();

  const [isFilled1, setIsFilled1] = useState(false);
  const [isFilled2, setIsFilled2] = useState(false);
  const [isFilled3, setIsFilled3] = useState(false);

  const toggleBill = () => {
    billing == 2 ? setBilling(1) : setBilling(2);
  };

  const toggleFill1 = () => {
    setIsFilled1(!isFilled1);
  };
  const toggleFill2 = () => {
    setIsFilled2(!isFilled2);
  };
  const toggleFill3 = () => {
    setIsFilled3(!isFilled3);
  };

  const toggleBack = () => {
    setPage(page - 1);
    console.log("The page is: " + page);
  };

  const toggleNext = () => {
    setPage(page + 1);
    addToForm(
      {
        name: "juan",
        phoneNumber: "155462",
        email: "juan@hotmail.com",
        billing: billing,
      },
      page + 1
    );
    console.log("The page is: " + page);
  };

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
              <input
                key={1}
                className="rounded-md border-[1px] mt-1 border-gray-400 focus:border-blue-800 focus h-[45px] w-full p-3 text-lg font-semibold"
              ></input>
            </div>
            <div className="flex flex-col mt-6 ">
              <p className="font-medium">Email Address</p>
              <input
                key="2"
                className="rounded-md border-[1px] mt-1 border-gray-400 focus:border-blue-800 focus h-[45px] w-full p-3 text-lg font-semibold"
              ></input>
            </div>
            <div className="flex flex-col mt-6 ">
              <p className="font-medium">Phone Number</p>
              <input
                key="3"
                className="rounded-md border-[1px] mt-1 border-gray-400 focus:border-blue-800 focus h-[45px] w-full p-3 text-lg font-semibold"
              ></input>
            </div>
          </div>
          <div className="flex mt-8 w-full  place-content-end ">
            <button
              onClick={toggleNext}
              className="bg-sky-900 rounded-md h-[50px] w-[120px] text-white font-medium"
            >
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
              <button
                className={`w-[150px] ${
                  billing == 2 ? "h-[200px]" : "h-[180px]"
                } flex flex-col rounded-md border-[1px] border-gray-400 justify-start p-4`}
              >
                <Image
                  src={Arcade}
                  alt="arcade"
                  width={55}
                  height={55}
                  className="w-[50px] h-[50px]"
                />

                <p className="text-lg font-bold text-blue-900 mt-10 ">Arcade</p>
                {billing == 2 ? (
                  <div className="flex flex-col text-left">
                    <p className="  text-gray-400">$90/yr</p>
                    <p className=" font-medium   text-blue-900">
                      2 months free
                    </p>
                  </div>
                ) : (
                  <p className="text-lg  text-gray-400">$9/mo</p>
                )}
              </button>
              <button
                className={`w-[150px] ${
                  billing == 2 ? "h-[200px]" : "h-[180px]"
                } flex flex-col rounded-md border-[1px] border-gray-400 justify-start p-4`}
              >
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
                {billing == 2 ? (
                  <div className="flex flex-col text-left">
                    <p className="  text-gray-400">$120/yr</p>
                    <p className=" font-medium   text-blue-900">
                      2 months free
                    </p>
                  </div>
                ) : (
                  <p className="text-lg  text-gray-400">$12/mo</p>
                )}
              </button>
              <button
                className={`w-[150px] ${
                  billing == 2 ? "h-[200px]" : "h-[180px]"
                } flex flex-col rounded-md border-[1px] border-gray-400 justify-start p-4`}
              >
                <Image
                  src={Pro}
                  alt="pro"
                  width={55}
                  height={55}
                  className="w-[50px] h-[50px]"
                />

                <p className="text-lg font-bold text-blue-900 mt-10 ">Pro</p>
                {billing == 2 ? (
                  <div className="flex flex-col text-left">
                    <p className="  text-gray-400">$150/yr</p>
                    <p className=" font-medium   text-blue-900">
                      2 months free
                    </p>
                  </div>
                ) : (
                  <p className="text-lg  text-gray-400">$15/mo</p>
                )}
              </button>
            </div>
            <div className="flex flex-row text-blue-900 font-bold mt-10 justify-center">
              <p className="mx-5">Monthly</p>
              <button
                onClick={toggleBill}
                className={` flex rounded-2xl bg-blue-900 w-[45px] h-[22px] p-[2px] ${
                  billing == 2 ? " justify-end   " : " justify-start  "
                } `}
              >
                <div className="flex z-10 bg-gray-50 rounded-full w-[18px] h-[18px]">
                  .
                </div>
              </button>
              <p className="mx-5">Yearly</p>
            </div>
          </div>
          <div className="flex flex-row mt-8 w-full  justify-between ">
            <button onClick={toggleBack} className=" text-sky-900 font-medium">
              Go Back
            </button>
            <button
              onClick={toggleNext}
              className="bg-sky-900 rounded-md h-[50px] w-[120px] text-white font-medium"
            >
              Next Step
            </button>
          </div>
        </div>
      ) : page === 3 ? (
        <div className="flex flex-col w-[500px] h-[550px] border-0 text-blue-900  py-4 place-content-between">
          <div className="flex flex-col mt-4 ">
            <h1 className="text-3xl font-bold  ">Pick add-ons</h1>
            <p className="text-lg text-gray-400 mt-1 ">
              Add-ons help enhance tour gaming experience.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              onClick={toggleFill1}
              className={`w-full h-[80px] flex flex-row rounded-md  ${
                isFilled1
                  ? "border-blue-600 border-[2px] "
                  : "border-gray-400 border-[1px] hover:border-blue-600 hover:border-[1px]"
              }  justify-between items-center p-4 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 10 10"
                className={`border-[1px] rounded-md border-gray-400 p-1 ${
                  isFilled1 ? "bg-blue-600" : "bg-none"
                } `}
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  d="m1 4 3.433 3.433L10.866 1"
                />
              </svg>
              <div className="flex flex-row justify-between w-full text-gray-400 items-center">
                <div className=" flex flex-col  text-left ml-4">
                  <p className="text-blue-900 font-semibold">Online service</p>
                  <p>Access to multiplayer games</p>
                </div>
                <p className="text-blue-600 font-medium">+$1/mo</p>
              </div>
            </button>
            <button
              onClick={toggleFill2}
              className={`w-full h-[80px] flex flex-row rounded-md  ${
                isFilled2
                  ? "border-blue-600 border-[2px] "
                  : "border-gray-400 border-[1px] hover:border-blue-600 hover:border-[1px]"
              }  justify-between items-center p-4 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 10 10"
                className={`border-[1px] rounded-md border-gray-400 p-1 ${
                  isFilled2 ? "bg-blue-600" : "bg-none"
                } `}
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  d="m1 4 3.433 3.433L10.866 1"
                />
              </svg>
              <div className="flex flex-row justify-between w-full text-gray-400 items-center">
                <div className=" flex flex-col  text-left ml-4">
                  <p className="text-blue-900 font-semibold">Larger storage</p>
                  <p>Extra 1TB of cloud save</p>
                </div>
                <p className="text-blue-600 font-medium">+$2/mo</p>
              </div>
            </button>
            <button
              onClick={toggleFill3}
              className={`w-full h-[80px] flex flex-row rounded-md  ${
                isFilled3
                  ? "border-blue-600 border-[2px] "
                  : "border-gray-400 border-[1px] hover:border-blue-600 hover:border-[1px]"
              }  justify-between items-center p-4 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 10 10"
                className={`border-[1px] rounded-md border-gray-400 p-1 ${
                  isFilled3 ? "bg-blue-600" : "bg-none"
                } `}
              >
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  d="m1 4 3.433 3.433L10.866 1"
                />
              </svg>
              <div className="flex flex-row justify-between w-full text-gray-400 items-center">
                <div className=" flex flex-col  text-left ml-4">
                  <p className="text-blue-900 font-semibold">
                    Customizable Profile
                  </p>
                  <p>Custom theme on your profile</p>
                </div>
                <p className="text-blue-600 font-medium">+$2/mo</p>
              </div>
            </button>
          </div>

          <div className="flex flex-row mt-8 w-full  justify-between ">
            <button onClick={toggleBack} className=" text-sky-900 font-medium">
              Go Back
            </button>
            <button
              onClick={toggleNext}
              className="bg-sky-900 rounded-md h-[50px] w-[120px] text-white font-medium"
            >
              Next Step
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-[500px] h-[550px] border-0 text-blue-900  py-4 place-content-between">
          <div className="flex flex-col mt-4 ">
            <h1 className="text-3xl font-bold  ">Finishing up</h1>
            <p className="text-lg text-gray-400 mt-1 ">
              Double-check everything looks OK before confirming.
            </p>
          </div>
          <div>asfagsahasdfhadhf</div>
          <div className="flex flex-row mt-8 w-full  justify-between ">
            <button onClick={toggleBack} className=" text-sky-900 font-medium">
              Go Back
            </button>
            <button
              onClick={toggleNext}
              className="bg-sky-900 rounded-md h-[50px] w-[120px] text-white font-medium"
            >
              Next Step
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
