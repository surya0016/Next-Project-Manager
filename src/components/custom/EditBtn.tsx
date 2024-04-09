"use client";
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react";
import { editProject, getProject } from "@/actions/actions";
import { toast } from "../ui/use-toast";
import LoadingBtn from "./LoadingBtn";

export function EditBtn(props:any){
  const [title , setTitle] = useState<string>()
  const [gitLink, setGitLink] = useState<string | null>()
  const [show, setShow] = useState(true)
  const [createProjectBtn, setCreateProjectBtn] = useState("Save Changes")

  useEffect(()=>{
    getProject(props.id)
    .then(resp => {
      setTitle(resp?.title);
      setGitLink(resp?.gitLink)
    });
  },[])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='hover:text-green-500 cursor-pointer' >Edit</Button>
      </DialogTrigger>
      <DialogContent className="md:w-[400px] w-[300px] rounded-md">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <div className="mb-2">Name</div>            
            <Input id="name" value={title} onChange={(e)=>setTitle(e.target.value)} className="col-span-3" />
          </div>
          <div className="">
            <div className="mb-2">GitHub Link</div>            
            <Input id="name" value={gitLink!} onChange={(e)=>setGitLink(e.target.value)} className="col-span-3" />
          </div>
        </div>
        {show && <Button
            type="submit"
            variant="default"
            onClick={async (e) => {
              e.preventDefault()
              if(title==="" && gitLink==="") {
                console.log("clicked");
                return toast({
                  description: "Invalid Input",
                  variant:"destructive"
                })
              }else{
                setCreateProjectBtn("Saving...")
                setShow(false) 
                const a = await editProject(props.id!,title!, gitLink!);
                  
                if (!a) {
                  setCreateProjectBtn("Save Changes")
                  return toast({
                  description: "Invalid Input",
                  variant:"destructive"
                })
                }else{
                  setCreateProjectBtn("Save Changes")
                  setShow(true)
                  return toast({
                    description: "Changes Saved!",
                })
                }
            }}
          }
          >
            {createProjectBtn}
          </Button>}
          {!show && <LoadingBtn btnName="Saving Changes"/>}
      </DialogContent>
    </Dialog>
  )
}
