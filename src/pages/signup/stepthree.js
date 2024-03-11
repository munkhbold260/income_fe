import GotoDashboard from "@/components/GotoDashboard";
import GeldSmall from "@/components/logos/GeldSmall";
import GoodJob from "@/components/logos/GoodJob";
import StepperThree from "@/components/logos/StepperThree";

export default function steptwo() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] h-[1024px] pt-[40px]  bg-white flex-col  items-center gap-[141px] inline-flex">
        <div className="flex flex-col items-center  gap-[48px]">
          <GeldSmall />
          <StepperThree />
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <GoodJob />
          <p className="text-slate-900 text-2xl font-semibold">Good Job!</p>
          <div>
            <GotoDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
