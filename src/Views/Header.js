import React from "react";

export function Header() {
	return (
		<>
			<header>
				<div>
					<img
						alt="siteHeader"
						width="100%"
						src="src/assets/images/siteHeader_4kp_rev2.png"
					/>
				</div>
				<div>
					<a
						className="ms-2"
						href="https://www.linkedin.com/in/alexmarjanovic">
						<img
							alt="LinkedIn"
							style={{ height: "40px", width: "40px" }}
							src="src/assets/icons/icon_linkedin.png"
						/>
					</a>
					<a href="contact.html#sendMessage">
						<img
							alt="email"
							style={{ height: "30px", width: "30px" }}
							src="src/assets/images/email_coral.png"
						/>
					</a>
				</div>
				<hr />
			</header>
		</>
	);
}
