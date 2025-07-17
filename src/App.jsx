import React, { useState } from "react";
import "./App.css";
import PlantListing from "./PlantListing";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import PlantsPage from './PlantListing';
import ShoppingCartPage from './ShoppingCart';
import LandingPage from './Landing';
import { incrementQuantity, decrementQuantity, resetQuantity } from "./plantSlice";

function App() {

  const plantItems = useSelector((state) => state.plant);
  const dispatch = useDispatch();


  function handleAddToCart(index) {
    dispatch(incrementQuantity(index));
  };

  function handleRemoveFromCart(index) {
    if (plantItems[index].quantity > 0) {
      dispatch(decrementQuantity(index));
    }
  };

  function deleteFromCart(index) {
    if (plantItems[index].quantity > 0) {
      dispatch(resetQuantity(index));
    }
  };

  const calculateTotalCost = (section) => {
    let totalCost = 0;
    if (section === "plant") {
      plantItems.forEach((item) => {
        totalCost += item.cost * item.quantity;
      });
    }
    return totalCost;
  };

  const calculateTotalCount = (section) => {
    let totalCount = 0;
    if (section === "plant") {
      plantItems.forEach((item) => {
        totalCount += item.quantity;
      });
    }
    return totalCount;
  };
  const plantTotalCost = calculateTotalCost("plant");
  const plantTotalCount = calculateTotalCount("plant");


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<PlantsPage handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} plantTotalCost={plantTotalCost} plantTotalCount={plantTotalCount} />} />
        <Route path="/cart" element={<ShoppingCartPage handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} plantTotalCost={plantTotalCost} plantTotalCount={plantTotalCount} deleteFromCart={deleteFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;