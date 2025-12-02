import { useState } from "react"

function Name(){
  const [name, setName] = useState({firstName: 'First Name', lastName: 'Last Name'})

  return(
    <section id="name-section">
      <button className="w-19 h-8 rounded-xl text-amber-50 bg-neutral-500 hidden">Add</button>
      <h1 className="text-5xl font-semibold">{name.firstName},</h1>
      <h1 className="text-5xl font-extrabold">{name.lastName}</h1>
    </section>
  )
}

export default Name