import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import tasks from "../../avatar-state/tasks";
import { Context } from "../../providers/Provider";
import roomTypes from "../../avatar-state/room";
import Image from "next/image";
import { Checkbox } from "@chakra-ui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
			<div class="header">
				<h4>It's not too late to help your future self!</h4>
				<h4>Learn How</h4>
				<KeyboardArrowDownIcon fontSize="large" />
			</div>
			{tasks.map((item, index) => {
				return (
					<div className="action-card card">
						<div class="img-wrapper">
							<div>
								<Image
									loader={myLoader}
									src={item.image}
									width={200}
									height={200}
									quality={70}
								/>
							</div>
						</div>
						<div class="content">
							<div className="header">
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</div>
							<div class="stats">
								<button
									class="primary"
									onClick={() => {
										incRoom(index);
									}}
									disabled={completed.includes(index)}>
									Let's Go
								</button>
								<div class="reward">
									<Checkbox isChecked={completed.includes(index)} />
									<h6>{completed.includes(index) ? "Done!" : "Todo"}</h6>
								</div>
								{item.rewards.map(function (item, idx) {
									return (
										<div className="reward">
											{item.icon}
											<h6>{item.label}</h6>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
