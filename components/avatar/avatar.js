import Image from "next/image";
import React, { useContext } from "react";
import hairTypes from "../../avatar-state/hair";
import pantsTypes from "../../avatar-state/pants";
import shirtTypes from "../../avatar-state/shirt";
import shoeTypes from "../../avatar-state/shoes";
import skinTypes from "../../avatar-state/skin";
import { Context } from "../../providers/Provider";
import eyes from "../../public/avatar-images/eyes_and_mouth.png";
import cane from "../../public/avatar-images/cane.png";
// import Particles from "react-particles-js";
export default function CurrentAvatar({ size }) {
	const { skinType, hairType, shirtType, pantsType, shoeType } =
		useContext(Context);
	const myLoader = ({ src, width, quality }) => {
		return src;
	};

	return (
		<div className="avatar" style={{ height: size, width: size }}>
			{/* <Particles
				params={{
					particles: {
						number: {
							value: 8,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						line_linked: {
							enable: false,
						},
						move: {
							speed: 1,
							out_mode: "out",
						},
						shape: {
							type: ["image", "circle"],
							image: [
								{
									src: "/react.cd2ab268.svg",
									height: 20,
									width: 23,
								},
								{
									src: "/k8s.2d579d24.svg",
									height: 20,
									width: 20,
								},
								{
									src: "/code.b3b4c4f4.png",
									height: 20,
									width: 20,
								},
							],
						},
						color: {
							value: "#CCC",
						},
						size: {
							value: 30,
							random: false,
							anim: {
								enable: true,
								speed: 4,
								size_min: 10,
								sync: false,
							},
						},
					},
					retina_detect: false,
				}}
			/> */}
			<Image
				loader={myLoader}
				src={hairTypes[hairType].file}
				style={{ height: size, width: size, zIndex: 20 }}
				width={size}
				height={size}
			/>
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
				style={{ height: size, width: size, zIndex: 100 }}
				width={size}
				height={size}
			/>
			<Image
				loader={myLoader}
				src={shirtTypes[shirtType].file}
				style={{ height: size, width: size }}
				width={size}
				height={size}
			/>
			<Image
				loader={myLoader}
				src={pantsTypes[pantsType].file}
				style={{ height: size, width: size }}
				width={size}
				height={size}
			/>
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
