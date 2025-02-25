import React, { useEffect } from "react";
import siteHeader from "../../assets/images/siteHeader_4kp_rev2.png";

export function ImageMap() {
	const [didMount, setDidMount] = useState(false);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<div>
			<img
				id="siteHeader"
				alt="siteHeader"
				width="100%"
				src={siteHeader}
				className="pb-4"
				usemap="#tc-image-map"
			/>
			<map name="tc-image-map">
				<area
					title="portfolio"
					coords="634,305,382"
					shape="circle"
					href="contact.html"></area>
				<area
					title="portfolio"
					coords="2851,294,300"
					shape="circle"
					href="portfolio.html"></area>
			</map>
		</div>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Image Map component mounted.");
			imageMapResize();
	}

	function componentDidUpdate() {
		if (didMount) console.log("The Image Map component updated.");
	}

	function componentDidUnmount() {
		return function displayMessage() {
			console.log("The Image Map component unmounted.");
		};
	}
}
