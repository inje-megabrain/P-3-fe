import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList } from "../types/RootStackParamList";
import MyPageNavigator from "./MyPageNavigator";
import SignNavigator from "./SignNavigator";

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function AppNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="HomeNavigator"
		>
			<Tab.Screen
				name="HomeNavigator"
				options={{ tabBarLabel: "Home" }}
				component={HomeScreen}
			/>
			<Tab.Screen
				name="MyPageNavigator"
				options={{ tabBarLabel: "MyPage" }}
				component={MyPageNavigator}
			/>
			<Tab.Screen
				name="SignNavigator"
				options={{ tabBarLabel: "Sign" }}
				component={SignNavigator}
			/>
		</Tab.Navigator>
	);
}
