import { useState } from "react"
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/solid' 

function Contactinfo({ Logo , info }){
  return(
    <div className="flex items-center gap-2">
      <Logo className="w-3.5 h-3.5 shrink-0" />
      <p className="text-sm">{info}</p>
    </div>
  )
}

function Contact(){
  const contactInfo = {
    phone: '812-031-3446',
    email: 'dainelgbenga11@gmail.com',
    website: 'dainelolugbenga.ltd',
    address: 'E13-3 Paris street, Vascimmi Estate, Apo, Abuja.',
  }

  return(
    <section className="flex flex-col gap-2 mt-4">
      <button className="hidden">Add</button>
      <h1 className="text-xl font-extrabold">CONTACT</h1>
      <section className="flex flex-col gap-0.5">
        <Contactinfo Logo={PhoneIcon} info={contactInfo.phone} />
        <Contactinfo Logo={EnvelopeIcon} info={contactInfo.email} />
        <Contactinfo Logo={GlobeAltIcon} info={contactInfo.website} />
        <Contactinfo Logo={MapPinIcon} info={contactInfo.address} />
      </section>
    </section>
  )
}

export default Contact