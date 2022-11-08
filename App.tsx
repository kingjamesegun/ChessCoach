import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="HomeScreen">
					<Drawer.Screen name="HomeScreen" component={HomeScreen} />
					<Drawer.Screen name="Screen" component={HomeScreen} />
				</Drawer.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingVertical: 40,
		paddingHorizontal: 20,
	},
	textStylesh: {
		fontSize: 23,
	},
});
