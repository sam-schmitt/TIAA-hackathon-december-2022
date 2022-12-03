import { useRouter } from "next/router";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
export default function Header({}) {
	const router = useRouter();
	const links = [
		{
			text: "Home",
			url: "/",
		},
		{
			text: "Tasks",
			url: "/tasks",
		},
		{
			text: "Learn",
			url: "/learn",
		},
	];
	return (
		<div id="page-header">
			<div className="logo"></div>
			<nav>
				{links.map((item) => {
					return (
						<button onClick={() => router.push(item.url)}>{item.text}</button>
					);
				})}
			</nav>
			<div className="user" onClick={() => router.push("/settings")}>
				Hi Name
				<div class="avatar">
					<SettingsIcon />
				</div>
			</div>
		</div>
	);
}
