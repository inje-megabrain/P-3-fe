import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.main}>P-3 Project {":)"}</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	main: {
		fontSize: 20,
	},
});
