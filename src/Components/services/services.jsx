import React from 'react'
import necklace from "../../assets/necklace.jpg"
import earring from "../../assets/earrings.jpg"
import women from "../../assets/her.jpg"
import men from "../../assets/him.jpg"

export default function Services() {
  return (
    // --------------------main service container-----------
    <div className='flex flex-col w-[100%] mt-10  px-5 md:px-10 lg:px-20 gap-10'>
        {/* ---------------- top 2 images----------------------- */}
        <div className='flex flex-col md:flex-row w-[100%] h-[400px] md:h-[500px] lg:h-[500px] gap-10'>
            <img src={necklace} alt=" a bueatiful necklace with black background" className='w-[100%] md:w-[35%] h-[100%] object-cover' />
            <img src={necklace} alt=" a bueatiful necklace with black background" className='w-[100%] md:w-[65%] h-[100%] object-cover' />
        </div>

        {/* ------------------------ bottom 2 images------------------ */}

        <div className='flex flex-col md:flex-row w-[100%] h-[400px] md:h-[500px] lg:h-[500px] gap-10  bg-slate-500'>
            <img src={men} alt=" a bueatiful necklace with black background" className='w-[100%] md:w-[35%] h-[100%] object-cover ' />
            <img src={men} alt=" a bueatiful necklace with black background" className='w-[100%] md:w-[65%] h-[100%] object-cover' />
        </div>
      
    </div>
  )
}
