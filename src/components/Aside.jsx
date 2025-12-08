import Contact from "./Contact"
import Education from "./Education"
import Skills from "./Skills"
import image from '../assets/img/image.png'
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

const profileImage = image

function Aside({user}){
  const [imageFile, setImageFile] = useState(null) 
  const [imagePreview, setImagePreview] = useState(null)

  function handleImageChange(e){
    const file = e.target.files[0]
    if (!file) return 

    //stores image file in memory for uplaoding to server
    setImageFile(file)

    const previewUrl = URL.createObjectURL(file)
    setImagePreview(previewUrl)
  }

  const labelStyle = `flex flex-col gap-2  items-center justify-center w-full h-full rounded-full hover:cursor-pointer hover:bg-black/10 transition`

  return(
    <aside className="w-[clamp(15.63rem,33%,300px)] px-6 flex flex-col gap-6">
      <div 
      className="border-2 flex items-center justify-center group  bg-cover bg-center w-52 h-52 rounded-full"
      style={imagePreview && {backgroundImage: `url(${imagePreview})`, border: 'none'}}
      >
        <label 
        htmlFor="profile" 
        className={imagePreview ?  'hidden text-amber-50 hover:bg-black/30 group-hover:' + labelStyle : labelStyle}
        >
          <ArrowUpTrayIcon width={35} />
          {!imagePreview && <p>Upload image</p>}
        </label>
        <input className="hidden" id="profile" type="file" accept="image/*" onChange={handleImageChange}/>
      </div>
      <Contact />
      <Education />
      <Skills />
    </aside>
  )
}

export default Aside