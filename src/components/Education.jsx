import { useState } from "react"

function Education(){
  const coursesStudied = [
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
  ]

  return(
    <section className="flex flex-col gap-2 w-full">
      <button className="hidden">Add</button>
      <h1 className="text-xl font-extrabold">Education</h1>
      <div className="flex flex-col gap-4">
        {coursesStudied.map(course => {
          return(
            <section key={course.id} className="text-sm flex flex-col gap-1">
              <h3 className="font-extrabold">{course.courseName},</h3>
              <p>{course.collegeName}</p>
              <p>{course.startDate} - {course.GraduationDate}</p>
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default Education