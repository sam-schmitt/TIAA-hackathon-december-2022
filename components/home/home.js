import Head from "next/head";
import React, { useContext } from "react";
import { Context } from "../../providers/Provider";
import CurrentAvatar from "../avatar/avatar";
import HomeCTA from "./homeCTA";
import QuickActions from "./quickActions";
import Room from "./room";
export default function HomePage() {
	const { name } = useContext(Context);
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
				<Room />
				<div className="avatar-container">
					<h4>Hi {name ? name : "Name"}</h4>
					<CurrentAvatar size={300} />
					<h4>Future You Is Feeling: sad</h4>
				</div>
				<QuickActions />
			</div>
		</main>
	);
}
