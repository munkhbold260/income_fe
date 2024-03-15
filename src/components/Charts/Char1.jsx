import React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";

export default function Char1() {
  return (
    <div className="w-[588px] h-[284px] rounded-[18px] bg-white">
      <div class=" px-6 py-4 border-b border-slate-200 flex justify-between items-center ">
        <div class="text-slate-900 text-base font-semibold    leading-normal">
          Income - Expense
        </div>
        <div class="text-gray-500 text-base font-normal leading-normal">
          Jun 1 - Nov 30
        </div>
      </div>
      <div class="w-[588px] h-[228px] flex gap-y-48 rounded-b-[18px] px-8 py-6">
        {/* <BarChart
          series={[
            { data: [55, 55, 55, 55, 55, 55, 55] },
            { data: [66, 66, 66, 66, 66, 66, 66] },
          ]}
          height={162}
          xAxis={[
            {
              data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              scaleType: "band",
            },
          ]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        /> */}
        barchart
      </div>
    </div>
  );
}
