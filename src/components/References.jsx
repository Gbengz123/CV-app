import { useState } from "react"
import Section from "./Section"

function References(){
  const references = [
    {
      id: 1,
      name: 'Refernces Name',
      jobTitle: 'Job Title',
      phone: '123-456-7890',
      email: 'References@mail.com'
    },
    {
      id: 2,
      name: 'Refernces Name',
      jobTitle: 'Job Title',
      phone: '123-456-7890',
      email: 'danielgbenga11@mail.com'
    },
    {
      id: 3,
      name: 'Refernces Name',
      jobTitle: 'Job Title',
      phone: '123-456-7890',
      email: 'danielgbenga11@mail.com'
    },
    {
      id: 4,
      name: 'Refernces Name',
      jobTitle: 'Job Title',
      phone: '123-456-7890',
      email: 'danielgbenga11@mail.com'
    },
  ]

  return(
    <Section heading={'REFERENCES'} hasAdd={true} className={''}>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(215px,1fr))] gap-4">
        {references.map(reference => {
          return(
            <section key={reference.id} className="text-sm flex flex-col gap-1 p-1">
              <h3 className="font-extrabold">{reference.name},</h3>
              <p>{reference.jobTitle}</p>
              <p>Phone: {reference.phone}</p>
              <p className="whitespace-nowrap">Email: {reference.email}</p>
            </section>
          )
        })}
      </div>
    </Section>
  )
}

export default References