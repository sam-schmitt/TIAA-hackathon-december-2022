import { useMemo, useState } from "react";

const AllData = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [hairType, setHairType] = useState(0);
	const [pantsType, setPantsType] = useState(0);
	const [shirtType, setShirtType] = useState(0);
	const [shoeType, setShoeType] = useState(0);
	const [skinType, setSkinType] = useState(0);
	const [roomType, setRoomType] = useState(0);

	const provider = useMemo(
		() => ({
			loggedIn,
			setLoggedIn,
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
			roomType,
			setRoomType,
		}),
		[
			loggedIn,
			setLoggedIn,
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
			roomType,
			setRoomType,
		]
	);
	return provider;
};

export default AllData;
