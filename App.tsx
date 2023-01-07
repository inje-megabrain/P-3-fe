import { StatusBar } from "expo-status-bar";
import //StyleSheet,
// Text,
// TextInput,
// TouchableOpacity,
//View,
"react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login";
import Home from "./src/components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		// <NavigationContainer>
		//   <Stack.Navigator>
		//     <Stack.Screen name="Home" component={HomeScreen} />
		//   </Stack.Navigator>
		// </NavigationContainer>
		<NavigationContainer>
			{/* <View style={styles.container}>
				<Text style={styles.main}>P-3 Project {":)"}</Text>
				<TouchableOpacity>
					<Text>안뇽</Text>
				</TouchableOpacity>
				<TextInput
					style={{ width: "80%", backgroundColor: "blue" }}
				></TextInput> 
        </View>*/}
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: "Home" }}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ title: "로그인" }}
				/>
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// 	main: {
// 		fontSize: 20,
// 	},
// });
