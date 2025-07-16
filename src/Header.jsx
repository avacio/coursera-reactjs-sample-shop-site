import React, { useState } from "react";

export function Header() {

	return (
		<navbar className="navbar">
		<div className="company_logo">Paradise Nursery</div>
		<div className="left_navbar">
				<div className="nav_links">
					<a href="#flowering">Flowering Plants</a>
					<a href="#succulent">Succulents</a>
					<a href="#cactus">Cacti</a>
				</div>
		</div>
	</navbar>
	);
}

