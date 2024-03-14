import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import AddButton from "@/components/logos/AddButton";
import Category from "./Category";
import Types from "./Types";
import XButton from "@/components/logos/XButton";
import { Input } from "./Input";
import { Option, Option4 } from "./Option";
import { Daypicker, Timepicker } from "./Daypicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Left() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [color, setColor] = useState("blue");

  return (
    <div className="w-[282px] h-[1080px] px-4 py-6 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-10 inline-flex">
      <div className="w-[250px] h-[88px] flex-col  justify-start items-start gap-6 inline-flex">
        <div className="text-black text-2xl font-semibold   leading-loose">
          Records
        </div>
        <div className="self-stretch h-8 px-3  rounded-[20px] justify-center items-center gap-1 inline-flex flex-col">
          {/* <button className="text-white text-base font-normal   leading-normal">
            <AddButton />
          </button> */}
          <div>
            <Button onClick={handleOpen}>
              <AddButton />
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className=" w-full h-full flex flex-col justify-center items-center">
                <div className="rounded-xl bg-red-300">
                  <div className="w-[792px] px-6 py-5  border-b border-slate-200 justify-between items-center inline-flex">
                    <div className="text-slate-900 text-xl font-semibold  leading-7">
                      Add Record
                    </div>
                    <XButton />
                  </div>
                </div>
                ndfkjsdjk
                <div className="border-t border-[#E2E8F0] flex justify-center ">
                  <div className="py-5 px-6 w-[396px] gap-4 flex flex-col">
                    <div className="flex bg-[#F3F4F6] rounded-3xl">
                      <button
                        className={` rounded-3xl  w-[172px] h-[40px] ${
                          color == "blue"
                            ? "bg-[#0166FF] text-[#F9FAFB] "
                            : "bg-[#F3F4F6]  text-[#1F2937]"
                        }`}
                        onClick={() => {
                          setColor("blue");
                        }}
                      >
                        Expense
                      </button>
                      <button
                        className={` rounded-3xl w-[172px] h-[40px] ${
                          color == "green"
                            ? "bg-[#16A34A] text-[#F9FAFB]"
                            : "bg-[#F3F4F6] text-[#1F2937]"
                        }`}
                        onClick={() => {
                          setColor("green");
                        }}
                      >
                        Income
                      </button>
                    </div>
                    <div className="flex flex-col gap-5 ">
                      <div className="bg-[#F3F4F6] rounded-2xl w-full px-2 flex flex-col justify-center h-[76px]">
                        <p className="text-base font-normal not-italic px-6 ">
                          Amount
                        </p>
                        <Input />
                      </div>

                      <div className="">
                        <p className="text-base not-italic font-normal p-1 ">
                          Category
                        </p>
                        <div className="relative ">
                          <Option />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="w-[168px]">
                          <p className="text-base not-italic font-normal p-1">
                            Date
                          </p>
                          <Daypicker />
                        </div>
                        <div className="w-[168px]">
                          <p className="text-base not-italic font-normal p-1">
                            Time
                          </p>
                          <Timepicker />
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setColor("blue");
                        }}
                        className={`btn h-8  rounded-3xl ${
                          color == "blue"
                            ? "bg-[#0166FF] text-[#FFFFFF] "
                            : "bg-[#16A34A] text-[#F9FAFB]"
                        }`}
                      >
                        Add Record
                      </button>
                    </div>
                  </div>
                  <div className="pt- pb-6 px-6 w-[396px] flex flex-col gap-8">
                    <div>
                      <p className="text-base not-italic font-normal p-1">
                        Payee
                      </p>
                      <Option4 />
                    </div>
                    <div>
                      <p>Note</p>
                      <textarea
                        placeholder="Write here"
                        className="textarea textarea-bordered border-none textarea-lg w-full min-h-[280px] max-w-xs"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <Types />
      <Category />
    </div>
  );
}
