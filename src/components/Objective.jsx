import { useState } from "react"
import Section from "./Section"
import FormModal from "./FormModal"

function Objective(){
  const [open, setOpen] = useState(false)
  const [objective, setObjective] = useState('Aspiring technology professional with hands-on experience in software development, RF systems, and digital solutions. I aim to leverage my problem-solving skills, engineering mindset, and growing expertise in modern technologies to build reliable, user-focused products and contribute effectively to a forward-thinking organization.')

  return(
    <>
      <Section heading={'OBJECTIVE'} hasAdd={false} className={''} openModal={() => setOpen(true)}>
        <p className="text-sm">{objective}</p>
      </Section>
      <FormModal open={open} onClose={() => setOpen(false)} displayEdit={() => setObjective(objective)} infoHeading={'OBJECTIVE'}>
        <div>
          <label className="font-semibold text-sm">Objective</label>
          <textarea onChange={e => setObjective(e.target.value)} value={objective} rows={10} className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
      </FormModal>
    </>
  )
}

export default Objective