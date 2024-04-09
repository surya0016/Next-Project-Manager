import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import dynamic from "next/dynamic"
import { EditBtn } from "./EditBtn"
import DeleteBtn from "./DeleteBtn"
import { Dialog } from "@radix-ui/react-dialog"

function DropDownAction(props:any) {
  return (
    <>
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-lg w-1">&#8942;</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup >
          <DropdownMenuRadioItem value ="">Github Link</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value ="" ><EditBtn id={props.id}/></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value ="">Delete</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

export default dynamic (() => Promise.resolve(DropDownAction) , {ssr:false})