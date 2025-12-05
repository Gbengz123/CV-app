import { useState } from 'react'
import Aside from './components/Aside'
import Main from './components/Main'

function App() {
  return (
    <div id="cv" className='font-[Nunito] text-stone-700 min-w-[773px] w-[80%] max-w-[1063px] m-auto px-3 py-7 flex shadow-2xl'>
      <Aside />
      <Main />
    </div>
  )
}

export default App
