import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useContext } from "react";
import Form from "../../components/onboarding/form";
import { Context } from "../../providers/Provider";

export default function Onboarding() {
	const router = useRouter();
	const { setLoggedIn } = useContext(Context);
	useEffect(() => {
		setLoggedIn(true);
	}, []);

	return (
		<main>
			<div className="content">
				<h2>Lets Learn About You</h2>

				<div class="shadow-card">
					<Form />
				</div>
				<button
					className="primary"
					onClick={() => {
						router.push("/onboarding/avatar");
					}}>
					Next
				</button>
			</div>
		</main>
	);
}
