import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyPageParamList } from "../types/MyPageParamList";
import MyPageScreen from "../screens/MyPageScreen";

const Stack = createNativeStackNavigator<MyPageParamList>();

export default function MyPageNavigator() {
	return (
		<Stack.Navigator initialRouteName="MyPage">
			<Stack.Screen name="MyPage" component={MyPageScreen} />
		</Stack.Navigator>
	);
}
