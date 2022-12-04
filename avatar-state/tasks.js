import HouseIcon from "@mui/icons-material/House";
import AddReactionIcon from "@mui/icons-material/AddReaction";
const tasks = [
	{
		id: 0,
		image: "../learn-images/learn3.jpeg",
		title: "What can you do for your retirement?",
		description: "It's important to get started early!",
		rewards: [
			{ label: "New Room!", icon: <HouseIcon /> },
			{ label: "Make You Happy", icon: <AddReactionIcon /> },
		],
	},
	{
		id: 1,
		image: "../learn-images/learn2.jpeg",
		title: "What does TIAA has available for you?",
		description: "From investment opportunities, securing your future.",
		rewards: [
			{ label: "New Room!", icon: <HouseIcon /> },
			{ label: "Make You Happy", icon: <AddReactionIcon /> },
		],
	},
];

export default tasks;
