import Head from "next/head";
import { useContext, useState } from "react";
import hairTypes from "../avatar-state/hair";
import pantsTypes from "../avatar-state/pants";
import shirtTypes from "../avatar-state/shirt";
import shoeTypes from "../avatar-state/shoes";
import skinTypes from "../avatar-state/skin";
import { Context } from "../providers/Provider";

export default function EditAvatar() {
	const {
		skinType,
		setSkinType,
		hairType,
		setHairType,
		shirtType,
		setShirtType,
		pantsType,
		setPantsType,
		shoeType,
		setShoeType,
	} = useContext(Context);

	return (
		<div>
			<Head>
				<title>Youture</title>
				<meta
					name='description'
					content='Learn about how to make your retirement fund better by visualizing your future self!'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>Create Avatar</h1>
			<h2>Skin</h2>
			<p>Your skin: {skinTypes[skinType].name}</p>
			{skinTypes.map(function (item, index) {
				return (
					<button
						onClick={() => {
							setSkinType(index);
						}}
					>
						{item.name}
					</button>
				);
			})}
			<h2>Hair</h2>
			<p>Your hair: {hairTypes[hairType].name}</p>
			{hairTypes.map(function (item, index) {
				return (
					<button
						onClick={() => {
							setHairType(index);
						}}
					>
						{item.name}
					</button>
				);
			})}
			<h2>Shirt</h2>
			<p>Your shirt: {shirtTypes[shirtType].name}</p>
			{shirtTypes.map(function (item, index) {
				return (
					<button
						onClick={() => {
							setShirtType(index);
						}}
					>
						{item.name}
					</button>
				);
			})}
			<h2>Pants</h2>
			<p>Your pants: {pantsTypes[pantsType].name}</p>
			{pantsTypes.map(function (item, index) {
				return (
					<button
						onClick={() => {
							setPantsType(index);
						}}
					>
						{item.name}
					</button>
				);
			})}
			<h2>Shoes</h2>
			<p>Your shoes: {shoeTypes[shoeType].name}</p>
			{shoeTypes.map(function (item, index) {
				return (
					<button
						onClick={() => {
							setShoeType(index);
						}}
					>
						{item.name}
					</button>
				);
			})}
		</div>
	);
}
