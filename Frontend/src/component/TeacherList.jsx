import React from 'react'
import teacherHat from '../assets/teacherHat.svg'
import deleteIcon from '../assets/deleteIcon.svg'
import { RiArrowRightSLine} from "react-icons/ri";

import Button from './Button'
import { Link } from 'react-router-dom';

function TeacherList({teacherList}) {
  return (
    <div className="py-10 w-[90%] max-w-md mx-auto">
            
            <h1 className="flex justify-center gap-2 items-center text-xl md:text-2xl text-center font-bold mt-5 mb-9">
                <img src={teacherHat} alt="teacher Hat" /> <i className='not-italic'>Students</i>
            </h1>

            <div className='flex flex-col gap-3'>
                {
                    teacherList.map((teacher) => (
                        <div key={teacher.id} className="teacher-list flex gap-1 pb-3 pl-2 items-center text-base">
                            <p className='w-[10%]'>{teacher.id}.</p>
                            <p className='w-[60%]'>{teacher.name}</p>
                            <div className='w-[20%]'> 
                            <Link to={`/dashboard/teacher/${teacher.id}`}>
                                <Button bg="bg-green" padding="p-1" size="text-sm" text="text-white" info="View"/>
                            </Link>

                            </div>
                            <div className='w-[10%] pl-2'>
                            <img src={deleteIcon} alt="deleteIcon" className='text-3xl'/>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-col my-14 gap-4 justify-center items-center'>
                <Button
                info="Add teachers"
                bg="bg-green"
                text="text-white"
                padding="px-14 py-4"
                />
                <p className='flex text-green items-center gap-2'><i className='not-italic'>View attendance sheet</i> <RiArrowRightSLine className='text-lg'/></p>
            </div>
        </div>
  )
}

export default TeacherList