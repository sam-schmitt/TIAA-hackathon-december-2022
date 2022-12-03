import React, { useContext } from "react";
import { Context } from "../providers/Provider";

export default function CurrentAvatar() {
	const { skinType, hairType, shirtType, pantsType, shoeType } =
		useContext(Context);
	return (
		<div>
			<p>Your Hair: {hairType}</p>
			<p>Your Skin: {skinType}</p>
			<p>Your Shirt: {shirtType}</p>
			<p>Your Pants: {pantsType}</p>
			<p>Your Shoes: {shoeType}</p>
		</div>
	);
}
