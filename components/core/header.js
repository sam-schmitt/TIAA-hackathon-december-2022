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
	Image,
} from "@chakra-ui/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext } from "react";
import { Context } from "../../providers/Provider";
export default function Header({}) {
	const { loggedIn, setLoggedIn, name, setName } = useContext(Context);
	const router = useRouter();

	return (
		<div id="page-header">
			<button className="logo" onClick={() => router.push("/")}>
				<Image src={"../logo.png"} height={30} /> <h3>| Future You</h3>
			</button>
			{/* <nav>
				{links.map((item) => {
					return (
						<button onClick={() => router.push(item.url)}>{item.text}</button>
					);
				})}
			</nav> */}

			{loggedIn ? (
				<div class="user">
					<Menu>
						<MenuButton rightIcon={<ExpandMoreIcon />}>Hey {name}</MenuButton>
						<MenuList className="menu-list">
							<MenuItem>
								<button
									onClick={() => {
										router.push("/onboarding/avatar");
									}}>
									Edit Avatar
								</button>
								<button
									onClick={() => {
										setLoggedIn(false);
										router.push("/");
									}}>
									Sign Out
								</button>
							</MenuItem>
						</MenuList>
					</Menu>
				</div>
			) : (
				<div className="button-group">
					<button
						className="primary"
						onClick={() => router.push("/onboarding")}>
						Sign Up
					</button>
					<button
						className="secondary"
						onClick={() => {
							setLoggedIn(true);
							setName("Johnny Doe");
							router.push("/");
						}}>
						Login
					</button>
				</div>
			)}
		</div>
	);
}
