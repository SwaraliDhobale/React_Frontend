// import React, { useState } from 'react';
// import axios from 'axios';
// import './register.css';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [childName, setChildName] = useState('');
//   const [parentName, setParentName] = useState('');
//   const [dob, setDob] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [medicalHistory, setMedicalHistory] = useState('');
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setPasswordError('Passwords do not match');
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:5000', {
//         username,
//         password,
//         contactNumber,
//         email,
//         address,
//         childName,
//         parentName,
//         dob,
//         medicalHistory,
//       });

//       if (response.status === 200) {
//         setRegistrationSuccess(true);
//       } else {
//         setRegistrationSuccess(false);
//       }
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>

//       <form>
       
//       </form>

//       {registrationSuccess && (
//         <div className="success-message">
//           Registration successful! You can now login using your credentials.
//         </div>

//       )}
//     </div>
//   );
// };
// export default Register;
import React, { useState } from 'react';
import axios from 'axios';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [childName, setChildName] = useState('');
  const [parentName, setParentName] = useState('');
  const [dob, setDob] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000', {
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

      if (response.status === 200) {
        setRegistrationSuccess(true);
      } else {
        setRegistrationSuccess(false);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        
      <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>

        <div className="form-group">
          <label>Contact Number:</label>
          <input type="text" name="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
        </div>

        <div className="form-group">
          <label>Child's Name:</label>
          <input type="text" name="childName" value={childName} onChange={(e) => setChildName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Parent's Name:</label>
          <input type="text"name="parentName"  value={parentName} onChange={(e) => setParentName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="text" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Medical History (if any):</label>
          <textarea name="medicalHistory" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)}></textarea>
        </div>

        {/* <button type="submit" onSubmit={handleRegister}>Register</button> */}
        
        <button type="submit">Register</button>
      </form>

      {passwordError && <div className="error">{passwordError}</div>}
      
      {registrationSuccess && (
        <div className="success-message">
          Registration successful! You can now login using your credentials.
        </div>
      )}
    </div>
  );
};

export default Register;

