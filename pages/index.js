import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Context } from "../providers/Provider";
import HomePage from "../components/home/home";
import WelcomePage from "./welcome";

export default function Home() {
	const router = useRouter();
	const { loggedIn } = useContext(Context);
	return (
		<>
			<Head>
				<title>Youture</title>
				<meta
					name="description"
					content="Learn about how to make your retirement fund better by visualizing your future self!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="content">{loggedIn ? <HomePage /> : <WelcomePage />}</div>
		</>
	);
}
