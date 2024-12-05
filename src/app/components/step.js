"use client";
import React, { useState } from "react";
import { useForm } from "../context/FormContext";
import Image from "next/image";
import Arcade from "../../../public/images/icon-arcade.svg";
import Advanced from "../../../public/images/icon-advanced.svg";
import Pro from "../../../public/images/icon-pro.svg";

export default function Step(props) {
  const [page, setPage] = useState(2);
  //monthly=1, and yearly=2 in the billing type
  const [billing, setBilling] = useState(1);
  const [planType, setPlanType] = useState(null); // Estado para el plan seleccionado
  const { form, addToForm, deleteForm } = useForm();

  const [isFilled1, setIsFilled1] = useState(false);
  const [isFilled2, setIsFilled2] = useState(false);
  const [isFilled3, setIsFilled3] = useState(false);
  const [addOns, setAddons] = useState([]);
  const addOnes = [
    { name: "Online Service", monthlyPrice: 1, yearlyPrice: 10 },
    { name: "Larger Storage", monthlyPrice: 2, yearlyPrice: 20 },
    { name: "Customizable Profile", monthlyPrice: 2, yearlyPrice: 20 },
  ];

  const toggleBill = () => {
    setBilling(billing === 2 ? 1 : 2);
  };
  // Función para seleccionar un plan
  const selectPlan = (plan) => {
    setPlanType(plan);
  };

  //Funciones que controlan los Addons
  const toggleFill1 = () => {
    setIsFilled1(!isFilled1);
    setAddons([!isFilled1, isFilled2, isFilled3]);
  };
  const toggleFill2 = () => {
    setIsFilled2(!isFilled2);
    setAddons([isFilled1, !isFilled2, isFilled3]);
  };
  const toggleFill3 = () => {
    setIsFilled3(!isFilled3);
    setAddons([isFilled1, isFilled2, !isFilled3]);
  };

  // Calcular el total de los add-ons seleccionados
  const addOnsTotal = addOnes.reduce((total, addOn, index) => {
    if (addOns[index]) {
      return total + (billing === 1 ? addOn.monthlyPrice : addOn.yearlyPrice);
    }
    return total;
  }, 0);

  const toggleBack = () => {
    setPage(page - 1);
    addToForm(
      {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        billing: billing,
      },
      page - 1
    );
    console.log("The page is: " + page);
  };

  // Estados para los inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Estados para mostrar errores
  const [error, setError] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // Función de validación
  const validateForm = () => {
    let isValid = true;
    let errors = { name: "", email: "", phoneNumber: "" };

    // Validar nombre (una palabra)
    if (name === "") {
      errors.name = "This field is required";
      isValid = false;
    } else if (!/^\S+\s\S+$/.test(name)) {
      errors.name = "Provide a valid Name and Last name";
      isValid = false;
    }

    // Validar email
    if (email === "") {
      errors.email = "This field is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Provide a valid e-mai";
      isValid = false;
    }

    // Validar teléfono (formato + seguido de números)
    if (phoneNumber === "") {
      errors.phoneNumber = "This field is required";
      isValid = false;
    } else if (!/^\+\d+$/.test(phoneNumber)) {
      errors.phoneNumber = "Provide a valid Telephone Number";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const toggleNext = () => {
    if (validateForm() && page === 1) {
      setPage(page + 1);
      addToForm(
        {
          name: name,
          phoneNumber: phoneNumber,
          email: email,
          billing: billing,
        },
        page + 1
      );
      console.log("The page is: " + (page + 1));
    } else if (page === 2 && planType === null) {
      alert("Por favor, selecciona un plan.");
      return;
    } else if (page === 2) {
      addToForm(
        {
          planType,
          billing,
        },
        page + 1
      );
      setPage(page + 1);
    } else if (page === 3) {
      console.log(addOns);
      addToForm(
        {
          addOns, // Guardar el plan seleccionado
        },
        page + 1
      );
      setPage(page + 1);
    } else if (page === 4) {
      deleteForm();
      setPage(page + 1);
    }
  };

  return (
    <div>
      {page === 1 ? (
        <div className="flex flex-col md:w-[500px] w-full md:h-[550px] h-[400px] border-0 text-blue-900  md:py-4 md:px-0 py-1 px-4 place-content-between">
          <div className="flex flex-col mt-1 ">
            <h1 className="text-3xl font-bold  ">Personal info</h1>
            <p className="text-lg text-gray-400 mt-1 ">
              Please provide your name, email adress, and phone number.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <div className="flex flex-row justify-between">
                <p className="font-medium">Name</p>

                {error.name && (
                  <p className="text-red-500 font-semibold">{error.name}</p>
                )}
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Stephen King"
                className="rounded-md border-[1px] mt-1 border-gray-400 focus:border-blue-800 focus h-[45px] w-full p-3 text-lg font-semibold placeholder-gray-400"
              />
            </div>
            <div className="flex flex-col mt-6 ">
              <div className="flex flex-row justify-between">
                <p className="font-medium">Email Address</p>
                {error.email && (
                  <p className="text-red-500 font-semibold">{error.email}</p>
                )}
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. stephenking@lorem.com"
                className="rounded-md border-[1px] mt-1 border-gray-400 focus:border-blue-800 focus h-[45px] w-full p-3 text-lg font-semibold"
              />
            </div>
            <div className="flex flex-col mt-6 ">
              <div className="flex flex-row justify-between">
                <p className="font-medium">Phone Number</p>
                {error.phoneNumber && (
                  <p className="text-red-500 font-semibold">
                    {error.phoneNumber}
                  </p>
                )}
              </div>
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g. +5411155000999"
                className="rounded-md border-[1px] mt-1 border-gray-400 focus:border-blue-800 focus h-[45px] w-full p-3 text-lg font-semibold"
              />
            </div>
          </div>
          <div className="md:flex hidden mt-8 w-full  place-content-end">
            <button
              onClick={toggleNext}
              className="bg-sky-900 rounded-md h-[50px] w-[120px] text-white font-medium"
            >
              Next Step
            </button>
          </div>
          {/* MODAL MOBILE FOR BUTTON */}
          <div className="md:hidden flex items-center fixed  z-index bottom-0 left-0  w-screen h-[80px] bg-slate-50">
            <div className="flex  m-5 w-full  place-content-end">
              <button
                onClick={toggleNext}
                className="bg-sky-900 rounded-md h-[50px] w-[120px] text-white font-medium"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      ) : page === 2 ? (
        <div className="flex flex-col md:w-[500px] w-full md:h-[550px] h-[400px] border-0 text-blue-900  md:py-4 md:px-0 py-0 px-4 place-content-between">
          <div className="flex flex-col md:mt-4 mt-0 ">
            <h1 className="text-3xl font-bold  ">Select Your Plan</h1>
            <p className="text-lg text-gray-400 mt-1 ">
              You have the option of monthly or yearly billing.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex md:flex-row flex-col justify-between ">
              <button
                className={`md:w-[150px] h-[85px] ${
                  billing == 2 ? "md:h-[200px]" : "md:h-[180px]"
                } flex md:flex-col flex-row rounded-md  ${
                  planType === "Arcade"
                    ? "border-blue-600 border-[2px]"
                    : "border-gray-400 border-[1px]"
                } justify-start md:items-start items-center md:p-4 p-1 mt-2 md:mt-0 hover:border-blue-600`}
                onClick={() => selectPlan("Arcade")}
              >
                <Image
                  src={Arcade}
                  alt="arcade"
                  width={55}
                  height={55}
                  className="w-[50px] h-[50px] md:mx-0 mx-2"
                />
                <div className="flex flex-col text-left md:mt-10 ">
                  <p className="text-lg font-bold text-blue-900  ">Arcade</p>
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
                </div>
              </button>
              <button
                className={`md:w-[150px] h-[85px] ${
                  billing == 2 ? "md:h-[200px]" : "md:h-[180px]"
                } flex md:flex-col flex-row rounded-md  ${
                  planType === "Advanced"
                    ? "border-blue-600 border-[2px]"
                    : "border-gray-400 border-[1px]"
                } justify-start md:items-start items-center md:p-4 p-1 mt-2 md:mt-0 hover:border-blue-600`}
                onClick={() => selectPlan("Advanced")}
              >
                <Image
                  src={Advanced}
                  alt="advanced"
                  width={55}
                  height={55}
                  className="w-[50px] h-[50px] md:mx-0 mx-2"
                />
                <div className="flex flex-col text-left md:mt-10 ">
                  <p className="text-lg font-bold text-blue-900 ">Advanced</p>
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
                </div>
              </button>
              <button
                className={`md:w-[150px] h-[85px] ${
                  billing == 2 ? "md:h-[200px]" : "md:h-[180px]"
                } flex md:flex-col flex-row rounded-md  ${
                  planType === "Pro"
                    ? "border-blue-600 border-[2px]"
                    : "border-gray-400 border-[1px]"
                } justify-start md:items-start items-center md:p-4 p-1 mt-2 md:mt-0 hover:border-blue-600`}
                onClick={() => selectPlan("Pro")}
              >
                <Image
                  src={Pro}
                  alt="pro"
                  width={55}
                  height={55}
                  className="w-[50px] h-[50px] md:mx-0 mx-2"
                />
                <div className="flex flex-col text-left md:mt-10 ">
                  <p className="text-lg font-bold text-blue-900">Pro</p>
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
                </div>
              </button>
            </div>
            <div className="flex flex-row font-bold md:mt-10 mt-3 justify-center">
              <p
                className={`mx-5 ${
                  billing == 2 ? "text-gray-400" : "text-blue-900 "
                } `}
              >
                Monthly
              </p>
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
              <p
                className={`mx-5 ${
                  billing == 2 ? "text-blue-900" : "text-gray-400"
                } `}
              >
                Yearly
              </p>
            </div>
          </div>
          <div className=" md:flex hidden flex-row mt-8 w-full  justify-between ">
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
          {/* MODAL MOBILE FOR BUTTON */}
          <div className="md:hidden flex items-center fixed  z-index bottom-0 left-0  w-screen h-[80px] bg-slate-50">
            <div className="flex  m-5 w-full  justify-between">
              <button
                onClick={toggleBack}
                className=" text-sky-900 font-medium"
              >
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
                <p className="text-blue-600 font-medium">
                  {billing === 1 ? "+$1/mo" : "+$10/yr"}
                </p>
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
                <p className="text-blue-600 font-medium">
                  {billing === 1 ? "+$2/mo" : "+$20/yr"}
                </p>
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
                <p className="text-blue-600 font-medium">
                  {billing === 1 ? "+$2/mo" : "+$20/yr"}
                </p>
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
      ) : page === 4 ? (
        <div className="flex flex-col w-[500px] h-[550px] border-0 text-blue-900  py-4 place-content-between">
          <div className="flex flex-col mt-4 ">
            <h1 className="text-3xl font-bold  ">Finishing up</h1>
            <p className="text-lg text-gray-400 mt-1 ">
              Double-check everything looks OK before confirming.
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-row align-middle justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  {planType} {billing === 1 ? "(Monthly)" : "(Yearly)"}
                </h2>
                <button onClick={toggleBill}>Change</button>
              </div>
              <p className="text-lg font-bold">
                {planType === "Arcade"
                  ? billing === 1
                    ? "$9/mo"
                    : "$90/yr"
                  : planType === "Advanced"
                  ? billing === 1
                    ? "$12/mo"
                    : "$120/yr"
                  : billing === 1
                  ? "$15/mo"
                  : "$150/yr"}
              </p>
            </div>
            <hr></hr>

            <div className="flex flex-col">
              {addOnes.map(
                (addOn, index) =>
                  addOns[index] && (
                    <div
                      key={index}
                      className="flex flex-row justify-between my-2"
                    >
                      <p className="text-gray-400">{addOn.name}</p>
                      <p className="font-semibold">
                        +$
                        {billing === 1
                          ? addOn.monthlyPrice + "/mo"
                          : addOn.yearlyPrice + "/yr"}
                      </p>
                    </div>
                  )
              )}
            </div>
            <div className="flex flex-row justify-between mt-5">
              <p className="text-gray-400">
                Total {billing === 1 ? "(per month)" : "(per year)"}
              </p>
              <p className="text-xl font-bold text-blue-700">
                $
                {(planType === "Arcade"
                  ? billing === 1
                    ? 9
                    : 90
                  : planType === "Advanced"
                  ? billing === 1
                    ? 12
                    : 120
                  : billing === 1
                  ? 15
                  : 150) + addOnsTotal}
                /{billing === 1 ? "mo" : "yr"}
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-8 w-full  justify-between ">
            <button onClick={toggleBack} className=" text-sky-900 font-medium">
              Go Back
            </button>
            <button
              onClick={toggleNext}
              className="bg-blue-700 rounded-md h-[50px] w-[120px] text-white font-medium"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-[500px] h-[550px] border-0 text-blue-900">
          <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex mb-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20"
                viewBox="0 0 80 80"
                fill="none"
              >
                <g>
                  <circle cx="40" cy="40" r="40" fill="#F9818E" />
                  <path
                    fill="#E96170"
                    d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
                  />
                  <path
                    fill="#FFF"
                    d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
                  />
                </g>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-blue-900 mb-4">
              Thank you!
            </h1>
            <p className="text-slate-400 text-center w-[440px]">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
