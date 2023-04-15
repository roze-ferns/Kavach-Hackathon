import React from "react";
import "./sign.css";

function SignUp() {
    return (
        <div>
            <div className="h-screen bgimage flex justify-center items-center ">
                <div className="bg-white w-[800px] h-auto rounded-3xl flex flex-col space-y-6 justifiy-center items-center">
                    <h1 className="text-4xl text-black font-bold mt-7">Sign Up</h1>
                    <form className="flex flex-col space-y-10 justify-center items-center">
                            <div>
                                <label for="cars" className="text-black text-xl text-purple-violent font-bold">Block No:</label>
                                    <select name="cars" id="cars" className="mx-2 shadow-lg appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline">
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                        <option value="E">E</option>
                                        <option value="F">F</option>
                                    </select>
                            </div>
                            <div>
                                <label htmlFor="registrationid" className="text-black text-xl text-purple-violent font-bold">Room No: </label>
                                <input type="text" maxLength={3} pattern="[0-9]{3}" name="registrationid" className="mx-2 shadow-lg appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="name" className="text-black text-xl text-purple-violent font-bold">Full Name: </label>
                                <input type="text" name="name" className="mx-2 shadow-lg appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="phonenumber" className="text-black text-xl text-purple-violent font-bold">Phone Number: </label>
                                <input type="tel" name="phonenumber" className="mx-2 shadow-lg appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="password" className="text-black text-xl text-purple-violent font-bold">Password: </label>
                                <input type="password" name="password" className="mx-2 shadow-lg appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                            <div>
                                <label htmlFor="confirmpassword" className="text-black text-xl text-purple-violent font-bold">Confirm Password: </label>
                                <input type="password" name="confirmpassword" className="mx-2 shadow-lg appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input>
                            </div>
                        <button type="submit" className="text-black inline-block w-32 px-6 py-2.5 bg-white text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                    </form>
                    <div className="text-white">
                        <p className="text-xl text-black">Already have account?</p>
                        <p to='/Login' className="text-2xl text-black text-center mb-5 underline cursor-pointer hover:text-red-600">Log In</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SignUp;