import React from "react";

export default function Header({}) {
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
		<div className="header">
			<div className="logo"></div>
			<nav>
				{links.map((item) => {
					return <a href={item.url}>{item.text}</a>;
				})}
			</nav>
			<div className="user">
				Hi Name
				<div class="avatar"></div>
			</div>
		</div>
	);
}
