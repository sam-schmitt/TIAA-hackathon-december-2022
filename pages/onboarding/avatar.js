import { useRouter } from "next/router";
import React from "react";
import EditAvatar from "../../components/avatar/edit-avatar";
import Head from "next/head";

export default function EditAvatarPage() {
	const router = useRouter();

	return (
		<main id="create-account">
			<Head>
				<title>Edit Your Avatar</title>
			</Head>
			<div class="shadow-card">
				<div class="form-container">
					<EditAvatar />
				</div>
				<button className="primary full" onClick={() => router.push("/")}>
					Save
				</button>
			</div>
		</main>
	);
}
