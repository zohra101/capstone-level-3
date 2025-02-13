import React from "react";
import siteHeader from "../assets/images/siteHeader_4kp_rev2.png";
import linkedInIcon from "../assets/icons/icon_linkedin.png";
import emailIcon from "../assets/icons/icon_email_coral.png";

export function Header() {
	return (
		<>
			<header>
				<div>
					<img
						id="siteHeader"
						alt="siteHeader"
						width="100%"
						src={siteHeader}
					/>
				</div>
				<div>
					<a
						className="ms-2"
						href="https://www.linkedin.com/in/alexmarjanovic">
						<img
							id="linkedInIcon"
							alt="LinkedIn"
							style={{height: "40px", width: "40px"}}
							src={linkedInIcon}
						/>
					</a>
					<a href="contact.html#sendMessage">
						<img
							id="emailIcon"
							alt="email"
							style={{height: "30px", width: "30px"}}
							src={emailIcon}
						/>
					</a>
				</div>
				<hr />
			</header>
		</>
	);
}
