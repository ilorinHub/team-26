import React from 'react'
import Button from './Button'
import fingerPrint from "../assets/fingerPrint.svg";


function FingerPrint({text}) {
  return (
    <div className="flex justify-between gap-4 my-5 items-center">
          <Button
            
            text="text-white"
            bg="bg-green"
            info={text}
            padding="py-3"
            width="w-[90%]"
          />

          <div className="border border-green px-4 py-[11px]">
            <img src={fingerPrint} alt="fingerPrint" />
          </div>
        
        </div>
  )
}

export default FingerPrint