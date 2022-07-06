import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavLink } from "react-router-dom";

const mainMenus = [
	{ title: "Dashboard", path: "/", icon: <DashboardIcon /> },
	{ title: "Expense", path: "/expense", icon: <AllInboxIcon /> },
	{ title: "Income", path: "/income", icon: <AllInboxIcon /> },
	{ title: "Category", path: "/category", icon: <AllInboxIcon /> },
	{ title: "Label", path: "/label", icon: <AllInboxIcon /> },
];

const useStyles = makeStyles((theme) => ({
	activeItem: {
		color: theme.palette.primary.main,
	},
}));

const MenuList = () => {
	const classes = useStyles();

	return (
		<>
			<List>
				{mainMenus.map((menu) => (
					<NavLink
						className={(nav) =>
							nav.isActive ? classes.activeItem : ""
						}
						to={menu.path}
						key={`${menu.title}-menu`}
					>
						<ListItem button className="activeListItem">
							<ListItemIcon className="activeIcon">
								{menu.icon}
							</ListItemIcon>
							<ListItemText primary={menu.title} />
						</ListItem>
					</NavLink>
				))}
			</List>
		</>
	);
};

export default MenuList;
