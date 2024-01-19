import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="flex items-center justify-between p-10 pl-10 pr-20 font-medium opacity-80 text-black w-100 h-20">
                {/* Left side - Logo image */}
                <div>
                    <img src="https://wjve36.n3cdn1.secureserver.net/wp-content/uploads/2023/12/Hy.png?time=1705574810" alt="Logo" className="h-16 w-40" />
                </div>

                {/* Right side - Navigation links */}
                <div className="flex space-x-14 items-center">
                    <a href="#" className="hover:text-gray-500 ">Home</a>
                    <a href="#" className="hover:text-gray-500">Flashcard</a>
                    <a href="#" className="hover:text-gray-500">Contact</a>
                    <a href="#" className="hover:text-gray-500">FAQ</a>
                    <button className='bg-blue-900 rounded-full border-none px-6 text-black
                    py-1.5 text-white'>Login</button>
                </div>
            </nav>


        </div>
    )
}
export default Navbar;


