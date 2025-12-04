import { useState } from "react"
import Section from "./Section"

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
    <Section heading={'EDUCATION'} hasAdd={true} className={'w-full'}>
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
    </Section>
  )
}

export default Education