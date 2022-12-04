import { useRouter } from "next/router";
import React from "react";

export default function WelcomePage() {
	const router = useRouter();
	return (
		<main id="welcome">
			<div class="content">
				<h1>Welcome to the Future of You</h1>
				<button
					className="primary wide"
					onClick={() => router.push("/onboarding")}>
					Get Started
				</button>
			</div>
		</main>
	);
}
