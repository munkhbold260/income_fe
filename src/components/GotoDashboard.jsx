import { useRouter } from "next/router";

export default function GotoDashboard() {
  const router = useRouter();
  const handleComfirm = (e) => {
    router.push("/dashboard");
  };
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="mb-[32px] w-96 text-center text-slate-600 text-base font-normal">
        Your very first account has been created. Now continue to dashboard and
        start tracking
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
