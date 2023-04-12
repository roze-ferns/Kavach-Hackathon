import React from "react";
import "./navigation.css";
import ANPRI from './image/ANPR.png'
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
                <nav className="flex flex-row h-16 ">
                    <img src={ANPRI} className="h-14 pl-4 pt-3" alt=""></img>
                    <div className="flex list-none m-auto space-x-32">
                        <li className='text-black p-2 font-semibold hover:bg-blue-500 hover:text-white rounded-lg'>Documentation</li>
                        <li className='text-black p-2 font-semibold hover:bg-blue-500 hover:text-white rounded-lg'>Contact</li>
                        <Link to={`/login`} className='text-black p-2 font-semibold hover:bg-blue-500 hover:text-white rounded-lg'>Log In</Link>
                    </div>
                    <img src="https://static.thenounproject.com/png/7792-200.png" className="h-14 pr-4 pt-3" alt=""></img>
                </nav >
            </div >
        </>
    );
}


export default Navigation;