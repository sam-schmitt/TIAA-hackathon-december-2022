import { useRouter } from "next/router";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	Button,
} from "@chakra-ui/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext } from "react";
import { Context } from "../../providers/Provider";
export default function Header({}) {
	const { loggedIn, setLoggedIn } = useContext(Context);
	const router = useRouter();

	return (
		<div id="page-header">
			<div className="logo"></div>
			{/* <nav>
				{links.map((item) => {
					return (
						<button onClick={() => router.push(item.url)}>{item.text}</button>
					);
				})}
			</nav> */}
			<button className="primary" onClick={() => setLoggedIn(!loggedIn)}>
				toggle login
			</button>
			<div class="user">
				<Menu>
					<MenuButton rightIcon={<ExpandMoreIcon />}>Hey name</MenuButton>
					<MenuList>
						<MenuItem>
							<button
								onClick={() => {
									router.push("/edit-avatar");
								}}>
								Edit Avatar
							</button>
						</MenuItem>
						<MenuItem>Create a Copy</MenuItem>
						<MenuItem>Mark as Draft</MenuItem>
						<MenuItem>Delete</MenuItem>
						<MenuItem>Attend a Workshop</MenuItem>
					</MenuList>
				</Menu>
			</div>
			{/* <div className="user" onClick={() => router.push("/settings")}>
				Hi Name
				<div class="avatar">
					<SettingsIcon />
				</div>
			</div> */}
		</div>
	);
}
