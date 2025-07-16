import React, { useState } from "react";
import "./PlantListing.css";
import TotalCost from "./TotalCost";
import { Header } from "./Header";
import { useSelector, useDispatch } from "react-redux";


const ShoppingCart = () => {
	const plantItems = useSelector((state) => state.plant);
	const dispatch = useDispatch();
	const [numberInCart, setNumberInCart] = useState(0);

	const handleAddToCart = (index) => {
		dispatch(incrementQuantity(index));
		setNumberInCart(numberInCart + 1);
	};

	const handleRemoveFromCart = (index) => {
		if (plantItems[index].quantity > 0) {
			dispatch(decrementQuantity(index));
			setNumberInCart(numberInCart - 1);
		}
	};

	const getItemsFromTotalCost = () => {
		const items = [];
	};

	const items = getItemsFromTotalCost();

	const ItemsDisplay = ({ items }) => {

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
		<>
			<Header numberInCart={plantTotalCount} />

		</>
	);
}

export default ShoppingCart;