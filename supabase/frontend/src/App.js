import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from "react-bootstrap";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  "https://wyyqwnmpcqwfcsyyuujw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5eXF3bm1wY3F3ZmNzeXl1dWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2Mzc5NTEsImV4cCI6MTk5NzIxMzk1MX0.RpGahYaiVjG5Js8LeQmHcO0RjdnMJLxGXdi4fVdAac0"
);

const CDNURL =
  "https://wyyqwnmpcqwfcsyyuujw.supabase.co/storage/v1/object/public";

const imageCDNURL = `${CDNURL}/images`;
const videoCDNURL = `${CDNURL}/videos`;

// CDNURL/videos/testfile.mp4 //for accessing these files

function App() {
  async function uploadFile(e) {
    const file = e.target.files[0];
    console.log("Upload!");
    let bucketName = "";
    let extension = "";
    let contentType = "";
    if (file.type.startsWith("image/")) {
      bucketName = "images";
      extension = "." + file.name.split(".").pop();
      contentType = file.type;
    } else if (file.type === "video/mp4") {
      bucketName = "videos";
      extension = ".mp4";
      contentType = "video/mp4";
    } else {
      console.log("Unsupported file type");
      return;
    }
    const filename = uuidv4() + extension;
    const { error, data } = await supabase.storage
      .from(bucketName)
      .upload(filename, file, {
        contentType: contentType,
      });
    if (error) {
      console.log(error);
      alert("Error uploading file to Supabase");
    } else {
      alert("File uploaded successfully");

      if (bucketName === "images") {
        const urlImage = `${CDNURL}/${bucketName}/${filename}`; //URL OF IMAGE
        console.log("URL for Image:", urlImage);
      } else if (bucketName === "videos") {
        const urlVideo = `${CDNURL}/${bucketName}/${filename}`; //URL OF VIDEO
        console.log("URL for Video:", urlVideo);
      } else {
        console.log("Unsupported file type");
        return;
      }

      // const filename = uuidv4() + extension;
      // console.log("Filename:", filename);
      // const url = `${CDNURL}/${bucketName}/${filename}`;
      // console.log("URL:", url);  //VARIABLE STORING THE URL OF FILE
      // console.log(`Filename: ${filename}`);
    }
  }

  // console.log(videos);

  return (
    <>
      <Container className="mt-5" style={{ width: "700px" }}>
        <h1>Video</h1>
        <Form.Group className="mb=3 mt=3">
          <Form.Label>Upload your video here!</Form.Label>
          <Form.Control
            type="file"
            accept="video/mp4"
            onChange={(e) => uploadFile(e)}
          ></Form.Control>
        </Form.Group>
      </Container>

      <Container className="mt-5" style={{ width: "700px" }}>
        <h1>Image</h1>
        <Form.Group className="mb=3 mt=3">
          <Form.Label>Upload your image here!</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => uploadFile(e)}
          ></Form.Control>
        </Form.Group>
      </Container>
    </>
  );
}

export default App;
