import GeldSmall from "@/components/logos/GeldSmall";
import LogoCurrency from "@/components/logos/LogoCurrency";
import StepperOne from "@/components/logos/SteppperOne";
import SelectCurrency from "@/components/SelectCurrency";

export default function stepone() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] h-[1024px] pt-[40px]  bg-white flex-col  items-center gap-[141px] inline-flex">
        <div className="flex flex-col items-center  gap-[48px]">
          <GeldSmall />
          <StepperOne />
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <LogoCurrency />
          <p className="text-slate-900 text-2xl font-semibold">
            Select base currency
          </p>
          <div>
            <SelectCurrency />
          </div>
        </div>
      </div>
    </div>
  );
}
