import React, { useState } from "react";
import "./PlantListing.css";
import TotalCost from "./TotalCost";
import { Header } from "./Header";
import { useSelector, useDispatch } from "react-redux";

function PlantListing({ handleAddToCart, handleRemoveFromCart, plantTotalCost, plantTotalCount }) {
  const [showItems, setShowItems] = useState(false);
  const plantItems = useSelector((state) => state.plant);

  const handleToggleItems = () => {
    console.log("handleToggleItems called");
    setShowItems(!showItems);
  };

  const getItemsFromTotalCost = () => {
    const items = [];
  };

  const items = getItemsFromTotalCost();

  const ItemsDisplay = ({ items }) => {

  };

  const showPlants = (item, index, category) => {
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
          {(
            <div className="button_container">
              <button
                className={plantItems[index].quantity === 0 ? " addToCartButton" : "addToCartButton btn-disabled"}
                onClick={() => handleAddToCart(index)}
              >
                {plantItems[index].quantity === 0 ? "Add to Cart" : "Added to Cart"}
              </button>
              </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <Header numberInCart={plantTotalCount} />
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
              </div>


              <div id="cactus" className="venue_container container_main">

                <div className="text">
                  <h1>Cacti</h1>
                </div>
                <div className="plant_listing">
                  {plantItems.map((item, index) =>
                    showPlants(item, index, "cactus"))}
                </div>

              </div>
              <div className="total_cost">Total Cost: ${plantTotalCost}</div>
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