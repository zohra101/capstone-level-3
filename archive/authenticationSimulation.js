import { logins } from "../src/modules/authentication/logins.js";

export function authenticationSimulation(email = "", password = "") {
	// RETURNS TRUE IF EMAIL AND PASSWORD MATCH A LOGIN
	// RETURNS FALSE IF EMAIL AND PASSWORD DON'T MATCH A LOGIN

	for (const login of logins) {
		const currentEmail = login.email;
		const currentPassword = login.password;
		if (email === currentEmail && password === currentPassword) return true;
	}
}
