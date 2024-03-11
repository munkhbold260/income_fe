import { useRouter } from "next/router";
import SetUpBalance from "@/components/SetUpBalance";
import GeldSmall from "@/components/logos/GeldSmall";
import LogoCash from "@/components/logos/LogoCash";
import StepperTwo from "@/components/logos/StepperTwo";

export default function steptwo() {
  const router = useRouter();
  const handleComfirm = (e) => {
    // e.preventDefault();
    console.log("selected:", selected.value);
    router.push("/signup/stepone");
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] h-[1024px] pt-[40px]  bg-white flex-col  items-center gap-[141px] inline-flex">
        <div className="flex flex-col items-center  gap-[48px]">
          <GeldSmall />
          <StepperTwo />
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <LogoCash />
          <p className="text-slate-900 text-2xl font-semibold">
            Select base currency
          </p>
          <div>
            <SetUpBalance />
          </div>
        </div>
      </div>
    </div>
  );
}
