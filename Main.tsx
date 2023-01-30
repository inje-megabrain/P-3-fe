import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Login from "./src/screens/LoginScreen";
// import Home from "./src/screens/HomeScreen";
// import SignUp from "./src/screens/SignupScreen";
// import { RootStackParamList } from "./src/types";
// import SplashScreen from "./src/screens/SplashScreen";
import AppNavigator from "./src/navigator/AppNavigator";

function Main() {
	return (
		<NavigationContainer>
			<AppNavigator />
			{/* <Stack.Navigator initialRouteName="Splash">
				<Stack.Screen
					name="Splash"
					component={SplashScreen}
					options={{ title: "Splash" }}
				/>
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
			</Stack.Navigator> */}
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

export default Main;
