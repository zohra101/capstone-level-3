import React from "react";
import { Navbar } from "../Views/Navbar.js";

export function Portfolio() {
	return (
		<>
			<Navbar />
			<main id="mainTag">
				<div class="alert alert-secondary alert-dismissible">
					<strong>Coming soon!</strong> In the near future, you'll be able to
					click on the cards to view larger samples with greater detail.
					<button
						class="btn-close"
						data-bs-dismiss="alert"></button>
				</div>
				<div class="container ms-2">
					<div class="row">
						<h2>Projects</h2>
						<p>
							Here's a sampling of current and past projects to which I've
							contributed.
						</p>
						<p>
							Many projects involve propietary information or sensitive data. To
							protect the confidentiality and privacy of my clients and/or
							employers, most samples are generic representations of the
							deliverables produced. Any samples that contain actual work are
							from defunct companies with any data redacted.
						</p>
						<br />
					</div>
				</div>

				<br />
				<div class="container ms-2">
					<div class="row">
						<p>
							For samples not represented here, please{" "}
							<a href="contact.html#sendMessage">submit a request</a> by
							completing the form on my Contact page.
						</p>
					</div>
				</div>
			</main>
		</>
	);
}
