import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [dash, setDash] = useState("Dashboard");
  console.log("route");
  return (
    <div className="w-full flex ">
      <div className="w-[1440px] m-auto h-[72px] px-[120px] py-4 bg-white justify-between items-center inline-flex">
        <div className="justify-start items-center gap-6 flex ">
          <div className="p-[6.30px] justify-start items-center gap-[11.03px] flex">
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.8296 15.3677V6.30078H15.5651V15.3677H6.30066V24.6322H15.5651V33.6991H24.8296V24.6322H34.0941V15.3677H24.8296ZM24.8296 24.4347H15.5651V15.5666H24.8296V24.4347Z"
                fill="#0166FF"
              />
            </svg>
          </div>
          <Link href={"/dashboard"}>
            <button
              onClick={() => {
                setDash("Dashboard");
              }}
              className={`text-center  text-base font-semibold  leading-normal ${
                dash == "Dashboard" ? "text - slate" - 900 : "text-gray-500 "
              }`}
            >
              Dashboard
            </button>
          </Link>
          <Link href={"/records"}>
            <button
              onClick={() => {
                setDash("Records");
              }}
              className={`text-center  text-base font-semibold  leading-normal ${
                dash == "Records" ? "text - slate" - 900 : "text-gray-500"
              }`}
            >
              Records
            </button>
          </Link>
        </div>
        <div className="justify-start items-center gap-6 flex">
          <div className="w-[99px] px-3 bg-blue-600 rounded-[20px] justify-center items-center gap-1 flex">
            <div className="text-white text-base font-normal items-center leading-normal flex gap-1  justify-between">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H10.625V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H9.375V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z"
                  fill="white"
                />
              </svg>
              <p>Record</p>
            </div>
          </div>
          <div className="w-10 h-10 flex-col justify-center items-center inline-flex">
            <img
              className="self-stretch grow shrink basis-0 rounded-full"
              src="https://via.placeholder.com/40x40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
