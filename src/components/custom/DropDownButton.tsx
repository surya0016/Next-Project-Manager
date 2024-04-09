"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import dynamic from "next/dynamic"
import { getProgress, updateProgress } from "@/actions/actions"
import Spinner from "./Spinner"

function DropDownButton(props:any) {
  const [progress, setProgress] = React.useState("")
  const [loading , setLoading] = React.useState(true)

  React.useEffect(()=>{
    setProgress(getProgress(props.id))
    setLoading(false)
  },[])

    return (
      <>
        {!loading && <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="md:w-28 w-24">{progress}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuRadioGroup>
              <DropdownMenuRadioItem onClick={()=>{updateProgress(props.id, "Completed"); setProgress("Completed")}} value="Completed">Completed</DropdownMenuRadioItem>
              <DropdownMenuRadioItem onClick={()=>{updateProgress(props.id, "In Progress"); setProgress("In Progress")}} value="In Progress">In Progress</DropdownMenuRadioItem>
              <DropdownMenuRadioItem onClick={()=>{updateProgress(props.id, "Pending"); setProgress("Pending")}} value="Pending">Pending</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>}
        {
          loading && <div className=""><Spinner/></div>
        }
      </>
    )
}

export default dynamic (() => Promise.resolve(DropDownButton) , {ssr:false})