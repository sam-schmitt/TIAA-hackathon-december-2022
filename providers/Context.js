import { useMemo, useState } from "react";

const AllData = () => {
	const [hairType, setHairType] = useState("");
	const [pantsType, setPantsType] = useState("");
	const [shirtType, setShirtType] = useState("");
	const [shoeType, setShoeType] = useState("");
	const [skinType, setSkinType] = useState("");

	const provider = useMemo(
		() => ({
			hairType,
			setHairType,
			pantsType,
			setPantsType,
			shirtType,
			setShirtType,
			shoeType,
			setShoeType,
			skinType,
			setSkinType,
		}),
		[
			hairType,
			setHairType,
			pantsType,
			setPantsType,
			shirtType,
			setShirtType,
			shoeType,
			setShoeType,
			skinType,
			setSkinType,
		]
	);
	return provider;
};

export default AllData;
