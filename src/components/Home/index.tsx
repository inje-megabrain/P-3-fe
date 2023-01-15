import React from "react";
import { View, Text } from "react-native";
//import { TouchableOpacity } from "react-native";
import Button from "../Button";
//import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation, route }: Props) => {
	//const navigation = useNavigation();
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>P-3 Project {"\n"}</Text>
			{/* <TouchableOpacity
				onPress={() => navigation.navigate("Login", { name: route.name })}
			>
				<Text>로그인</Text>
			</TouchableOpacity> */}
			<Button
				label="Login"
				style={{ backgroundColor: "pink", width: "50%" }}
				onPress={() => {
					navigation.navigate("Login", { name: route.name, userId: "User" });
				}}
			/>
			<Button
				label="SignUp"
				style={{ backgroundColor: "pink", width: "50%" }}
				onPress={() => {
					navigation.navigate("SignUp", {
						name: route.name,
						userId: "User",
						password: "123123",
					});
				}}
			/>
			<Button
				label="Logout"
				style={{ backgroundColor: "pink", width: "50%" }}
				onPress={() => {
					AsyncStorage.removeItem("AccessToken");
					console.log("로그아웃 (토큰 삭제)");
					navigation.navigate("Splash");
				}}
			/>
		</View>
	);
};

export default Home;
