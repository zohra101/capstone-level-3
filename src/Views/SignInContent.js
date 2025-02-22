import React from "react";

export function SignInContent(props) {
	const errorMessage = props.errorMessage;
	return (
		<>
			<div className="mb-3">
				<label
					htmlFor="examplehtmlFormControlInput1"
					className="htmlForm-label">
					Email address
				</label>
				<input
					type="email"
					required
					className="htmlForm-control"
					id="examplehtmlFormControlInput1"
					placeholder="name@example.com"
				/>
			</div>
			<div className="mb-3">
				<label
					htmlFor="examplehtmlFormControlInput1"
					className="htmlForm-label">
					Password
				</label>
				<input
					type="password"
					required
					className="htmlForm-control"
					id="examplehtmlFormControlInput1"
					placeholder="************"
				/>
			</div>

			<div
				className="m-1"
				style={{ color: "red" }}>
				{" "}
				{errorMessage}
			</div>
		</>
	);
}
