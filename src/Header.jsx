import React, { useState } from "react";
import "./PlantListing.css";

export function Header({ numberInCart }) {

	return (
		<div id="navbar" name="navbar" className="navbar">

			<div className="left_navbar">
				<div className="company_logo">Paradise Nursery</div>

				<div className="nav_links">
					<a href="#flowering">Flowering Plants</a>
					<a href="#succulent">Succulents</a>
					<a href="#cactus">Cacti</a>
				</div>
			</div>

			<div id="cartButton" className="cartButton">Cart<div className="cartIcon"></div>
				{numberInCart}</div>
		</div>
	);
}

