import React from 'react'

import composeIcon from "../assets/Compose icon.png";

function FilterMemo() {
  return (
    <div
    className="hidden w-[25%] md:flex flex-col gap-10 items-center md:pt-16"
  >
    <div>
        <img src={composeIcon} alt="admin sort" />
    </div>
    
    <select name="" id="" className='py-3 px-2 border outline-none border-green text-green'>
        <option value="sort by" disabled>Sort by</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
    </select>
    </div>
  )
}

export default FilterMemo