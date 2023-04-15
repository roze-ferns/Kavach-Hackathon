import React from "react";
import "./home.css";
import Ellipse from './image/Ellipse.png'
import FaceImage from './image/Face_recognition_Start.png';
import ANPRI from './image/ANPR.png'
import F_logo1 from './image/F_logo1.jpg'
import F_logo2 from './image/F_logo2.jpg'
import F_logo3 from './image/F_logo3.jpg'
import F_logo4 from './image/F_logo4.jpg'
import Navigation from "./navigation.js";
import { Link } from "react-router-dom";
import Footer from "./footer.js";
import { useNavigate } from "react-router-dom";
import login from "./login.js";
function Home() {
    const nav = useNavigate();
    
    return (
        <div>
            <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
                <Navigation />

                {/* Container */}
                <section className="flex flex-row justify-around">
                    <div className="flex flex-row h-screen space-x-32">
                        <div className="w-[900px] h-[400px] mt-auto mb-auto ml-28 text-center">
                            <h2 className="font-bold text-3xl">Face Recognition</h2>
                            <p className="font-bold text-3xl">&</p>
                            <p className="mb-4 font-bold text-3xl">ANPR </p><p className="font-serif text-2xl">(Automatic Number Plate Recognition)</p>
                            <p className="m-4 font-medium text-xl">Facial recognition can be used for security purposes, such as identifying potential criminals or persons of interest in a crowd or monitoring public spaces for safety.</p>
                            <p className="m-4 font-medium text-xl">ANPR can be used for traffic management, such as monitoring congestion and detecting traffic violations like speeding or running red lights.</p>
                        </div>
                        <div className="flex flex-row ">
                            <img className="w-[850px] h-[850px] m-auto rounded-xl" src={FaceImage} alt="office content 1"></img>
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-16 absolute left-40 top-56"
                                alt=""
                            />
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-16 absolute right-120 top-36"
                                alt=""
                            />
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-16 absolute left-64 bottom-24"
                                alt=""
                            />
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-16 absolute right-20 bottom-32"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </div >
            {/* ANPR*/}
            <section className="dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <div className="flex">
                            <h2 className="mb-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Automatic Number Plate Recognition</h2>
                            <img src={ANPRI} alt="" className="w-11 h-11" />
                        </div>
                        <p className="mb-4 p-6 border-2 border-black">ANPR technology uses optical character recognition (OCR) and computer vision algorithms to read license plates on vehicles.The technology can capture an image of the license plate and then process the image to extract the alphanumeric characters from the plate.
                            ANPR systems can be used in a variety of applications, including law enforcement, toll road management, parking management, and border control.
                            ANPR systems can also be used to detect stolen or wanted vehicles and to track the movements of specific vehicles.
                            ANPR technology has advanced significantly in recent years and can now recognize license plates in a variety of lighting conditions and from various angles.</p>

                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://www.efkonindia.com/images/inner-header-anpr.jpg" alt="office content 1"></img>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/8/80/Closed.circuit.twocameras.arp.750pix.jpg" alt="office content 2"></img>
                    </div>
                </div>
            </section>
             {/* Get Start for ANPR */}
             <section>
                <div className="flex flex-row bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500  h-screen space-x-32">
                    <div className="flex flex-row space-x-28">
                        <img className="w-[600px] h-[550px] ml-20 m-auto rounded-xl" src="https://5.imimg.com/data5/FE/CJ/HL/SELLER-43684220/automated-number-plate-recognition-application-software-1000x1000.jpg" alt="office content 1"></img>
                    </div>
                    <div className="w-[700px] h-[400px] m-auto text-center">
                        <div className="w-[600px] h-[400px] mt-auto mb-auto text-center">
                            <h2 className="m-8 font-bold text-6xl">Get Started</h2>
                            <p className="m-4 font-serif text-3xl">Automatic Number Plate Recognition</p>
                            <p className="m-4 font-medium text-xl">Getting started with ANPR requires a good understanding of the technology, careful hardware and software selection, rigorous testing and optimization, and ongoing maintenance and support.</p>
                            <Link to={`/automatic-number-plate-recognition`} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Start</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Face Recognition*/}
            <section className="dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full h-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdwRr7BgEwjrP772lZdIUgxdcn3UwDogbwQ&usqp=CAU" alt="office content 1"></img>
                        <img className="mt-4 w-full h-full lg:mt-10 rounded-lg" src="https://res.utmel.com/Images/Article/19fc0989-e97b-489e-b309-d73e28501294.jpg" alt="office content 2"></img>
                    </div>
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <div className="flex">
                            <h2 className="mb-2 ml-40 text-3xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">Face Recognition</h2>
                            <img src="https://static.thenounproject.com/png/7792-200.png" alt="" className="w-11 h-11" />
                        </div>
                        <p className="mb-4 p-6 border-2 border-black">Facial recognition technology uses algorithms to analyze and compare facial features from an image or video feed with a database of known faces.
                            The technology can be used to identify individuals in real-time, monitor crowds for security purposes, and authenticate access to secure areas.
                            Facial recognition systems can be used in a variety of applications, including law enforcement, airport security, and retail analytics.
                            Facial recognition technology has been controversial due to concerns about privacy and the potential for misidentification, and there have been efforts to regulate its use in some jurisdictions.
                            Despite the controversies, facial recognition technology continues to be developed and refined, and it is likely to be used in more applications in the future.</p>

                    </div>
                </div>
            </section>
           {/* Get Start for Face Recognition */}
           <section>
                <div className="flex flex-row bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500  h-screen space-x-32">
                    <div className="w-[700px] h-[400px] m-auto text-center">
                        <div className="w-[600px] h-[400px] mt-auto mb-auto ml-10 text-center">
                            <h2 className="m-8 font-bold text-6xl">Get Started</h2>
                            <p className="m-4 font-serif text-3xl">Face Recognition</p>
                            <p className="m-4 font-medium text-xl">Getting started with Facial recognition technology requires a good understanding of the technology, careful hardware and software selection, rigorous testing and optimization, and ongoing maintenance and support.</p>
                            <Link to={`/facerecognition`} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Start</Link>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-16">
                        <img className="w-[700px] h-[500px] m-auto pr-6 rounded-xl" src="https://media.istockphoto.com/id/1124560262/vector/facial-recognition-system-concept-face-recognition-3d-scanning-face-id-vector-wireframe.jpg?s=612x612&w=0&k=20&c=BHtp6SSY2_zY1shlKTwNgzx9NlR9n6WDI4jfSp-O5TI=" alt="office content 1"></img>
                    </div>
                </div>
            </section>
            {/* Features of Face Recognition */}
            <section>
                <div className="h-screen ">
                    <h1 className="font-bold text-2xl text-center p-4 font-serif">Features of Face Recognition</h1>
                    <div className="flex flex-row flex-wrap justify-center space-x-40 mt-10">
                        <div>
                        <img src={F_logo1} alt="" className="w-56 h-36 aspect-square object-contain mix-blend-color-burn"></img>
                        <p className="w-56 h-36 m-4 font-medium text-xl">Face recognition systems use cameras to capture images of individuals. These cameras can be fixed or mobile, depending on the application.</p>
                        </div>
                        <div>
                        <img src={F_logo2} alt="" className="w-56 h-40 aspect-square object-contain mix-blend-color-burn"></img>
                        <p className="w-56 h-36 m-4 font-medium text-xl"> Face recognition systems come with a user interface that allows operators to view the images captured by the camera, search the database, and configure the system settings </p>
                        </div>
                        <div>
                        <img src={F_logo3} alt="" className="w-56 h-36 aspect-square object-contain mix-blend-color-burn"></img>
                        <p className="w-56 h-36 m-4 font-medium text-xl">Face recognition systems use image processing units to analyze the images captured by the camera. These units use algorithms to detect and extract facial features such as the eyes, nose, and mouth..</p>
                        </div>
                        <div>
                        <img src={F_logo4} alt="" className="w-56 h-36 aspect-square object-contain mix-blend-color-burn"></img>
                        <p className="w-56 h-36 m-4 font-medium text-xl">Face recognition systems can be integrated with other systems such as access control systems, security systems, and time attendance systems to provide a more comprehensive solution.</p>
                        </div>
                    </div>
                </div>
            </section>
          
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;