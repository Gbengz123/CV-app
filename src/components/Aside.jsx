import Contact from "./contact"
import Education from "./Education"
import Skills from "./Skills"
import image from '../assets/img/image.png'

const profileImage = image

function Aside({user}){
  return(
    <aside className="w-[clamp(15.63rem,33%,300px)] px-6 flex flex-col gap-6">
      <img src={profileImage} alt="profile image"  className="w-52 h-52 rounded-full"/>
      <Contact />
      <Education />
      <Skills />
    </aside>
  )
}

export default Aside