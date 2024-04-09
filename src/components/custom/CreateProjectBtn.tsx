"use client"
import { createProject } from "@/actions/actions"
import { Button } from "@/components/ui/button"
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
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import dynamic from "next/dynamic"
import LoadingBtn from "./LoadingBtn"


function CreateProjectBtn(props:any) {
    const { toast } = useToast()
    const [title, setTitle] = useState<string>("")
    const [gitLink, setGitLink] = useState<string>("")
    const [show, setShow] = useState<boolean>(true)
    const [createProjectBtn, setCreateProjectBtn] = useState("Create Project")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='' value={"LOl"} size="lg" >{props.btnName}</Button>
      </DialogTrigger>
      <DialogContent className="md:w-[400px] w-[300px] rounded-md">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <div className="mb-2">Name</div>            
            <Input id="name" onChange={(e)=>setTitle(e.target.value)} placeholder="Project Name" className="col-span-3" />
          </div>
          <div>
            <div className="mb-2">GitHub Link</div>            
            <Input id="name" onChange={(e)=>setGitLink(e.target.value)} placeholder="https://github.com/username/project" className="col-span-3" />
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
                setCreateProjectBtn("Creating...")
                setShow(false) 
                const a = await createProject(title!, gitLink!);
                  
                if (!a) {
                  setCreateProjectBtn("Create Project")
                  return toast({
                  description: "Invalid Input",
                  variant:"destructive"
                })
                }else{
                  setCreateProjectBtn("Create Project")
                  setShow(true)
                  return toast({
                    description: "Project Created !",
                })
                }
            }}
          }
          >
            {createProjectBtn}
          </Button>}
          {!show && <LoadingBtn btnName="Creating Project"/>}
      </DialogContent>
    </Dialog>
  )
}

export default dynamic (() => Promise.resolve(CreateProjectBtn) , {ssr:false})
