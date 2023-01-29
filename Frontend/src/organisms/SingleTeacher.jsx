import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../component/Nav'
import singleImg from '../assets/singleImg.svg'

function SingleTeacher({teacherList}) {
    const {id} = useParams()

    const [single, setSingle] = useState({})

    useEffect(() => {
        const filterd = teacherList.filter((x) => x.id == id)
        setSingle(filterd[0])
    },[id])

  return (
    <div>
        <Nav/>
        <div className='w-[90%] my-10 mx-auto max-w-md'>
            <div className='flex justify-center border border-b-[#7E7B7B] border-x-0 border-t-0 pb-8'>
                <div className='flex flex-col justify-center gap-5'>
                <div>
                    <img src={singleImg} alt="singleImg" />
                </div>
                   <div className='text-center'>
                   <h4 className='font-extrabold'>{single.name}</h4>
                    <p>Basic file</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleTeacher