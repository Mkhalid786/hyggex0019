import React from 'react';



function Flashcard(){
    return(
        <div className='w-full flex justify-center items-center h-40'>
            <div className='flex justify-between items-center w-full h-1/2 px-14'>
                <img src='https://wjve36.n3cdn1.secureserver.net/wp-content/uploads/2023/12/Hy.png?time=1705574810'></img>
                <div className='flex justify-center space-x-5 items-center w-80 h-1/2'>
                    <div className='w-10 h-10  flex items-center justify-center bg-blue-800 rounded-full'><i class=" text-white font-semibold text-2xl ri-add-fill"></i></div>
                    <h4 className='font-semibold opacity-75 text-blue-800 text-2xl'>Create Flashcard</h4>
                </div>
            </div>

        </div>
    )
}

export default Flashcard;
