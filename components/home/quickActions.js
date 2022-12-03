import React from "react";
import { useRouter } from "next/router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
export default function QuickActions() {
	const router = useRouter();
	const actions = [
		{
			title: "Upgrade Your Retirement",
			description:
				"Dolore amet nisi consectetur consequat adipisicing ut reprehenderit et anim. Sint culpa do voluptate ullamco nostrud ut. Reprehenderit proident laboris ullamco mollit aute proident est aute voluptate esse velit exercitation. Magna velit aute.",
			icon: <AutoAwesomeIcon />,
			url: "/upgrade",
		},
		{
			title: "Upgrade Your Retirement",
			description:
				"Dolore amet nisi consectetur consequat adipisicing ut reprehenderit et anim. Sint culpa do voluptate ullamco nostrud ut. Reprehenderit proident laboris ullamco mollit aute proident est aute voluptate esse velit exercitation. Magna velit aute.",
			icon: <AutoAwesomeIcon />,
			url: "/upgrade",
		},
		{
			title: "Upgrade Your Retirement",
			description:
				"Dolore amet nisi consectetur consequat adipisicing ut reprehenderit et anim. Sint culpa do voluptate ullamco nostrud ut. Reprehenderit proident laboris ullamco mollit aute proident est aute voluptate esse velit exercitation. Magna velit aute.",
			icon: <AutoAwesomeIcon />,
			url: "/upgrade",
		},
	];
	return (
		<div>
			{actions.map((item) => {
				return (
					<div
						className="action-card card"
						onClick={() => router.push(item.url)}>
						<div className="header">
							<h3>{item.title}</h3>
							<ArrowForwardIcon />
						</div>
						<p>{item.description}</p>
						<div className="icon">{item.icon}</div>
						<button className="link">Learn More</button>
					</div>
				);
			})}
		</div>
	);
}
