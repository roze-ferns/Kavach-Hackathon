import React, { useState } from "react";
import "./Face_Recognition.css";
import Navigation from "./navigation.js";
import Footer from "./footer";

function Form() {
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleImageFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleVideoFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageFile || !videoFile) {
      alert("Please select both image and video files.");
      return;
    }
    const formData = new FormData();
    formData.append("avatar", imageFile);
    formData.append("avatar", videoFile);
    // Replace "/upload" with the correct URL for your server-side endpoint.
    fetch("http://localhost:3001/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Upload successful!");
        } else {
          alert("Upload failed.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Upload failed.");
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    // Replace "/uploads" with the correct URL for your server-side endpoint.
    fetch("http://localhost:3001/api/delete", {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          alert("Delete successful!");
        } else {
          alert("Delete failed.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Delete failed.");
      });
  };

  return (
    <>
      <Navigation />
      <h1 className="text-4xl font-bold text-red-900 text-center m-5 p-5">
        Face Recognition
      </h1>
      <div className="flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="flex flex-col space-y-5 justify-center items-center"
        >
          <div className="flex space-x-10 justify-center items-center">
            <div className=" border-2 border-black p-10 space-y-5">
              <label htmlFor="imageFile">Image Only:</label>
              <div>
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  id="imageFile"
                  placeholder="Image only"
                  onChange={handleImageFileChange}
                />
              </div>
            </div>
            <div className="border-2 border-black p-10 space-y-5">
              <label htmlFor="videoFile">Video Only:</label>
              <div>
                <input
                  type="file"
                  name="avatar"
                  accept="video/*"
                  id="videoFile"
                  placeholder="Video only"
                  onChange={handleVideoFileChange}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Upload"
            className="text-black inline-block w-32 px-6 py-2.5 bg-white text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out"
          />
        </form>

        <div className="flex space-x-10 justify-center items-center">
          <form onSubmit={handleDelete}>
            <input
              type="submit"
              value="Delete"
              className="text-black inline-block w-32 px-6 py-2.5 bg-white text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out"
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Form;
