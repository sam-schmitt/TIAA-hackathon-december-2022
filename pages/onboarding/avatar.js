import { useRouter } from "next/router";
import React from "react";
import EditAvatar from "../../components/avatar/edit-avatar";

export default function Avatar() {
	const router = useRouter();
	return (
		<main id="edit-avatar">
			<EditAvatar />
			<button
				className="primary full"
				onClick={() => router.push("/onboarding/finish")}>
				Next
			</button>
		</main>
	);
}
