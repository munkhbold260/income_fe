import React, { useState } from "react";
import { Password } from "primereact/password";
import { Calendar } from "primereact/calendar";

export default function Right() {
  const [value, setValue] = useState("");
  const [dates, setDates] = useState(null);

  return (
    <div className="w-[894px] h-12 px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
      <div className="card flex flex-col gap-8 justify-center"></div>
    </div>
  );
}
