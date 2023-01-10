import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Home from "./Home";
import { RootStackParamList } from "./types";
import SignUp from "./Signup";

const Stack = createNativeStackNavigator<RootStackParamList>();
function Main() {
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
					initialParams={{ name: "Login", userId: "User" }}
					options={{ title: "로그인" }}
				/>
				<Stack.Screen
					name="SignUp"
					component={SignUp}
					options={{ title: "회원가입" }}
				/>
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

export default Main;
