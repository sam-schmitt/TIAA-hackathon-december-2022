import Head from "next/head";
import { useContext, useState } from "react";
import hairTypes from "../../avatar-state/hair";
import pantsTypes from "../../avatar-state/pants";
import shirtTypes from "../../avatar-state/shirt";
import shoeTypes from "../../avatar-state/shoes";
import skinTypes from "../../avatar-state/skin";
import CurrentAvatar from "./avatar";
import { Context } from "../../providers/Provider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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

	function handleIncrease(value, max) {
		if (value === max) {
			return 0;
		} else {
			return value + 1;
		}
	}
	function handleDecrease(value, max) {
		if (value === 0) {
			return max;
		} else {
			return value - 1;
		}
	}
	return (
		<div className="create-avatar-wrapper">
			<div className="content">
				<div className="header">
					<h3>Create Your Avatar!</h3>
					<h5>Remember, saving for retirement is paying your future self</h5>
				</div>
				<div class="create-avatar">
					<CurrentAvatar size={300} />
					<div class="edit-container" style={{ height: 300 }}>
						<div class="row">
							<button
								onClick={() => {
									setHairType(handleDecrease(hairType, hairTypes.length - 1));
								}}>
								<ArrowBackIosIcon />
							</button>
							<button
								onClick={() => {
									setHairType(handleIncrease(hairType, hairTypes.length - 1));
								}}>
								<ArrowForwardIosIcon />
							</button>
							<p className="description">Hair Style</p>
						</div>
						<div class="row">
							<button
								onClick={() => {
									setSkinType(handleDecrease(skinType, skinTypes.length - 1));
								}}>
								<ArrowBackIosIcon />
							</button>
							<button
								onClick={() => {
									setSkinType(handleIncrease(skinType, skinTypes.length - 1));
								}}>
								<ArrowForwardIosIcon />
							</button>
							<p className="description">Skin Color</p>
						</div>
						<div class="row">
							<button
								onClick={() => {
									setShirtType(
										handleDecrease(shirtType, shirtTypes.length - 1)
									);
								}}>
								<ArrowBackIosIcon />
							</button>
							<button
								onClick={() => {
									setShirtType(
										handleDecrease(shirtType, shirtTypes.length - 1)
									);
								}}>
								<ArrowForwardIosIcon />
							</button>
							<p class="description">Shirt Color</p>
						</div>
						<div class="row"></div>
						<div className="row">
							<button
								onClick={() => {
									setPantsType(
										handleDecrease(pantsType, pantsTypes.length - 1)
									);
								}}>
								<ArrowBackIosIcon />
							</button>
							<button
								onClick={() => {
									setPantsType(
										handleDecrease(pantsType, pantsTypes.length - 1)
									);
								}}>
								<ArrowForwardIosIcon />
							</button>
							<p class="description">Pants Color</p>
						</div>
						<div className="row">
							<button
								onClick={() => {
									setShoeType(handleDecrease(shoeType, shoeTypes.length - 1));
								}}>
								<ArrowBackIosIcon />
							</button>
							<button
								onClick={() => {
									setShoeType(handleDecrease(shoeType, shoeTypes.length - 1));
								}}>
								<ArrowForwardIosIcon />
							</button>
							<p class="description">Shoe Color</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
