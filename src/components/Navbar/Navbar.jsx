import React from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	MenuItem,
	Menu,
	Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import useStyles from "./styles";

export default function Navbar() {
	const classes = useStyles();
	return (
		<AppBar position="fixed" className={classes.appBar} color="inherit">
			<Toolbar>
				<Typography variant="h6" className={classes.title} color="inherit">
					<img
						src={logo}
						alt="Vila Commerce"
						height="25px"
						className={classes.image}
					/>
					Vila Commerce
				</Typography>
				<div className={classes.grow} />
				<div className={classes.button}>
					<IconButton aria-label="Show cart items" color="inherit">
						<Badge badgeContent={2} color="secondary">
							<ShoppingCart />
						</Badge>
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	);
}
