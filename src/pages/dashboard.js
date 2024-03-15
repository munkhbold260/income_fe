import Charts from "@/components/Charts/Charts";
import Layout from "../components/layout";
import Card from "@/components/Card";
import Goal from "@/components/Goal";

export default function Dashboard() {
  // var x = localStorage.getItem("userId");
  // localStorage.clear();
  // console.log(x);
  return (
    <div className="flex flex-col gap-8 bg-gray-300 pt-8 items-center">
      <Card />
      <Charts />
      <Goal />
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
