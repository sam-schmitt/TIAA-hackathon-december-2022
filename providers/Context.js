import { useMemo, useState } from "react";

const AllData = () => {
	//important
	const [loggedIn, setLoggedIn] = useState(false);

	//types
	const [hairType, setHairType] = useState(0);
	const [pantsType, setPantsType] = useState(0);
	const [shirtType, setShirtType] = useState(0);
	const [shoeType, setShoeType] = useState(0);
	const [skinType, setSkinType] = useState(0);
	const [roomType, setRoomType] = useState(0);

	//user info
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [hasTIAA, setHasTIAA] = useState(null);
	const [startedPlanning, setStartedPlanning] = useState(null);

	const provider = useMemo(
		() => ({
			// important
			loggedIn,
			setLoggedIn,
			// types
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
			// user info
			name,
			setName,
			email,
			setEmail,
			hasTIAA,
			setHasTIAA,
			startedPlanning,
			setStartedPlanning,
		}),
		[
			// important
			loggedIn,
			setLoggedIn,
			// types
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
			// user info
			name,
			setName,
			email,
			setEmail,
			hasTIAA,
			setHasTIAA,
			startedPlanning,
			setStartedPlanning,
		]
	);
	return provider;
};

export default AllData;
