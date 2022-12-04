import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../providers/Provider";
import roomTypes from "../../avatar-state/room.js";
export default function Room({}) {
	const { roomType, setRoomType } = useContext(Context);
	const myLoader = ({ src, width, quality }) => {
		return src;
	};
	let size = 700;

	return (
		<div id="room">
			<h4 className="title">Your House - circa 2078</h4>
			<Image
				className="picture"
				src={roomTypes[roomType].file}
				loader={myLoader}
				style={{ height: size, width: size }}
				height={size}
				width={size * 1.25}
			/>
		</div>
	);
}
