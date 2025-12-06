import { Children } from "react";
import Button from "./Button";
import { CheckIcon } from "@heroicons/react/24/solid";

function Section({ 
  children, 
  heading, 
  hasAdd, 
  className, 
  handleEdit, 
  editState, 
  setEditState,
  handleAdd
}){
  return(
    <section className={`group flex flex-col gap-2 px-1 hover:border-2 hover:border-dashed relative ${className}`}>
      <div className="hidden group-hover:flex gap-2.5 absolute top-1 right-1.5">
        {!editState &&<Button onClick={handleEdit}>Edit</Button>}
        {editState && <button onClick={() => setEditState(false)} className="w-4 h-4 cursor-pointer"><CheckIcon/></button>}
        {hasAdd && <Button onClick={handleAdd}>Add</Button>}
      </div>
      <h1 className="text-xl font-extrabold">{heading}</h1>
      {children}
    </section>
  )
}

export default Section