import { useState } from "react"
import Section from "./Section"
import FormModal from "./FormModal"
import Button from "./Button"
import { TrashIcon } from "@heroicons/react/24/solid"

function References(){
  const [editState, setEditState] = useState(false)
  const [openObj, setOpen] = useState({open: false, id: 0})
  const [references, setReferences] = useState([
      {
        id: 0,
      },
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
  )

  const currnetRef = references.find(ref => ref.id === openObj.id)

  function handleRefInfoChange(currentRefId, value, field) {
    setReferences(references.map( 
      ref => ref.id === currentRefId ? {...ref, [field]: value} : ref
    ))
  }

  function handleDelete(currentRefId) {
    setOpen({...openObj, id: 0})
    setReferences(references.filter(ref => ref.id !== currentRefId))
  }

  function handleAdd() {
    const Ids = references.map(ref => ref.id)
    const nextId = Math.max(...Ids) + 1

    setReferences([
      ...references, 
      {
        id: nextId,
        name: 'Refernces Name',
        jobTitle: 'Job Title',
        phone: '123-456-7890',
        email: 'danielgbenga11@mail.com',
      }
    ])
  }

  return(
    <>
      <Section heading={'REFERENCES'} hasAdd={true} className={''} editState={editState} setEditState={setEditState} handleEdit={() => setEditState(true)} handleAdd={handleAdd}>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(215px,1fr))] gap-4">
        {references.map(reference => {
          if (reference.id === 0) return null
          return(
            <section 
            key={reference.id} 
            className={editState ? `text-sm flex flex-col gap-1 p-1 relative border border-dashed` : "text-sm flex flex-col gap-1 p-1"}
            >
              {editState && <div className="flex gap-2.5 absolute top-1 right-2">
                  <Button onClick={() => setOpen({...openObj, open:true, id:reference.id })}>Edit</Button>
                  <button className="w-3 h-3 hover:cursor-pointer" onClick={() => handleDelete(reference.id)}><TrashIcon/></button>
                </div>}
              <h3 className="font-extrabold">{reference.name},</h3>
              <p>{reference.jobTitle}</p>
              <p>Phone: {reference.phone}</p>
              <p className="whitespace-nowrap">Email: {reference.email}</p>
            </section>
          )
        })}
      </div>
    </Section>
    <FormModal open={openObj.open} onClose={() => setOpen({...openObj, open: false})} displayEdit={() => setReferences(references)} infoHeading={'REFERENCE'}>
      <div>
        <label className="font-semibold text-sm">Name</label>
        <input onChange={(e) => {handleRefInfoChange(openObj.id, e.target.value, 'name')}} value={currnetRef.name} type="text" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
      </div>
      <div>
        <label className="font-semibold text-sm">Job Title</label>
        <input onChange={(e) => {handleRefInfoChange(openObj.id, e.target.value, 'jobTitle')}} value={currnetRef.jobTitle} type="text" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>        
      </div>
      <div>
        <label className="font-semibold text-sm">Phone</label>
        <input onChange={(e) => {handleRefInfoChange(openObj.id, e.target.value, 'phone')}} value={currnetRef.phone} type="tel" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>       
      </div>
      <div>
        <label className="font-semibold text-sm">Email</label>
        <input onChange={(e) => {handleRefInfoChange(openObj.id, e.target.value, 'email')}} value={currnetRef.email} type="mail" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
      </div>
    </FormModal>
    </>
  )
}

export default References