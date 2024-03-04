import Right from "@/components/records/right/Right";
import Layout from "../components/layout";
import Left from "@/components/records/left/Left";

export default function Records() {
  return (
    <div className=" w-full flex justify-center px-[120px] py-6 gap-6 bg-gray-100">
      <Left />
      <Right />
    </div>
  );
}

Records.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
