import React from "react";
import {
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavLink } from "react-router-dom";

const mainMenus = [
	{ title: "Dashboard", path: "/", icon: <DashboardIcon color="primary" /> },
	{
		title: "Expense",
		path: "/expense",
		icon: <AllInboxIcon color="primary" />,
	},
	{
		title: "Income",
		path: "/income",
		icon: <AllInboxIcon color="primary" />,
	},
	{
		title: "Category",
		path: "/category",
		icon: <AllInboxIcon color="primary" />,
	},
	{ title: "Label", path: "/label", icon: <AllInboxIcon color="primary" /> },
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
					<Link
						component={NavLink}
						underline="none"
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
					</Link>
				))}
			</List>
		</>
	);
};

export default MenuList;
