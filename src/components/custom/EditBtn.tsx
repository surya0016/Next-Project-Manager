
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
import { Label } from "@/components/ui/label"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export function EditBtn(){
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='hover:text-green-500 cursor-pointer' ><FontAwesomeIcon icon={faPen}/>Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <div className="mb-2">Name</div>            
            <Input id="name"  className="col-span-3" />
          </div>
          <div className="">
            <div className="mb-2">GitHub Link</div>            
            <Input id="name"  className="col-span-3" />
          </div>
        </div>
          <Button type="submit">Save changes</Button>
      </DialogContent>
    </Dialog>
  )
}
