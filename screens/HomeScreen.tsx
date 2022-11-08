import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalColor } from "../constants/Colors";
import BookCard from "../components/BookCard";

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.bookContainer}>
				<View style={styles.bookCard}>
					<BookCard />
				</View>
			</View>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: GlobalColor.primaryWhite,
		paddingHorizontal: 5,
	},
	bookContainer: {
		flexDirection: "row",
	},
	bookCard: {
		width: "50%",
		height: 250,
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
});
