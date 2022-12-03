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
			<p>Your skin: {skinType}</p>
			{skinTypes.map(function (item, index) {
				return (
					<button
						onClick={() => {
							setSkinType(item.name);
						}}
					>
						{item.name}
					</button>
				);
			})}
			<h2>Hair</h2>
			<p>Your hair: {hairType}</p>
			{hairTypes.map(function (item, index) {
				return (
					<button
						onClick={() => {
							setHairType(item.name);
						}}
					>
						{item.name}
					</button>
				);
			})}
			<h2>Shirt</h2>
			<p>Your shirt: {shirtType}</p>
			{shirtTypes.map(function (item, index) {
				return (
					<button
						onClick={() => {
							setShirtType(item.name);
						}}
					>
						{item.name}
					</button>
				);
			})}
			<h2>Pants</h2>
			<p>Your pants: {pantsType}</p>
			{pantsTypes.map(function (item, index) {
				return (
					<button
						onClick={() => {
							setPantsType(item.name);
						}}
					>
						{item.name}
					</button>
				);
			})}
			<h2>Shoes</h2>
			<p>Your shoes: {shoeType}</p>
			{shoeTypes.map(function (item, index) {
				return (
					<button
						onClick={() => {
							setShoeType(item.name);
						}}
					>
						{item.name}
					</button>
				);
			})}
		</div>
	);
}
