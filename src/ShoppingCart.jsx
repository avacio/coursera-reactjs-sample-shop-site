import React, { useState } from "react";
import "./PlantListing.css";
import TotalCost from "./TotalCost";
import { Header } from "./Header";
import { useSelector } from "react-redux";
import { HashLink } from 'react-router-hash-link';

function ShoppingCart({ handleAddToCart, handleRemoveFromCart, deleteFromCart, plantTotalCost, plantTotalCount }) {
	const plantItems = useSelector((state) => state.plant);

	const showPlantsInCart = (item, index) => {
		console.log(item.quantity);
		if (item.quantity > 0) {
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
					<div className="totalOnePlant">Total: ${item.cost * item.quantity}</div>
					<button
						className="deleteFromCartButton"
						onClick={() => deleteFromCart(index)}
					>
						Delete
					</button>
				</div>
			);
		}
	};


	return (
		<>
			<Header numberInCart={plantTotalCount} />
			<div className="cartContainer">
				<div className="total_cost">Total Cost: ${plantTotalCost}</div>

				{plantItems.map((item, index) =>
					showPlantsInCart(item, index))}

				<HashLink className={plantTotalCount > 0 ? "checkoutButton" : "hidden"}>Checkout</HashLink>
				<HashLink to="/plants" className="continueShoppingButton">Continue Shopping</HashLink>
			</div>

		</>
	);
}

export default ShoppingCart;