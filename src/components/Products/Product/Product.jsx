import React from "react";
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

export default function Product({ product }) {
	const classes = useStyles();
	console.log(product);

	// return <div>test</div>;

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={product.image.url}
				title={product.name}
			/>
			<CardContent>
				<div className={classes.cardContent}>
					<Typography variant="h5" gutterBottom>
						{product.name}
					</Typography>
					<Typography variant="h5">
						{product.price.formatted_with_symbol}
					</Typography>
				</div>
				<div className={classes.cardContent}>
					<Typography variant="body2" color="secondary">
						{product.description}
					</Typography>
				</div>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}>
				<IconButton area-label="Add to Cart">
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
}
