import { useState } from "react"
import Section from "./Section"
import Button from "./Button"
import { TrashIcon } from "@heroicons/react/24/solid"
import FormModal from "./FormModal"

function Education(){
  const [editState, setEditState] = useState(false)
  const [openObj, setOpen] = useState({open: false, id: 0})
  const [coursesStudied, setCoursesStudied] = useState([
    {
      id:0,
    },
    { 
      id: 1,
      courseName: 'Course Studied',
      collegeName: 'University/College Name',
      startDate: 'start',
      GraduationDate: 'End Date Graduation year',
    },
    { 
      id: 2,
      courseName: 'Course Studied',
      collegeName: 'University/College Name',
      startDate: 'start',
      GraduationDate: 'End Date Graduation year',
    },
    { 
      id: 3,
      courseName: 'Course Studied',
      collegeName: 'University/College Name',
      startDate: 'start',
      GraduationDate: 'End Date Graduation year',
    },
  ])

  const currentCourse = coursesStudied.find((course) => course.id === openObj.id)
  console.log(currentCourse)

  function handleCourseNameChange(currentCourseId, e){
    setCoursesStudied(coursesStudied.map((course) => {
      if (course.id === currentCourseId) return {...course, courseName: e.target.value}
      return course
    }))
  }

  function handleCollegeNameChange(currentCourseId, e){
    setCoursesStudied(coursesStudied.map((course) => {
      if (course.id === currentCourseId) return {...course, collegeName: e.target.value}
      return course
    }))
  }

  function handleSdateChange(currentCourseId, e){
    setCoursesStudied(coursesStudied.map((course) => {
      if (course.id === currentCourseId) return {...course, startDate: e.target.value}
      return course
    }))
  }

  function handleEdateChange(currentCourseId, e){
    setCoursesStudied(coursesStudied.map((course) => {
      if (course.id === currentCourseId) return {...course, GraduationDate: e.target.value}
      return course
    }))
  }

  function handleDelete(courseId){
    setOpen({...openObj, id:0})
    setCoursesStudied(coursesStudied.filter((c => c.id !== courseId)))
  }

  function handleAdd(){
    const courseIds = coursesStudied.map(course => course.id)
    const nextId = Math.max(...courseIds) + 1

    setCoursesStudied([...coursesStudied, {
      id: nextId,
      courseName: 'Course Studied',
      collegeName: 'University/College Name',
      startDate: 'start',
      GraduationDate: 'End Date Graduation year',
    }])
  }

  return(
    <>
      <Section heading={'EDUCATION'} hasAdd={true} className={'w-full'} handleEdit={() => setEditState(true)} handleAdd={handleAdd} editState={editState} setEditState={setEditState}>
        <div className="flex flex-col gap-4">
          {coursesStudied.map(course => {
            if (course.id === 0) return null
            return(
              <section 
                key={course.id} 
                className={editState ? `text-sm flex flex-col gap-1 relative border border-dashed` : `text-sm flex flex-col gap-1 relative`}
              >
                {editState && <div className="flex gap-2.5 absolute top-1 right-2">
                  <Button onClick={() => setOpen({...openObj, open:true, id:course.id })}>Edit</Button>
                  <button className="w-3 h-3 hover:cursor-pointer" onClick={() => handleDelete(course.id)}><TrashIcon/></button>
                </div>}
                <h3 className="font-extrabold">{course.courseName},</h3>
                <p>{course.collegeName}</p>
                <p>{course.startDate} - {course.GraduationDate}</p>
              </section>
            )
          })}
        </div>
      </Section>
      <FormModal open={openObj.open} onClose={() => setOpen({...openObj, open: false})} displayEdit={() => setCoursesStudied(coursesStudied)} infoHeading={'EDUCATION'}>
        <div>
          <label className="font-semibold text-sm">Course Name</label>
          <input onChange={(e) => {handleCourseNameChange(openObj.id, e)}} value={currentCourse.courseName} type="text" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
        <div>
          <label className="font-semibold text-sm">College Name</label>
          <input onChange={(e) => {handleCollegeNameChange(openObj.id, e)}} value={currentCourse.collegeName} type="text" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
        <div>
          <label className="font-semibold text-sm">Start Date</label>
          <input onChange={(e) => {handleSdateChange(openObj.id, e)}} value={currentCourse.startDate} type="date" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
        <div>
          <label className="font-semibold text-sm">End Date</label>
          <input onChange={(e) => {handleEdateChange(openObj.id, e)}} value={currentCourse.GraduationDate} type="date" className="w-full text-sm border p-0.5 rounded mt-1 outline-stone-800"/>
        </div>
      </FormModal>
    </>
    
  )
}

export default Education