import Image from "next/image";
import React, { useContext } from "react";
import hairTypes from "../avatar-state/hair";
import pantsTypes from "../avatar-state/pants";
import shirtTypes from "../avatar-state/shirt";
import shoeTypes from "../avatar-state/shoes";
import skinTypes from "../avatar-state/skin";
import { Context } from "../providers/Provider";
import eyes from "../public/avatar-images/eyes_and_mouth.png";
import cane from "../public/avatar-images/cane.png";
export default function CurrentAvatar({ size }) {
	const { skinType, hairType, shirtType, pantsType, shoeType } =
		useContext(Context);
	const myLoader = ({ src, width, quality }) => {
		return src;
	};

	return (
		<div className="avatar">
			{/* <p>Your Hair: {hairTypes[hairType].name}</p> */}
			<Image
				loader={myLoader}
				src={hairTypes[hairType].file}
				style={{ height: size, width: size }}
				width={size}
				height={size}
			/>
			{/* <p>Your Skin: {skinTypes[skinType].name}</p> */}
			<Image
				loader={myLoader}
				src={skinTypes[skinType].file}
				style={{ height: size, width: size }}
				width={size}
				height={size}
			/>
			<Image
				loader={myLoader}
				src={eyes}
				style={{ height: size, width: size }}
				width={size}
				height={size}
			/>
			<Image
				loader={myLoader}
				src={cane}
				style={{ height: size, width: size }}
				width={size}
				height={size}
			/>

			{/* <p>Your Shirt: {shirtTypes[shirtType].name}</p> */}
			<Image
				loader={myLoader}
				src={shirtTypes[shirtType].file}
				style={{ height: size, width: size }}
				width={size}
				height={size}
			/>
			{/* <p>Your Pants: {pantsTypes[pantsType].name}</p> */}
			<Image
				loader={myLoader}
				src={pantsTypes[pantsType].file}
				style={{ height: size, width: size }}
				width={size}
				height={size}
			/>
			{/* <p>Your Shoes: {shoeTypes[shoeType].name}</p> */}
			<Image
				loader={myLoader}
				src={shoeTypes[shoeType].file}
				style={{ height: size, width: size }}
				width={size}
				height={size}
			/>
		</div>
	);
}
