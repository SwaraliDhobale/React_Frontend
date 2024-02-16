const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors())
mongoose.connect('mongodb://0.0.0.0:27017/kiddoshield', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const kiddUserSchema = new mongoose.Schema({
  username: String,
  password: String,
  confirmPassword: String,
  contactNumber: String,
  email: String,
  address: String,
  childName: String,
  parentName: String,
  dob: String,
  medicalHistory: String,
});

const KiddUser = mongoose.model('KiddUser', kiddUserSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('localhost:5000/register', async (req, res) => {
  const {
    username,
    password,
    confirmPassword,
    contactNumber,
    email,
    address,
    childName,
    parentName,
    dob,
    medicalHistory,
  } = req.body;

  try {
    const newUser = new KiddUser({
      username,
      password,
      confirmPassword,
      contactNumber,
      email,
      address,
      childName,
      parentName,
      dob,
      medicalHistory,
    });

    await newUser.save();
    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// // const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const KiddUser = require('./models/db');
// const app = express();
// const KiddUser = require('./models/db');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// app.post("/register", async (req, res) => {

//   const data={
//     username: req.body.username,
//     password: req.body.password,
//     confirmPassword: req.body.confirmPassword,
//     contactNumber: req.body.contactNumber,
//     email: req.body.email,
//     address: req.body.address,
//     childName: req.body.childName,
//     parentName: req.body.parentName,
//     dob: req.body.dob,
//     medicalHistory: req.body.medicalHistory,
//   }
//     await kidUser.insertMany([data])
//     res.render('homepage')

// });




// app.post("/register", async (req, res) => {
//   const {
//     username,
//     password,
//     confirmPassword,
//     parentName,
//     contactNumber,
//     email,
//     address,
//     childName,
//     dob,
//     medicalHistory
//   } = req.body;

//   const newUser = new KiddUser({
//     username,
//     password,
//     confirmPassword,
//     parentName,
//     contactNumber,
//     email,
//     address,
//     childName,
//     dob,
//     medicalHistory
//   });

//   try {
//     await newUser.save();
//     res.status(200).json({ message: 'Registration successful' });
//   } catch (error) {
//     console.error('Error saving user:', error);
//     res.status(500).json({ message: 'Registration failed' });
//   }
// });

// const app = express();
// app.use(cors()); 
// app.use(bodyParser.json());

// mongoose.connect('mongodb://0.0.0.0:27017/kiddoshield', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB on localhost:27017');
// });

// app.post("/register", async (req, res) => {

//   const newUser = new KiddUser({   
//   username: req.body.username,
//   password: req.body.password,
//   confirmPassword: req.body.confirmPassword,
//   parentName: req.body.parentName,
//   contactNumber: req.body.contactNumber,
//   email: req.body.email,
//   address: req.body.address,
//   childName: req.body.childName,
//   dob: req.body.dob,
//   medicalHistory: req.body.medicalHistory
// });
// fetch('http://localhost:3000/register', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.error('Error:', error);
// });

//   await KiddUser.insertMany([newUser]);
//   res.status(200).json({ message: 'Registration successful' });
// });
