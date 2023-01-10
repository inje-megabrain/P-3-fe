import React from "react";
//import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Login from "./src/components/Login";
// import Home from "./src/components/Home";
// import { RootStackParamList } from "./src/components/types";
import { RecoilRoot } from "recoil";
import Main from "./src/components/main";

//const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<RecoilRoot>
			<Main />
		</RecoilRoot>
	);
}
