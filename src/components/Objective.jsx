import { useState } from "react"
import Section from "./Section"

function Objective({obj}){
  const [objective, setObjective] = useState(obj)

  return(
    <Section heading={'OBJECTIVE'} hasAdd={false} className={''}>
      <p className="text-sm">{objective}</p>
    </Section>
  )
}

export default Objective