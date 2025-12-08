import { useState } from "react"
import Section from "./Section"
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import FormModal from "./FormModal"

function Skills(){
  const [editState, setEditState] = useState(false)
  const [openObj, setOpen] = useState({open: false, id: 0})
  const [skills, setSkills] = useState([
    {id: 0},
    {
      id: 1,
      skill: 'Team leadership'
    },
    {
      id: 2,
      skill: 'Data Analysis'
    },
    {
      id: 3,
      skill: 'full-stack deveopment'
    },
    {
      id: 4,
      skill: 'Communication skills'
    },
    {
      id: 5,
      skill: 'Project Management'
    },
  ])

  const currnetSkill = skills.find(skill => skill.id === openObj.id)

  function handleSkillChange(currentSkillId, value) {
    setSkills(skills.map( 
      skill => skill.id === currentSkillId ? {...skill, skill: value} : skill
    ))
  }

  function handleDelete(currentSkillId) {
    setOpen({...openObj, id: 0})
    setSkills(skills.filter(skill => skill.id !== currentSkillId))
  }

  function handleAdd() {
    const Ids = skills.map(skill => skill.id)
    const nextId = Math.max(...Ids) + 1

    setSkills([
      ...skills, 
      {
        id: nextId,
        skill: 'New skill'
      }
    ])
  }

  return(
    <>
      <Section heading={'SKILLS'} hasAdd={true} className={''} editState={editState} setEditState={setEditState}  handleEdit={() => setEditState(true)} handleAdd={handleAdd}>
      <div className="flex flex-col gap-2">
        {skills.map(skill => {
          if (skill.id === 0 ) return null
          return(
            <section 
            key={skill.id} 
            className= "text-sm flex flex-col gap-1"
            >
              <div className="flex">
                <p>{skill.skill}</p>
                {editState && <div className="flex ml-auto gap-2.5">
                    <button className="w-3 h-3 hover:cursor-pointer" onClick={() => setOpen({...openObj, open:true, id:skill.id })}><PencilSquareIcon/></button>
                    <button className="w-3 h-3 hover:cursor-pointer" onClick={() => handleDelete(skill.id)}><TrashIcon/></button>
                  </div>}
              </div>
            </section>
          )
        })}
      </div>
    </Section>
    <FormModal open={openObj.open} onClose={() => setOpen({...openObj, open: false})} displayEdit={() => setSkills(skills)} infoHeading={'SKILL'}>
      <div>
        <label className="font-semibold text-sm">Skill</label>
        <input onChange={(e) => {handleSkillChange(openObj.id, e.target.value)}} value={currnetSkill.skill} type="text" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
      </div>
    </FormModal>
    </>
  )
}

export default Skills