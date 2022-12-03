import Image from "next/image";
import React, { useContext, useEffect } from "react";
import hairTypes from "../avatar-state/hair";
import pantsTypes from "../avatar-state/pants";
import shirtTypes from "../avatar-state/shirt";
import shoeTypes from "../avatar-state/shoes";
import skinTypes from "../avatar-state/skin";
import { Context } from "../providers/Provider";

export default function CurrentAvatar() {
	const { skinType, hairType, shirtType, pantsType, shoeType } =
		useContext(Context);
	const myLoader = ({ src, width, quality }) => {
		return src;
	};

	useEffect(() => {
		console.log({ p: window.location.pathname });
	});
	return (
		<div>
			<p>Your Hair: {hairTypes[hairType].name}</p>
			<Image
				loader={myLoader}
				src={hairTypes[hairType].file}
				style={{ height: 100, width: 100 }}
				width={100}
				height={100}
			/>
			<p>Your Skin: {skinTypes[skinType].name}</p>
			<Image
				loader={myLoader}
				src={skinTypes[skinType].file}
				style={{ height: 100, width: 100 }}
				width={100}
				height={100}
			/>
			<p>Your Shirt: {shirtTypes[shirtType].name}</p>
			<Image
				loader={myLoader}
				src={shirtTypes[shirtType].file}
				style={{ height: 100, width: 100 }}
				width={100}
				height={100}
			/>
			<p>Your Pants: {pantsTypes[pantsType].name}</p>
			<Image
				loader={myLoader}
				src={pantsTypes[pantsType].file}
				style={{ height: 100, width: 100 }}
				width={100}
				height={100}
			/>
			<p>Your Shoes: {shoeTypes[shoeType].name}</p>
			<Image
				loader={myLoader}
				src={shoeTypes[shoeType].file}
				style={{ height: 100, width: 100 }}
				width={100}
				height={100}
			/>
		</div>
	);
}
