const path = require("path");
const express = require("express");
const app = express();
const multer = require("multer");
const methodOverride = require('method-override');
const fs = require('fs');

app.use(methodOverride('_method'));

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
        const existingFiles = fs.readdirSync(uploadsFolderPath).filter(fileName => fileName.startsWith(fileType));
        existingFiles.forEach(existingFile => {
            const existingFilePath = path.join(uploadsFolderPath, existingFile);
            fs.unlinkSync(existingFilePath);
        });
        cb(null, fileType + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage });

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,"index.html")));

app.post('/upload', upload.array('avatar'), (req, res) => {
  // Handle the uploaded file
  res.send('File uploaded successfully');
});

const uploadsFolderPath = path.join(__dirname, 'uploads');

app.post('/uploads', emptyUploadsFolder, (req, res) => {
  res.redirect("/");
});

// Function to remove all files in the "uploads" folder, except "dummy.txt"
function emptyUploadsFolder(req, res, next) {
  // contents of the "uploads" folder read
  fs.readdir(uploadsFolderPath, (err, files) => {
    if (err) {
      console.error('Error reading "uploads" folder:', err);
      return;
    }

    // Loop through files and remove them one by one, except for "dummy.txt"
    files.forEach(file => {
      if (file !== "dummy.txt") {
        const filePath = path.join(uploadsFolderPath, file);
        fs.unlinkSync(filePath);
      }
    });
    console.log('All files in "uploads" folder, except for "dummy.txt", have been removed.');
  });
  next();
}


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
