import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Home({ navigation }: any) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<TouchableOpacity onPress={() => navigation.navigate("Login")}>
				<Text>로그인!!!!!</Text>
			</TouchableOpacity>
		</View>
	);
}

export default Home;
