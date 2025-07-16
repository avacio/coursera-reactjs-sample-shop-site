import React, { useState } from "react";
import "./App.css";
import PlantListing from "./PlantListing";
import AboutUs from "./AboutUs";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Home';
import ShoppingCartPage from './ShoppingCart';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </Router>
  );
}

export default App;