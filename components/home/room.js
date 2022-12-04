import React from "react";
import Image from "next/image";
import worst_room from "../../public/room-pictures/worst_room.png";
import middle_room from "../../public/room-pictures/middle_room.png";
import best_room from "../../public/room-pictures/best_room.png";
import { useContext } from "react";
import { Context } from "../../providers/Provider";
import roomTypes from "../../avatar-state/room.js";
export default function Room({}) {
	const { roomType, setRoomType } = useContext(Context);
	const myLoader = ({ src, width, quality }) => {
		return src;
	};
	let size = 400;

	return (
		<div className="room" id="room-container">
			<Image
				src={roomTypes[roomType].file}
				loader={myLoader}
				fill
				objectFit="cover"
			/>
		</div>
	);
}
