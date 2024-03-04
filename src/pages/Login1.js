import { useRouter } from "next/router";

import React, { useState } from "react";
import GeldSmall from "@/components/logos/GeldSmall";
import { TextField } from "@mui/material";

const LogIn1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordrror] = useState(false);
  const [logins, setLogins] = useState("");

  const router = useRouter();
  const handleLogIn = (e) => {
    e.preventDefault();

    setPasswordrror(false);
    setEmailError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (password == "") {
      setPasswordrror(true);
    }
    // return;
    if (emailError == false && passwordError == false) {
      setLogins("/signup");
      console.log(email, password);
    }
  };

  return (
    <div className="w-full bg- bg-red-200">
      <div className="m-auto w-[1440px] h-[1024px] flex bg-white justify-center">
        <div className=" w-1/2 flex-col justify-center items-center gap-10 inline-flex">
          <GeldSmall />
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="text-slate-900 text-2xl font-semibold   leading-loose">
              Welcome Back
            </div>
            <div className="text-slate-700npm text-base font-normal   leading-normal">
              Welcome back, Please enter your details
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <form
              onSubmit={handleLogIn}
              className="w-96 flex-col justify-start items-start gap-4 flex"
            >
              <TextField
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                error={emailError}
              />
              <TextField
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                error={passwordError}
              />
              <button
                onClick={(handleLogIn, () => router.push(logins))}
                className="w-96 h-12 bg-blue-600 rounded-[20px] justify-center items-center text-white text-xl"
              >
                Log in
              </button>
            </form>
          </div>
          <div className="justify-start items-baseline inline-flex">
            <div className="text-slate-900 text-base font-normal   leading-normal">
              Don’t have account?
            </div>
            <button
              onClick={() => router.push("/signup")}
              className="w-[77px] px-3 rounded-[20px] justify-center items-center gap-1 flex text-blue-600 text-base font-normal   leading-normal"
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="w-1/2 h-[1024px]  bg-blue-600" />
      </div>
    </div>
  );
};

export default LogIn1;
