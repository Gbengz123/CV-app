import Contact from "./contact"
import Education from "./Education"
import Skills from "./Skills"

function Aside({user}){
  return(
    <aside className="w-[clamp(15.63rem,33%,300px)] px-6 flex flex-col items-center gap-6">
      <img src="" alt="profile image"  className="border w-52 h-52 rounded-full"/>
      <Contact />
      <Education />
      <Skills />
    </aside>
  )
}

export default Aside