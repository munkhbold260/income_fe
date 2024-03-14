import { category } from "@/utils/lastDRecord";
// import Modal from "./Modal";
import React, { useState } from "react";

export function Option() {
  const [valueD, setValueD] = useState("Choose");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleGetValueD = (valueD) => {
    setValueD(valueD);

    setDropdownVisible(false);
  };

  return (
    // <select className="select select-bordered w-full  text-[#94A3B8] text-base font-normal not-italic bg-[#F9FAFB]">
    //   <option disabled selected className="">
    //     Choose
    //   </option>
    //   {category.map((e) => {
    //     return <option>{e.cateName}</option>;
    //   })}
    // </select>
    <div className="dropdown w-[346px]  absolute  text-[#94A3B8] text-base font-normal not-italic bg-[#F3F4F6] rounded-xl  text-center ">
      <div
        tabIndex={0}
        role="button "
        className="rounded-2xl h-12  items-center pl-4 selected max-w-full w-full bg-[#F3F4F6] border-none text-center flex justify-start  text-[#94A3B8] "
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        <option className="text-[#000000]">{valueD}</option>
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content z-[1] menu p-0 rounded-box bg-[#FFFFFF] max-w-full w-full shadow-2xl   ${
          dropdownVisible ? "block" : "hidden"
        }`}
      >
        <li
        // style={{ maxHeight: "680px" }}
        >
          {category.map((e) => {
            return (
              <a
                className="flex flex-col justify-center items-start text-[#000000] "
                onClick={() => {
                  handleGetValueD(` ${e.cateName}`);
                }}
              >
                <div className="flex text-center gap-2 py-2 px-2 ">
                  <p>{e.logo}</p>
                  <p className="text-[#000000] py-0.5 text-base not-italic font-normal">
                    {e.cateName}
                  </p>
                </div>
              </a>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export function Option4() {
  return (
    <select className="select select-bordered max-w-xs border-none w-full text-[#94A3B8] text-base font-normal not-italic bg-[#F9FAFB]">
      <option disabled selected>
        Write here
      </option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  );
}
