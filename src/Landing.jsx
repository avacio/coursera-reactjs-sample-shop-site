import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Landing() {
	return (
		<>
			<div className="first_page">
				<div className="main_event">
					<div className="first_page_name_btn">
						<h1 className="title_heading">Paradise Nursery</h1>
						<p className="title_caption">Curated plants for every home, heart, and growing journey.</p>
						<div className="getstarted_btn">
							<Link to="/plants">
								<button className="get-started-btn">
									Get Started
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}