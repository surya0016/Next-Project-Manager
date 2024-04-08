import  CreateProjectBtn  from "@/components/custom/CreateProjectBtn";
import  ModeToggle  from "@/components/custom/DarkModeBtn";
import TableC from "@/components/custom/TableC";
import dynamic from "next/dynamic";

function Home() {
  
  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <div className="border p-10 rounded-lg shadow-lg dark:shadow-slate-900">
        <div className="flex justify-between items-center pb-4 px-4 w-full ">
          <span className="font-bold text-3xl mr-10">Your Projects</span>
          <span className=" flex justify-center items-center ">
            <span className=" mr-4 "><ModeToggle/></span>
            <CreateProjectBtn/>
          </span>
        </div>
        <TableC/>
      </div>
      
    </div>
  );
}

export default dynamic (() => Promise.resolve(Home) , {ssr:false})