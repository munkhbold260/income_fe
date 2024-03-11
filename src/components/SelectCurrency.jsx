import { useRouter } from "next/router";

export default function SelectCurrency() {
  const router = useRouter();
  const handleComfirm = (e) => {
    // e.preventDefault();
    console.log("selected:", selected.value);
    router.push("/signup/steptwo");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[32px]">
      <div className="flex flex-col gap-[12px] items-center justify-center">
        <div className="w-[384px] h-[64px] p-4 bg-gray-100 border border-gray-300 rounded-[8px] flex justify-center items-center">
          <select
            id="selected"
            className="w-full h-full bg-gray-100 text-gray-800 text-base font-semibold"
          >
            <option className="bg-gray-100">MNT - Mongolian Tugrik</option>
            <option className="bg-gray-100">USD - United State Dollar</option>
          </select>
        </div>
        <div className="w-96 text-slate-600 text-xs font-normal">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </div>
      </div>
      <button
        onClick={handleComfirm}
        className="w-96 h-12  bg-blue-600 rounded-[20px] justify-center items-center text-white text-xl font-normal leading-7"
      >
        Confirm
      </button>
    </div>
  );
}
