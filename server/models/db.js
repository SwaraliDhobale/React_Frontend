// const mongoose = require('mongoose');

// const connectionString = 'mongodb://0.0.0.0:27017/kiddoshield'; 

// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB on localhost:27017');
// });
// const kidUserSchema= new mongoose.Schema({
//     username: 
//     {
//         type: String,
//         required: true
//     },
//     password: 
//     {
//         type: String,
//         required: true
//     },
//     confirmPassword: 
//     {
//         type: String,
//         required: true
//     },
//     contactNumber:{
//         type: String,
//         required: true
//     },
//     email:
//     {
//         type:String,
//         required: true
//     },
//     address:
//     {
//         type:String,
//         required: true
//     },
//     childName:
//     {
//         type:String,
//         required: true
//     },
//     parentName:
//     {
//         type:String,
//         required: true
//     },
//     dob:
//     {
//         type:Date,
//         required: true
//     },
    
//     medicalHistory:
//     {
//         type:String,
//         required: true
//     },
// })
// const KiddUser = new mongoose.model("kids",kidUserSchema)
// module.exports = KiddUser
const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/kiddoshield', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB on localhost:27017');
});

const kiddUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  childName: {
    type: String,
    required: true
  },
  parentName: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  medicalHistory: {
    type: String,
    required: true
  }
});

const KiddUser = mongoose.model('KiddUser', kiddUserSchema);

module.exports = KiddUser;
