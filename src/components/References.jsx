import { useState } from "react"

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
      email: 'References@mail.com'
    },
    {
      id: 3,
      name: 'Refernces Name',
      jobTitle: 'Job Title',
      phone: '123-456-7890',
      email: 'References@mail.com'
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
    <section className="flex flex-col gap-2">
      <button className="hidden">Add</button>
      <h1 className="text-xl font-extrabold">REFRENCES</h1>
      <div className="grid grid-cols-[repeat(auto-fill,240px)] gap-4">
        {references.map(reference => {
          return(
            <section key={reference.id} className="text-sm flex flex-col gap-1 p-1">
              <h3 className="font-extrabold">{reference.name},</h3>
              <p>{reference.jobTitle}</p>
              <p>Phone: {reference.phone}</p>
              <p>Email: {reference.email}</p>
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default References