import { Children } from "react";
import Button from "./Button";

function Section({ children, heading, hasAdd, className, openModal}){

  return(
    <section className={`group flex flex-col gap-2 px-1 hover:border-2 hover:border-dashed relative ${className}`}>
      <div className="hidden group-hover:flex gap-2.5 absolute top-1 right-1.5">
        <Button onClick={openModal}>Edit</Button>
        {hasAdd && <Button>Add</Button>}
      </div>
      <h1 className="text-xl font-extrabold">{heading}</h1>
      {children}
    </section>
  )
}

export default Section