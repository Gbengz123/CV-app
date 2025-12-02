import { useState } from 'react'
import Aside from './components/Aside'
import Main from './components/Main'

function App() {
  const user = {
    firstName: 'Daniel',
    lastName: 'Olugbenga',
    skills: [
      'project Management', 
      'Data Analysis', 
      'strategic Planning', 
      'Fullstack development',
      'Communication Skills'
    ],
    objective: 'Aspiring technology professional with hands-on experience in software development, RF systems, and digital solutions. I aim to leverage my problem-solving skills, engineering mindset, and growing expertise in modern technologies to build reliable, user-focused products and contribute effectively to a forward-thinking organization.',

  }

  return (
    <div id="cv" className='font-[Nunito] text-stone-700 w-screen px-3 py-7 flex items-center'>
      <Aside />
      <Main user={user}/>
    </div>
  )
}

export default App
