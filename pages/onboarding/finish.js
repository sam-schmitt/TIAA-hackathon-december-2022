import { useRouter } from "next/router";
import React, { useContext } from "react";
import CurrentAvatar from "../../components/avatar/avatar";
import { Context } from "../../providers/Provider";
import Head from "next/head";

export default function FinishOnboarding() {
	const router = useRouter();
	const { name } = useContext(Context);
	return (
		<main id="finish-onboarding">
			<Head>
				<title>Onboarding</title>
			</Head>
			<div class="page-title center">
				<h1>You're All Done</h1>
				<h3>Great Job!</h3>
				<button className="primary wide" onClick={() => router.push("/")}>
					Next
				</button>
			</div>
			<div class="center">
				<CurrentAvatar size={300} />
				<h3>Say hi to {name}</h3>
			</div>
		</main>
	);
}
