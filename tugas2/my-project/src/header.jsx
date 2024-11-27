import React from 'react';

function Header({ toggleDarkMode }) {
    return (
        <header className="flex items-center w-full bg-emerald-900 text-red-200">
            <h1 className="text-3xl font-bold text-balance m-2 p-5">Kallita's Portfolio</h1>
            <nav className="ml-auto">
                <ul className="flex space-x-4 p-4">
                    <li><a href="#home" className="text-red-200 text-center">Home</a></li>
                    <li><a href="#about" className="text-red-200 text-center">About</a></li>
                    <li><a href="#work" className="text-red-200 text-center">Work</a></li>
                    <li><a href="#follow" className="text-red-200 text-center">Social Media</a></li>
                </ul>
            </nav>
            <button 
                onClick={toggleDarkMode} 
                className=" mr-2 p-2 bg-red-300 text-emerald-800 rounded"
            >
                Switch Mode
            </button>
        </header>
    );
}

export default Header;