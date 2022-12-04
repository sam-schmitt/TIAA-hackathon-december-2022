import Head from "next/head";
import React, { useContext } from "react";
import { Context } from "../../providers/Provider";
import CurrentAvatar from "../avatar/avatar";
import HomeCTA from "./homeCTA";
import QuickActions from "./quickActions";
import Room from "./room";
import roomTypes from "../../avatar-state/room";
export default function HomePage() {
	const { name, roomType } = useContext(Context);
	return (
		<main id="home-page">
			<Head>
				<title>Future You</title>
				<meta
					name="description"
					content="Learn about how to make your retirement fund better by visualizing your future self!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="content">
				<div class="room-container">
					<Room />
				</div>
				<div className="right">
					<div class="fixed-header">
						<h3>Hi, {name ? name : "Name"}!</h3>
						<h4>
							Future You is feeling <i> {roomTypes[roomType].avatarEmotion}</i>{" "}
						</h4>
						<div>
							<h3>
								{roomTypes[roomType].emotes.map((item) => {
									return item;
								})}
							</h3>
						</div>
					</div>
					<div class="fixed-header-spacer"></div>
					<CurrentAvatar size={400} />
					<QuickActions />
				</div>
			</div>
		</main>
	);
}
