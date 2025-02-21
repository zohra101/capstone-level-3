import React from "react";
import { authenticationSimulation } from "../modules/authentication/authenticationSimulation.js";

export function handleSignInAttempt(
	event = new Event(),
	setErrorMessage,
	onSignIn
) {
	event.preventDefault();

	debugger;
	const inputs = event.target;
	const emailInput = inputs[1];
	const passwordInput = inputs[2];
	const closeButton = inputs[3];

	const email = emailInput.value;
	const password = passwordInput.value;

	const isAuthenticated = authenticationSimulation(email, password);
	if (isAuthenticated) {
		closeButton.click();
		inputs.reset();
		onSignIn();
	} else
		setErrorMessage(
			"The email and password entered do not match the authorized users list."
		);
}
