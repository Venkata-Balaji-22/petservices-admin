// src/App.js
import React from "react";
import UserList from "./UserList";
import Navbar from "./Navbar";
import Home from "./Home";
import PetBookings from "./PetBookings";
import { Routes, Route } from "react-router-dom";
import ServiceBookings from "./ServiceBookings";
import Feedbacks from "./Feedbacks";

// Add other components you'll be routing to
// const Home = () => <h2>Home Page</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/UserList" element={<UserList/>}/>
        <Route path="/PetBookings" element={<PetBookings/>}/>
        <Route path="/ServiceBookings" element={<ServiceBookings/>}/>
        <Route path="/Feedbacks" element={<Feedbacks/>} />
      </Routes>
    </div>
  );
}

export default App;
