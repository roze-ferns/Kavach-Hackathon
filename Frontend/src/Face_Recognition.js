import React from "react";
import "./Face_Recognition.css";
import Navigation from "./navigation.js";
import Footer from "./footer";

function FaceR() {
     
    return (
        <>
        <Navigation />
            <h1 class="text-4xl font-bold text-red-900 text-center m-5 p-5">Face Recognition</h1>
            <div className="flex-col justify-center items-center">
                <form className="flex flex-col space-y-5 justify-center items-center">
                    <div className="flex space-x-10 justify-center items-center">
                        <div className=" border-2 border-black p-10 space-y-5">
                            <label for="video" className="font-bold">Upload Video:</label>
                            <div><input type="file" id="video" name="video" /></div>
                        </div>
                        <div className="border-2 border-black p-10 space-y-5">
                            <label for="video" className="font-bold">Upload Photo:</label>
                            <div><input type="file" id="photo" name="photo" /></div>
                        </div>
                    </div>
                    <button type="submit" className="text-black inline-block w-32 px-6 py-2.5 bg-white text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                </form>
                <div className="border-4 border-red-800 w-96 h-96 m-auto my-9">
                    <h1 class="text-4xl font-bold text-red-900 text-center m-5 p-5">Output</h1>
                    <p>Your Output Here</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FaceR;