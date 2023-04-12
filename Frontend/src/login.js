import React from "react";
import "./login.css";
import {useState} from "react";
import axios from "axios"
// import ErrorMessage from "./ErrorMesssge";
function LogIn() {
    const [username,setusername] = useState("")
    const[password,setPassword] = useState("")
    const[error,setError] = useState(false)
    const[loading,setLoading] = useState(false)
    const submitHandler = async (e) => {
        e.preventDefault()
       try {
        const config = {
            headers: {
            "Content-type": "application/json"
        }
       }
       setLoading(true)
        const { data } = await axios.post("http://localhost:5000/api/auth/login",
        {
                username,
                password,
        },
        config
        )
console.log(data)
localStorage.setItem('userInfo',JSON.stringify(data))
setLoading(false)
    }
    catch(error)
    {
        setError(error.response.data.message)
        setLoading(false)
        alert("Invalid credentials")
    }
 
}
    return (
        <>
            <div className="h-screen bgimage flex justify-center items-center space-x-10 ">
                <div className="bg-white w-[700px] h-auto rounded-3xl flex flex-col space-y-6 justifiy-center items-center">
                    <h1 className="text-4xl text-black font-bold mt-7">Login</h1>
                    <form className="flex flex-col space-y-10 justify-center items-center">
                            <div>
                                <label htmlFor="text" className="text-black text-xl text-purple-violent font-bold">User Name: <span className="text-red-800">*</span></label>
                                <input type="tel" name="phonenumber" className="mx-2 shadow-lg appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline" onChange = {(e) => setusername (e.target.value)} value = {username} required></input>
                            </div>
                            <div>
                                <label htmlFor="password" className="text-black text-xl text-purple-violent font-bold">Password: <span className="text-red-800">*</span></label>
                                <input type="password" name="password" className="mx-2 shadow-lg appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline" onChange = {(e) => setPassword (e.target.value)} value = {password} required></input>
                            </div>
                        <button type="submit" className="text-black inline-block w-32 px-6 py-2.5 bg-white text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out" onClick = {submitHandler}>Submit</button>
                    </form>
                    <div className="text-white">
                        <p className="text-red-800 text-sm my-2">* Required Fields</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogIn;