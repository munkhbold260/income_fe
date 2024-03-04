import { useRouter } from "next/router";
import React, { useState } from "react";
import GeldSmall from "@/components/logos/GeldSmall";
import { TextField } from "@mui/material";

export default function SignUpp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name && email && password === rePassword) {
      console.log("signUp button working &", name, email, password, rePassword);
    }
  };

  return (
    <div className="w-full ">
      <div className=" m-auto w-[1440px] h-[1024px] pl-[222px] bg-white items-center gap-[126px] flex ">
        <div className="flex-col  justify-center items-center gap-10 flex ">
          <GeldSmall />

          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="text-slate-900 text-2xl font-semibold   leading-loose">
              Create Geld account
            </div>
            <div className="text-slate-700 text-base font-normal   leading-normal">
              Sign up below to create your Wallet account
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <form
              // autoComplete="off"
              onSubmit={handleSignUp}
              className="flex-col w-96 justify-start items-start gap-4 flex"
            >
              <TextField
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="name"
                label="Name"
                variant="outlined"
                fullWidth
              />

              <TextField
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
              <TextField
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
              />
              <TextField
                onChange={(e) => {
                  setRePassword(e.target.value);
                }}
                type="password"
                label="Re-Password"
                variant="outlined"
                fullWidth
              />
              <button
                onClick={handleSignUp}
                className="w-96 h-12  bg-blue-600 rounded-[20px] justify-center items-center   text-white text-xl font-normal   leading-7"
              >
                Sign up
              </button>
            </form>

            <div className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
              <button
                onClick={() => router.push("/dashboard")}
                className="text-white text-xl font-normal   leading-7"
              >
                Go To Dashboard
              </button>
            </div>
          </div>
          <div className="justify-start items-baseline inline-flex">
            <div className="text-slate-900 text-base font-normal   leading-normal">
              Already have account?
            </div>
            <button
              onClick={() => router.push("/")}
              className="w-[68px] px-3 rounded-[20px] justify-center items-center gap-1 flex"
            >
              <div className="text-blue-600 text-base font-normal   leading-normal">
                Log in
              </div>
            </button>
          </div>
        </div>
        <div className="w-[708px] h-[1024px] bg-blue-600" />
      </div>
    </div>
  );
}
