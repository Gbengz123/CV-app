import { useState } from "react"
import Button from "./Button"

function Name(){
  const [name, setName] = useState({firstName: 'First Name', lastName: 'Last Name'})

  return(
    <section className="group hover:border-2 hover:border-dashed relative">
      <span className="hidden group-hover:block absolute top-1 right-1.5"><Button>Edit</Button></span>
      <h1 className="text-5xl font-semibold">{name.firstName},</h1>
      <h1 className="text-5xl font-extrabold">{name.lastName}</h1>
    </section>
  )
}

export default Name