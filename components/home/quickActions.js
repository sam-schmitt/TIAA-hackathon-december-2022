import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import tasks from "../../avatar-state/tasks";
import { Context } from "../../providers/Provider";
import roomTypes from "../../avatar-state/room";
import Image from "next/image";
export default function QuickActions() {
	const router = useRouter();
	const { roomType, setRoomType } = useContext(Context);
	const [completed, setCompleted] = useState([]);
	function incRoom(index) {
		setCompleted([...completed, ...[index]]);
		if (roomType !== roomTypes.length - 1) {
			setRoomType(roomType + 1);
		} else {
		}
	}
	const myLoader = ({ src, width, quality }) => {
		return src;
	};
	return (
		<div className="quick-actions">
			<h2>Upgrade your Future You!</h2>
			{tasks.map((item, index) => {
				return (
					<div className="action-card card">
						<div class="img-wrapper">
							<div>
								<Image
									loader={myLoader}
									src={item.image}
									width={600}
									height={400}
									quality={70}
								/>
							</div>
						</div>
						<div class="content">
							<div className="header">
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</div>
							<button
								class="primary"
								onClick={() => {
									incRoom(index);
								}}
								disabled={completed.includes(index)}>
								<a
									style={{ color: "white", textDecoration: "none" }}
									target="_blank"
									href="http://localhost:3000/tiaa">
									Let's Go
								</a>
							</button>
							<div class="stats">
								<p>Completed: {completed.includes(index).toString()}</p>
								{item.rewards.map(function (reward, idx) {
									return <div>{reward}</div>;
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
