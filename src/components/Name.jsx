import { useState } from "react"
import Button from "./Button"
import FormModal from "./FormModal"

function Name(){
  const [name, setName] = useState({firstName: 'First Name', lastName: 'Last Name'})
  const [open, setOpen] = useState(false)

  return(
    <>
      <section className="group hover:border-2 hover:border-dashed relative">
        <span onClick={() => setOpen(true)} className="hidden group-hover:block absolute top-1 right-1.5"><Button>Edit</Button></span>
        <h1 className="text-5xl font-semibold">{name.firstName},</h1>
        <h1 className="text-5xl font-extrabold">{name.lastName}</h1>
      </section>
      <FormModal open={open} onClose={() => setOpen(false)} displayEdit={() => setName(name)} infoHeading={''}>
        <div>
          <label className="font-semibold text-sm">First Name</label>
          <input onChange={(e) => setName({...name, firstName: e.target.value})} value={name.firstName} type="text" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
        <div>
          <label className="font-semibold text-sm">Last Name</label>
          <input onChange={(e) => setName({...name, lastName: e.target.value})} value={name.lastName} type="text" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
      </FormModal>
    </>
    
  )
}

export default Name