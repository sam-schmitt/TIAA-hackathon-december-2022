import Head from "next/head";
import { useRouter } from "next/router";
import CurrentAvatar from "../components/avatar";

export default function Home() {
	const router = useRouter();
	return (
		<main id="home-page">
			<Head>
				<title>Youture</title>
				<meta
					name="description"
					content="Learn about how to make your retirement fund better by visualizing your future self!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="content">
				<div className="cta"></div>
				<div className="home"></div>
				<div className="avatar">
					<CurrentAvatar size={300} />
					<button
						className="primary"
						onClick={() => {
							router.push("/edit-avatar");
						}}>
						Edit Avatar
					</button>
				</div>
				<div className="quick-actions"></div>
			</div>
		</main>
	);
}
