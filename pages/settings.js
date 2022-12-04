import React from "react";

export default function Settings() {
	return (
		<main id="settings-page">
			<div class="buttons">
				<button
					className="primary"
					onClick={() => {
						router.push("/onboarding/avatar");
					}}>
					Edit Avatar
				</button>
			</div>
		</main>
	);
}
