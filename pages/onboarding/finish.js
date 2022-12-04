import { useRouter } from "next/router";
import React from "react";

export default function FinishOnboarding() {
	const router = useRouter();

	return (
		<main id="finish-onboarding">
			<h2>Finish Onboarding! Good Job</h2>
			<button className="primary" onClick={() => router.push("/")}>
				Next
			</button>
		</main>
	);
}
