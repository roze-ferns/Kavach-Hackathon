const path = require("path");
const express = require("express");
const app = express();
const multer = require("multer");
const methodOverride = require("method-override");
const fs = require("fs");

app.use(methodOverride("_method"));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // destination directory within the server's file system
  },
  filename: function (req, file, cb) {
    // Determine the file type (video or photo) based on the MIME type
    let fileType = "";
    if (file.mimetype.includes("video")) {
      fileType = "video";
    } else if (file.mimetype.includes("image")) {
      fileType = "photo";
    } else {
      // Default to using original name if MIME type is not recognized
      fileType = "file";
    }
    // Remove existing file(s) with the same type (photo or video)
    const existingFiles = fs
      .readdirSync(uploadsFolderPath)
      .filter((fileName) => fileName.startsWith(fileType));
    existingFiles.forEach((existingFile) => {
      const existingFilePath = path.join(uploadsFolderPath, existingFile);
      fs.unlinkSync(existingFilePath);
    });
    cb(null, fileType + path.extname(file.originalname));
  },
});

var upload = multer({ storage: storage });

app.post("/api/upload", upload.single("image"), (req, res) => {
  // Handle the uploaded file
  res.json({ filename: req.file.filename });
});

app.delete("/api/delete/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "uploads", filename);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to delete file" });
      return;
    }
    console.log(`File ${filename} deleted successfully`);
    res.sendStatus(204);
  });
});

const uploadsFolderPath = path.join(__dirname, "uploads");

// Serve the React app from the "frontend" folder as static files
app.use(express.static(path.join(__dirname, "frontend")));

// Send the index.html file for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
