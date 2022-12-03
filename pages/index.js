import Head from "next/head";
import { useRouter } from "next/router";
import CurrentAvatar from "../components/avatar";

export default function Home() {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>Youture</title>
				<meta
					name='description'
					content='Learn about how to make your retirement fund better by visualizing your future self!'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<button
				onClick={() => {
					router.push("/edit-avatar");
				}}
			>
				Edit Avatar
			</button>
			<CurrentAvatar />
		</div>
	);
}
