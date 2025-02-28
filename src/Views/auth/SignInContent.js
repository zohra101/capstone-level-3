import React from "react";

export function SignInContent(props) {
	const errorMessage = props.errorMessage;
	return (
		<>
			<fieldset className="ms-1">
				<div className="mb-3">
					<label
						htmlFor="email"
						className="htmlForm-label"
					>
						Email address
					</label>
					<input
						type="email"
						required
						className="htmlForm-control ms-3"
						id="email"
						placeholder="name@example.com"
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="password"
						className="htmlForm-label"
					>
						Password
					</label>
					<input
						type="password"
						required
						className="htmlForm-control ms-5"
						id="password"
						placeholder="************"
					/>
				</div>
			</fieldset>
			<div
				className="m-1"
				style={{ color: "red" }}
			>
				{" "}
				{errorMessage}
			</div>
		</>
	);
}

<fieldset className="ms-1">
	<input
		type="radio"
		id="individual"
		name="Contact Type"
		className="p-2"
		aria-label="Individual"
	/>
	<span> Individual</span>
	<input
		type="radio"
		id="company"
		name="Contact Type"
		className="p-2 ms-2"
		aria-label="Company"
	/>
	<span> Company</span>
</fieldset>;
