
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/homepage';
import Login from './Components/login';
import Register from './Components/register_user';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define a route for the homepage */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        </Routes>
    </Router>
  );
};

export default App;
