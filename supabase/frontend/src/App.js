import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from "react-bootstrap";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  "https://jofthzzekjrhlnjcpyvf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZnRoenpla2pyaGxuamNweXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1NTY3MTAsImV4cCI6MTk5NzEzMjcxMH0.kAGRFktVBfq9xlIzwUUi3DrG2U9WSEq0Hm6quLk1Em0"
);

// const CDNURL =
//   "https://jofthzzekjrhlnjcpyvf.supabase.co/storage/v1/object/public/videos";

const imageCDNURL =
  "https://jofthzzekjrhlnjcpyvf.supabase.co/storage/v1/object/public/images";
const videoCDNURL =
  "https://jofthzzekjrhlnjcpyvf.supabase.co/storage/v1/object/public/videos"; //for accessing these files

// https://opmslesqmfxeqznbemew.supabase.co/storage/v1/object/public/videos/testfile.mp4

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
    const { error } = await supabase.storage
      .from(bucketName)
      .upload(uuidv4() + extension, file, {
        contentType: contentType,
      });
    if (error) {
      console.log(error);
      alert("Error uploading file to Supabase");
    } else {
      alert("File uploaded successfully");
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
