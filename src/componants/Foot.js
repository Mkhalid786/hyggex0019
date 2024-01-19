import React from 'react'



function Foot(){
    return(
        <div className='w-full h-1/4 mt-5 px-14 flex
        flex-col gap-8'>
            <h1 className='text-sky-800 text-4xl font-bold'>FAQ</h1>
            <div className='flex justify-between w-1/2 font-semibold border border-1 border-blue-700
            h-10 bg-white px-4 items-center rounded-xl'>
                <p>Can education flashcard be use</p>
                <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='flex justify-between w-1/2 border border-1 border-blue-700
            h-10 bg-white px-4 items-center rounded-xl font-semibold'>
                <p>Can education flashcard be use</p>
                <i class="ri-arrow-down-s-line"></i>
            </div>
            <div className='flex justify-between w-1/2 font-semibold border border-1 border-blue-700
            h-10 bg-white px-4 items-center rounded-xl'>
                <p>Can education flashcard be use</p>
                <i class="ri-arrow-down-s-line"></i>
            </div>

        </div>
    )
}

export default Foot;