import React from "react";
import siteHeader from "../../assets/images/siteHeader_4kp_rev2.png";
import { NavbarCollapsible } from "./NavbarCollapsible.js";
import { ImageMap } from "./ImageMap.js";

export function Header() {
	return (
		<header>
			<NavbarCollapsible />
			{/* <div>
				<img
					id="siteHeader"
					alt="siteHeader"
					width="100%"
					src={siteHeader}
					className="pb-4"
				/>
			</div> */}
			<ImageMap />
		</header>
	);
}
