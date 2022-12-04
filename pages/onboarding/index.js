import { useRouter } from "next/router";
import React from "react";
import EditAvatar from "../../components/avatar/edit-avatar";
import Head from "next/head";
import Form from "../../components/onboarding/form";

export default function CreateAccount() {
	const router = useRouter();
	return (
		<main id="create-account">
			<Head>
				<title>Create Your Account</title>
			</Head>
			<div class="shadow-card">
				<div class="form-container">
					<Form />
					<EditAvatar />
				</div>
				<button
					className="primary full"
					onClick={() => router.push("/onboarding/finish")}>
					Next
				</button>
			</div>
		</main>
	);
}
