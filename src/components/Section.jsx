import { Children } from "react";

function Section({ children, heading, hasAdd, className}){

  return(
    <section className={`flex flex-col gap-2 px-1 hover:border  ${className}`}>
      <button className="hidden">Edit</button>
      {hasAdd && <button className="">Add</button>}
      <h1 className="text-xl font-extrabold">{heading}</h1>
      {children}
    </section>
  )
}

export default Section