import Step1 from "@/components/signUp/Step1";
import LogoCurrency from "@/components/logos/LogoCurrency";

export default function Stepper1() {
  return (
    <div className="flex flex-col">
      <Step1 />
      <LogoCurrency />
    </div>
  );
}
