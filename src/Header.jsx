import React, { useState } from "react";
import "./PlantListing.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export function Header({ numberInCart }) {

	return (
		<div id="navbar" name="navbar" className="navbar">

			<div className="left_navbar">
				<Link to="/" className="company_logo">Paradise Nursery</Link>

				<div className="nav_links">
					<a href="#flowering">Flowering Plants</a>
					<a href="#succulent">Succulents</a>
					<a href="#cactus">Cacti</a>
				</div>
			</div>

			<Link to="/cart" id="cartButton" className="cartButton">Cart<div className="cartIcon"></div>
				{numberInCart}</Link>
		</div>
	);
}

