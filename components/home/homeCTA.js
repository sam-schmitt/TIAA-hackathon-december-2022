import React, { useContext } from "react";
import { Context } from "../../providers/Provider";
import roomTypes from "../../avatar-state/room.js";

export default function HomeCTA(params) {
	const { roomType, setRoomType } = useContext(Context);
	function incRoom() {
		if (roomType !== roomTypes.length - 1) {
			setRoomType(roomType + 1);
		} else {
		}
	}
	return (
		<div className="shadow-card">
			<h2>DO THIS NOW</h2>
			<p>{roomTypes[roomType].name}</p>

			<button class="primary" onClick={incRoom}>
				Ok, jeez I will
			</button>
		</div>
	);
}
