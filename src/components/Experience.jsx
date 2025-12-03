import { useState } from "react"

function Experience(){
  const experience = [
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
  ]

  return(
    <section id="info-section" className="flex flex-col gap-2">
      <button className="hidden">Add</button>
      <h1 className="text-xl font-extrabold">WORK EXPERIENCE</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-5">
        {experience.map(exp => {
          return(
            <section key={exp.id} className="text-sm flex flex-col gap-1 p-1">
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
    </section>
  )
}

export default Experience