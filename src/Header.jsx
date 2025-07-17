import React, { useState } from "react";
import "./PlantListing.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export function Header({ numberInCart }) {

	return (
		<div id="navbar" name="navbar" className="navbar">

			<div className="left_navbar">
				<Link to="/" className="company_logo">Paradise Nursery</Link>

				<div className="nav_links">
					<HashLink to="/plants#flowering">Flowering Plants</HashLink>
					<HashLink to="/plants#succulent">Succulents</HashLink>
					<a href="#cactus"><HashLink to="/plants#cactus">Cacti</HashLink></a>
				</div>
			</div>

			<Link to="/cart" id="cartButton" className="cartButton">Cart<div className="cartIcon"></div>
				{numberInCart}</Link>
		</div>
	);
}

