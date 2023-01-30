import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import { SignParamList } from "../types/SignParamList";

const Stack = createNativeStackNavigator<SignParamList>();

export default function SignNavigator() {
	return (
		<Stack.Navigator initialRouteName="Splash">
			<Stack.Screen name="Splash" component={SplashScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="SignUp" component={SignUpScreen} />
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
}
