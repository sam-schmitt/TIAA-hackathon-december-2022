import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Context } from "../providers/Provider";

export default function WelcomePage() {
	const { setLoggedIn } = useContext(Context);
	const router = useRouter();
	return (
		<main>
			<div class="content">
				<h2>Welcome to the Future of You</h2>
				<button className="primary" onClick={() => router.push("/onboarding")}>
					Get Started
				</button>
			</div>
		</main>
	);
}
