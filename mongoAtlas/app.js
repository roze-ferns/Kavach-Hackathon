//IMPORTANT 
// DB is authDB and collection is users

const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Create the user model
const User = mongoose.model("User", userSchema);

// Connect to MongoDB
const dbUrl = "mongodb+srv://admin:admin@cluster0.pg50wiz.mongodb.net/authDB";
mongoose.set("strictQuery", true);
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
    // Insert a new user
  const newUser = new User({
    email: "ayn",
    password: "ayn"
  });

//   newUser.save()
//     .then(savedUser => {
//       console.log("New user saved:", savedUser);
//       db.close();
//     })
//     .catch(err => {
//       console.error(err);
//       db.close();
//     });
  User.find({})
    .then(users => {
      console.log("All users:", users);
      db.close();
    })
    .catch(err => {
      console.error(err);
      db.close();
    });
});
