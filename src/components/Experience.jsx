import { useState } from "react"
import Section from "./Section"
import FormModal from "./FormModal"
import Button from "./Button"
import { TrashIcon } from "@heroicons/react/24/solid"

function Experience(){
  const [editState, setEditState] = useState(false)
  const [openObj, setOpen] = useState({open: false, id: 0})
  const [experience, setExperience] = useState([
    {
      id:0,
    },
    {
      id: 1,
      jobTitle: 'Job Title',
      companyName: 'Company Name',
      Location: 'Location',
      ResAcc: 'Responsibility/Accomplishment: Briefly describe a key responsibility or accomplishment from this role, highlighting specific tasks or projects you worked on and any results achieved.',
      startDate: 'start date',
      endDate: 'end date',
    },
    {
      id: 2,
      jobTitle: 'Job Title',
      companyName: 'Company Name',
      Location: 'Location',
      ResAcc: 'Responsibility/Accomplishment: Briefly describe a key responsibility or accomplishment from this role, highlighting specific tasks or projects you worked on and any results achieved.',
      startDate: 'start date',
      endDate: 'end date',
    },
    {
      id: 3,
      jobTitle: 'Job Title',
      companyName: 'Company Name',
      Location: 'Location',
      ResAcc: 'Responsibility/Accomplishment: Briefly describe a key responsibility or accomplishment from this role, highlighting specific tasks or projects you worked on and any results achieved.',
      startDate: 'start date',
      endDate: 'end date',
    },
  ])

  const currnetExp = experience.find(exp => exp.id === openObj.id)

  function handleExpInfoChange(currentExpId, value, field) {
    setExperience(experience.map( 
      exp => exp.id === currentExpId ? {...exp, [field]: value} : exp
    ))
  }

  function handleDelete(currentExpId) {
    setOpen({...openObj, id: 0})
    setExperience(experience.filter(exp => exp.id !== currentExpId))
  }

  function handleAdd() {
    const Ids = experience.map(exp => exp.id)
    const nextId = Math.max(...Ids) + 1

    setExperience([
      ...experience, 
      {
        id: nextId,
        jobTitle: 'Job Title',
        companyName: 'Company Name',
        Location: 'Location',
        ResAcc: 'Responsibility/Accomplishment: Briefly describe a key responsibility or accomplishment from this role, highlighting specific tasks or projects you worked on and any results achieved.',
        startDate: 'start date',
        endDate: 'end date',
      }
    ])
  }

  return(
    <>
      <Section heading={'WORK EXPERIENCE'} hasAdd={true} className={''} handleEdit={() => setEditState(true)} handleAdd={handleAdd} editState={editState} setEditState={setEditState}>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-5">
          {experience.map(exp => {
            if (exp.id === 0) return null
            return(
              <section 
              key={exp.id}
              className= {editState ? `text-sm flex flex-col gap-1 p-1 relative border border-dashed`: `text-sm flex flex-col gap-1 p-1`}
              >
                {editState && <div className="flex gap-2.5 absolute top-6.5 right-2">
                  <Button onClick={() => setOpen({...openObj, open:true, id:exp.id })}>Edit</Button>
                  <button className="w-3 h-3 hover:cursor-pointer" onClick={() => handleDelete(exp.id)}><TrashIcon/></button>
                </div>}
                <div className="flex w-full">
                  <h3>{exp.jobTitle},</h3>
                  <div className="ml-auto">{exp.startDate} - {exp.endDate}</div>
                </div>
                <div className="font-extrabold">{exp.companyName}, {exp.Location}</div>
                <p>{exp.ResAcc}</p>
              </section>
            )
          })}
        </div>
      </Section>
      <FormModal open={openObj.open} onClose={() => setOpen({...openObj, open: false})} displayEdit={() => setExperience(experience)} infoHeading={'EXPERIENCE'}>
        <div>
          <label className="font-semibold text-sm">Job Title</label>
          <input onChange={(e) => {handleExpInfoChange(openObj.id, e.target.value, 'jobTitle')}} value={currnetExp.jobTitle} type="text" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
        <div>
          <label className="font-semibold text-sm">Company Name</label>
          <input onChange={(e) => {handleExpInfoChange(openObj.id, e.target.value, 'companyName')}} value={currnetExp.companyName} type="text" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>        
        </div>
        <div>
          <label className="font-semibold text-sm">Location</label>
          <input onChange={(e) => {handleExpInfoChange(openObj.id, e.target.value, 'Location')}} value={currnetExp.Location} type="text" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>       
        </div>
        <div>
          <label className="font-semibold text-sm">Responsibility/Accomplishment</label>
          <textarea onChange={(e) => {handleExpInfoChange(openObj.id, e.target.value, 'Responsibility/Accomplishment')}} value={currnetExp.ResAcc} rows={3} className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>        
        </div>
        <div>
          <label className="font-semibold text-sm">Start Date</label>
          <input onChange={(e) => {handleExpInfoChange(openObj.id, e.target.value, 'startDate')}} value={currnetExp.startDate} type="date" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
        <div>
          <label className="font-semibold text-sm">End Date</label>
          <input onChange={(e) => {handleExpInfoChange(openObj.id, e.target.value, 'endDate')}} value={currnetExp.endDate} type="date" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
      </FormModal>
    </>
    
  )
}

export default Experience