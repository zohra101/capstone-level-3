import React from "react";
import copyright from "../assets/icons/copyright_cGainsboro_nobg.png";

export function Footer() {
	return (
		<>
			<hr></hr>
			<footer>
				<div>
					{" "}
					2024{" "}
					<img
						id="copyright"
						width="15px"
						src={copyright}
					/>{" "}
					Aleksandra Marjanovic
				</div>
			</footer>
		</>
	);
}
