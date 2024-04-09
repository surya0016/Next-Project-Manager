import  CreateProjectBtn  from "@/components/custom/CreateProjectBtn";
import  ModeToggle  from "@/components/custom/DarkModeBtn";
import TableC from "@/components/custom/TableC";
import dynamic from "next/dynamic";

function Home() {
  
  return (
    <div className="flex justify-start items-center flex-col mt-3 md:mt-10 h-screen">
      <div className="md:border p-3 md:p-10 rounded-lg md:shadow-lg md:dark:shadow-slate-900">
        <div className="flex justify-between items-center pb-4 px-4 w-full ">
          <span className="hidden md:block font-bold text-3xl mr-10">Your Projects</span>
          <span className="md:hidden font-bold text-3xl mr-10">Projects</span>
          <span className=" flex justify-center items-center ">
            <span className=" mr-4 "><ModeToggle/></span>
            <span className=" hidden md:block "><CreateProjectBtn btnName="Create Project"/></span>
            <span className=" md:hidden block "><CreateProjectBtn btnName="Create"/></span>
          </span>
        </div>
        <span className="">
          <TableC/>
        </span>
          
      </div>
    </div>
  );
}

export default dynamic (() => Promise.resolve(Home) , {ssr:false})