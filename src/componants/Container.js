import React from 'react';


function Container(){
    return(
        <div className='flex justify-center w-100 h-1/3 mt-8 font-semibold opacity-75'>
            <div className='w-1/2 h-full flex justify-between items-center flex-col'>
                <div className=' flex justify-center items-center bg-white space-x-2 w-full h-10 px-12'>
                    <div className='flex justify-center items-center w-1/6 h-full hover:border-b border-3 border-gray-500'>Study</div>
                    <div className='flex justify-center items-center w-1/6 h-full hover:border border-1 border-gray-500'>Quiz</div>
                    <div className='flex justify-center items-center w-1/6 h-full hover:border border-1 border-gray-500'>Test</div>
                    <div className='flex justify-center items-center w-1/6 h-full hover:border border-1 border-gray-500'>Game</div>
                    <div className='flex justify-center items-center w-1/6 h-full hover:border border-1 border-gray-500'>Others</div>
                </div>
                <div className=' w-4/5 h-4/6 bg-blue-800 rounded-3xl'>
                    <div className=' w-full h-14 text-semibold flex justify-between items-center px-10 font text-2xl text-white'>
                    <i class="ri-lightbulb-line"></i>
                    <i class="ri-volume-up-fill"></i>
                    </div>
                    <div className='w-full h-1/2 text-white py-[11%] px-[30%]'>
                        <h3 className='font text-3xl '>9+6+7X-2X-3</h3>
                    </div>
                </div>
                <div className='w-4/5 h-16  flex justify-between items-center px-5'>
                <i class="ri-restart-line text-2xl text-sky-800"></i>
                <div className='flex justify-between items-center w-40 px-2'>
                    <div className=' bg-sky-800 rounded-full items-center flex justify-center w-10'><i class="text-white ri-arrow-left-s-line text-2xl"></i></div>
                    <h4 className='text-black font-bold'>01/10</h4>
                    <div className='bg-sky-800 rounded-full items-center flex justify-center w-10'><i class=" text-white ri-arrow-right-s-line text-2xl"></i></div>
                </div>
                <i class="ri-fullscreen-fill text-2xl text-sky-800"></i>
                </div>
                

            </div>
            

        </div>
    )
}

export default Container;