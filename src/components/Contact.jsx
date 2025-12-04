import { useState } from "react"
import Section from "./Section"
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
  const contactInfo = {
    phone: '812-031-3446',
    email: 'dainelgbenga11@gmail.com',
    website: 'dainelolugbenga.ltd',
    address: 'E13-3 Paris street, Vascimmi Estate, Apo, Abuja.',
  }

  return(
    <Section heading={'CONTACT'} hasAdd={false} className={'mt-4'}>
      <section className="flex flex-col gap-0.5">
        <Contactinfo Logo={PhoneIcon} info={contactInfo.phone} />
        <Contactinfo Logo={EnvelopeIcon} info={contactInfo.email} />
        <Contactinfo Logo={GlobeAltIcon} info={contactInfo.website} />
        <Contactinfo Logo={MapPinIcon} info={contactInfo.address} />
      </section>
    </Section>
  )
}

export default Contact