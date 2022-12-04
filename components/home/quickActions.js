import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import tasks from "../../avatar-state/tasks";
import { Context } from "../../providers/Provider";
import roomTypes from "../../avatar-state/room";
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

	return (
		<div className="quick-actions">
			{tasks.map((item, index) => {
				return (
					<div className="action-card card">
						<div className="header">
							<h3>{item.title}</h3>
							{/* <ArrowForwardIcon /> */}
						</div>
						<p>{item.description}</p>
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
						<p>Completed: {completed.includes(index).toString()}</p>
						{item.rewards.map(function (reward, idx) {
							return <div>{reward}</div>;
						})}
					</div>
				);
			})}
		</div>
	);
}
