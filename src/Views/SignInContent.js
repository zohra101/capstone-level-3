import React from "react";

export function SignInContent(props) {
	const errorMessage = props.errorMessage;
	return (
		<>
			<div class="mb-3">
				<label
					for="exampleFormControlInput1"
					class="form-label">
					Email address
				</label>
				<input
					type="email"
					required
					class="form-control"
					id="exampleFormControlInput1"
					placeholder="name@example.com"
				/>
			</div>
			<div class="mb-3">
				<label
					for="exampleFormControlInput1"
					class="form-label">
					Password
				</label>
				<input
					type="password"
					required
					class="form-control"
					id="exampleFormControlInput1"
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
