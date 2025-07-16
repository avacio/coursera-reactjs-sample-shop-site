import React, { useState } from "react";
import "./PlantListing.css";
import TotalCost from "./TotalCost";
import { Header } from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "./plantSlice";
import { plants as plantsData } from './data/plants';

const PlantListing = () => {
  const [showItems, setShowItems] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const plantItems = useSelector((state) => state.venue);
  const dispatch = useDispatch();

  const handleToggleItems = () => {
    console.log("handleToggleItems called");
    setShowItems(!showItems);
  };

  const handleAddToCart = (index) => {
    dispatch(incrementQuantity(index));
  };

  const handleRemoveFromCart = (index) => {
    if (plantItems[index].quantity > 0) {
      dispatch(decrementQuantity(index));
    }
  };
  const handleIncrementAvQuantity = (index) => {
  };

  const handleDecrementAvQuantity = (index) => {
  };

  const handleMealSelection = (index) => {

  };

  const getItemsFromTotalCost = () => {
    const items = [];
  };

  const items = getItemsFromTotalCost();

  const ItemsDisplay = ({ items }) => {

  };
  const calculateTotalCost = (section) => {
    let totalCost = 0;
    if (section === "venue") {
      plantItems.forEach((item) => {
        totalCost += item.cost * item.quantity;
      });
    }
    return totalCost;
  };
  const venueTotalCost = calculateTotalCost("venue");

  const navigateToProducts = (idType) => {
    if (idType == '#flowering' || idType == '#succulent' || idType == '#cactus') {
      if (showItems) { // Check if showItems is false
        setShowItems(!showItems); // Toggle showItems to true only if it's currently false
      }
    }
  }

  const showPlants = (item, index, category) => {
    // const showPlants = (item, index) => {
    // Skip categories that don't match
    if (category != item.category) return;

    return (
      <div className="plant_main" key={index}>
        <div className="img">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="text">{item.name}</div>
        <div>${item.cost}</div>
        <div className="button_container">
          {plantItems[index].name === "Auditorium Hall (Capacity:200)" ? (

            <>
              <button
                className={plantItems[index].quantity === 0 ? "btn-warning btn-disabled" : "btn-minus btn-warning"}
                onClick={() => handleRemoveFromCart(index)}
              >
                &#8211;
              </button>
              <span className="selected_count">
                {plantItems[index].quantity > 0 ? ` ${plantItems[index].quantity}` : "0"}
              </span>
              <button
                onClick={() => handleAddToCart(index)}
              >
                &#43;
              </button>
            </>
          ) : (
            <div className="button_container">
              <button
                className={plantItems[index].quantity === 0 ? " btn-warning btn-disabled" : "btn-warning btn-plus"}
                onClick={() => handleRemoveFromCart(index)}
              >
                &#8211;
              </button>
              <span className="selected_count">
                {plantItems[index].quantity > 0 ? ` ${plantItems[index].quantity}` : "0"}
              </span>
              <button
                className={plantItems[index].quantity === 10 ? " btn-success btn-disabled" : "btn-success btn-plus"}
                onClick={() => handleAddToCart(index)}
              >
                &#43;
              </button>


              </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="main_container">
        {!showItems
          ?
          (
            <div className="items-information">
              <div id="flowering" className="venue_container container_main">
                <div className="text">

                  <h1>Flowering Plants</h1>
                </div>
                <div className="plant_listing">
                  {plantItems.map((item, index) =>
                    showPlants(item, index, "flowering"))}
                </div>
              </div>

              <div id="succulent" className="venue_container container_main">


                <div className="text">
                  <h1>Succulents</h1>
                </div>
                <div className="plant_listing">
                  {plantItems.map((item, index) =>
                    showPlants(item, index, "succulent"))}
                </div>
                <div className="addons_selection">

                </div>
              </div>


              <div id="cactus" className="venue_container container_main">

                <div className="text">
                  <h1>Cacti</h1>
                </div>
                <div className="plant_listing">
                  {plantItems.map((item, index) =>
                    showPlants(item, index, "cactus"))}
                </div>

                <div className="input-container venue_selection">

                </div>
                <div className="meal_selection">

                </div>
              </div>
              <div className="total_cost">Total Cost: ${venueTotalCost}</div>
            </div>
          ) : (
            <div className="total_amount_detail">
              <TotalCost totalCosts={totalCosts} handleClick={handleToggleItems} ItemsDisplay={() => <ItemsDisplay items={items} />} />
            </div>
          )
        }
      </div>
    </>
  );
};

export default PlantListing;
