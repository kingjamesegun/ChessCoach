import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { GlobalColor } from "../constants/Colors";

const BookCard = () => {
	const ChessImage = require("../assets/chess.png");
	return (
		<View style={styles.container}>
			<ImageBackground
				source={ChessImage}
				resizeMode="cover"
				style={styles.image}
			>
				<Text style={styles.title}>BookCarhhhfbb</Text>
				<View style={styles.details}>
					<Text style={styles.detailsText}>5Lessons</Text>
					<Text style={styles.detailsText}>8mins Read</Text>
				</View>
			</ImageBackground>
		</View>
	);
};

export default BookCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: GlobalColor.primaryWhite,
		position: "relative",
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		color: GlobalColor.primaryWhite,
	},
	details: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "space-between",
		position: "absolute",
		bottom: 10,
		marginHorizontal: 10,
	},
	detailsText: {
		color: GlobalColor.primaryWhite,
		fontSize: 12,
	},
	image: {
		flex: 1,
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
});
