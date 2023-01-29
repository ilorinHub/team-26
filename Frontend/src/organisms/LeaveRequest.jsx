import React from 'react'
import Nav from '../component/Nav'
import exit from '../assets/exit.svg'
import FingerPrint from '../component/FingerPrint'


function LeaveRequest() {

  return (
    <div className='leave-request'>
        <Nav/>
        <div className="py-10 w-[90%] max-w-md mx-auto">
            <h1 className="flex justify-center gap-2 items-center text-xl md:text-2xl text-center font-bold mt-5 mb-9">
                <img src={exit} alt="exit" /> <i className='not-italic'>Leave Request</i>
            </h1>

            <form>
               <div className="flex gap-1 justify-between">
               <div className="input w-[48%]">
                    <label htmlFor="StartDate" className='text-sm'>Start date</label>
                    <input type="date" name="" id=""placeholder='hhhhhhhh'/>
                </div>
                <div className="input w-[48%]">
                    <label htmlFor="StartDate" className='text-sm'>End date</label>
                    <input type="date" name="" id="" placeholder='hhhhhhhh'/>
                </div>
               </div>
                <textarea
                    className="pb-[130px] mt-5 w-full px-5 pt-5 border border-[#000]"
                    name="message"
                    placeholder="Type additional note"
                ></textarea>
            </form>
            <FingerPrint text="Send leave request"/>
        </div>
    </div>
  )
}

export default LeaveRequest