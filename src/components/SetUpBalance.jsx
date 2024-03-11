import { useRouter } from "next/router";

export default function SetUpBalance() {
  const router = useRouter();
  const handleComfirm = (e) => {
    // e.preventDefault();
    console.log("selected:", selected.value);
    router.push("/signup/stepthree");
  };
  return (
    <div className="flex flex-col gap-[12px]">
      <input
        id="selected"
        className="w-96 h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex"
        typeof="number"
      ></input>
      <div className="mb-[32px] w-96 text-slate-600 text-xs font-normal  leading-none">
        How much cash do you have in your wallet?
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
