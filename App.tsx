import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login";
import Home from "./src/components/Home";
import { RootStackParamList } from "./src/components/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: "Home" }}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					initialParams={{ name: "Login", userId: "Narin" }}
					options={{ title: "로그인" }}
				/>
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
