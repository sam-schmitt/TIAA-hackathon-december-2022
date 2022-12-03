import Head from "next/head";
import { useRouter } from "next/router";
import CurrentAvatar from "../components/avatar";
import HomeCTA from "../components/home/homeCTA";
import QuickActions from "../components/home/quickActions";
import Room from "../components/home/room";

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
				<div className="cta">
					<HomeCTA />
				</div>
				<div className="home">
					<Room />
					<div className="avatar-container">
						<CurrentAvatar size={300} />
					</div>
				</div>
				<div className="quick-actions">
					<QuickActions />
				</div>
			</div>
		</main>
	);
}
