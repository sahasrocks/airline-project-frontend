import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSign from "./components/UserSign";
import About from "./components/About";
import Contact from "./components/Contact";
import Flight from "./components/Flight";
import Home from "./components/Home";
import Booking from "./components/Booking";
import AdminLogin from "./components/AdminLogin.js";
import Dashboard from "./components/Dashboard.js";
import Login from "./components/LogIn.js";
import MyBookings from "./components/MyBooking.js";
import AdminSignUp from "./components/AdminSignUp.js";

export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/signUp" element={<UserSign />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mybooking" element={<MyBookings />} />
          <Route path="/adminSignUp" element={<AdminSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;