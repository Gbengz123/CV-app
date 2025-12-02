import { useState } from "react"

function Skills(){
  const skills = [
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
  ]

  return(
    <section className="flex flex-col gap-2 w-full">
      <button className="hidden">Add</button>
      <h1 className="text-xl font-extrabold">Skills</h1>
      <div className="flex flex-col gap-2">
        {skills.map(skill => {
          return(
            <section key={skill.id} className="text-sm flex flex-col gap-1">
              <p>{skill.skill}</p>
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default Skills