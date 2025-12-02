import { useState } from "react"

function Objective({obj}){
  const [objective, setObjective] = useState(obj)

  return(
    <section className="flex flex-col gap-2">
      <button className="hidden">Add</button>
      <h1 className="text-xl font-extrabold">OBJECTIVE: </h1>
      <p className="text-sm">{objective}</p>
    </section>
  )
}

export default Objective