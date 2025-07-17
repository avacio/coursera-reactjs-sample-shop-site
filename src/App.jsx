import React, { useState } from "react";
import "./App.css";
import PlantListing from "./PlantListing";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import PlantsPage from './PlantListing';
import ShoppingCartPage from './ShoppingCart';
import LandingPage from './Landing';
import { incrementQuantity, decrementQuantity } from "./plantSlice";
import { useLocation } from 'react-router'

function App() {

  const plantItems = useSelector((state) => state.plant);
  const dispatch = useDispatch();
  // const { pathname, hash } = useLocation();

  // React.useEffect(() => {
  //   if (hash) {
  //     window.location.replace(pathname + hash);
  //   }
  // }, []);

  // const handleToggleItems = () => {
  //   console.log("handleToggleItems called");
  //   setShowItems(!showItems);
  // };

  function handleAddToCart(index) {
    dispatch(incrementQuantity(index));
    // setNumberInCart(numberInCart + 1);
  };

  function handleRemoveFromCart(index) {
    if (plantItems[index].quantity > 0) {
      dispatch(decrementQuantity(index));
      // setNumberInCart(numberInCart - 1);
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
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </Router>
  );
}

export default App;