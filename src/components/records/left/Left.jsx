import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import AddButton from "@/components/logos/AddButton";
import Category from "./Category";
import Types from "./Types";
import XButton from "@/components/logos/XButton";

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
