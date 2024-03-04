import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Char2() {
  const fetched_data = [
    { cat: "Bills", art: 10, color: "bg-blue-600" },
    { cat: "Food", art: 20, color: "bg-pink-500" },
    { cat: "Shopping", art: 30, color: "bg-orange-300" },
    { cat: "Insurance", art: 35, color: "bg-cyan-500" },
    { cat: "Clothing", art: 5, color: "bg-amber-500" },
  ];
  const bart =
    fetched_data[0].art +
    fetched_data[1].art +
    fetched_data[2].art +
    fetched_data[3].art +
    fetched_data[4].art;

  const colors = [
    { color: "bg-blue-600" },
    { color: "bg-pink-500" },
    { color: "bg-orange-300" },
    { color: "bg-cyan-500" },
    { color: "bg-amber-500" },
  ];
  // console.log((fetched_data[0].art * 100) / bart);

  const bars0 = (fetched_data[0].art * 100) / bart;
  const bars1 = (fetched_data[1].art * 100) / bart;
  const bars2 = (fetched_data[2].art * 100) / bart;
  const bars3 = (fetched_data[3].art * 100) / bart;
  const bars4 = (fetched_data[4].art * 100) / bart;

  const bars = [
    { leap: bars0 },
    { leap: bars1 },
    { leap: bars2 },
    { leap: bars3 },
    { leap: bars4 },
  ];
  const data = {
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: fetched_data.map((a) => {
          return a.art;
        }),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="w-[588px] h-[284px] rounded-[18px] bg-white">
      <div className=" px-6 py-4 border-b border-slate-200 flex justify-between items-center ">
        <div className="text-slate-900 text-base font-semibold   leading-normal">
          Income - Expense
        </div>
        <div className="text-gray-500 text-base font-normal   leading-normal">
          Jun 1 - Nov 30
        </div>
      </div>
      <div className="w-[588px] h-[228px] rounded-b-[18px] px-6 py-8 justify-start items-start gap-[47px] inline-flex">
        <Doughnut data={data} />

        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
          {fetched_data.map((a, index) => {
            return (
              <div
                key={index}
                className="self-stretch justify-start items-center inline-flex"
              >
                <div className="justify-start items-center gap-2 flex">
                  <div
                    className={`w-3 h-3 ${colors[index].color} rounded-full`}
                  ></div>
                  <div className="w-[133px] text-gray-900 text-sm font-normal   leading-tight">
                    {a.cat}
                  </div>
                </div>
                <div className="w-[120px] text-gray-900 text-sm font-normal   leading-tight">
                  {a.art}
                </div>
                <div className="w-16 text-right text-gray-900 text-sm font-normal   leading-tight">
                  {bars[index].leap}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
