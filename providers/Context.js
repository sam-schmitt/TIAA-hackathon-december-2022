import { useMemo, useState } from "react";

const AllData = () => {
	const [hairType, setHairType] = useState(0);
	const [pantsType, setPantsType] = useState(0);
	const [shirtType, setShirtType] = useState(0);
	const [shoeType, setShoeType] = useState(0);
	const [skinType, setSkinType] = useState(0);

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
