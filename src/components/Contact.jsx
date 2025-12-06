import { useState } from "react"
import Section from "./Section"
import FormModal from "./FormModal"
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/solid' 

function Contactinfo({ Logo , info}){
  return(
    <div className={"flex items-center gap-2"}>
      <Logo className="w-3.5 h-3.5 shrink-0" />
      <p className="text-sm">{info}</p>
    </div>
  )
}

function Contact(){
  const [open, setOpen] = useState(false)
  const [contactInfo, setContactInfo] = useState({
    phone: '812-031-3446',
    email: 'dainelgbenga11@gmail.com',
    website: 'dainelolugbenga.ltd',
    address: 'E13-3 Paris street, Vascimmi Estate, Apo, Abuja.',
  })

  return(
    <>
      <Section 
        heading={'CONTACT'} 
        hasAdd={false} 
        className={'mt-4'} 
        handleEdit={() => setOpen(true)}
        editState={false}
      >
        <section className="flex flex-col gap-0.5">
          <Contactinfo Logo={PhoneIcon} info={contactInfo.phone} />
          <Contactinfo Logo={EnvelopeIcon} info={contactInfo.email} />
          <Contactinfo Logo={GlobeAltIcon} info={contactInfo.website} />
          <Contactinfo Logo={MapPinIcon} info={contactInfo.address} />
        </section>
      </Section>
      <FormModal open={open} onClose={() => setOpen(false)} displayEdit={() => setContactInfo(contactInfo)} infoHeading={'CONTACT'}>
        <div>
          <label className="font-semibold text-sm">Number</label>
          <input onChange={e => setContactInfo({...contactInfo, phone: e.target.value})} value={contactInfo.phone} type="tel" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
        <div>
          <label className="font-semibold text-sm">Email</label>
          <input onChange={e => setContactInfo({...contactInfo, email: e.target.value})} value={contactInfo.email} type="mail" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
        <div>
          <label className="font-semibold text-sm">Website</label>
          <input onChange={e => setContactInfo({...contactInfo, website: e.target.value})} value={contactInfo.website} type="text" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
        <div>
          <label className="font-semibold text-sm">Address</label>
          <textarea onChange={e => setContactInfo({...contactInfo, address: e.target.value})} value={contactInfo.address} className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
      </FormModal>
    </>
  )
}

export default Contact