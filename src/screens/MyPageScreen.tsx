import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MyPageParamList } from "../types/MyPageParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<MyPageParamList, "MyPage">;

const MyPageScreen = ({ navigation }: Props) => {
	return (
		<SafeAreaView>
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
						navigation.navigate("Login");
					}}
				/>
				<Button
					label="SignUp"
					style={{ backgroundColor: "pink", width: "50%" }}
					onPress={() => {
						navigation.navigate("SignUp");
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
		</SafeAreaView>
	);
};

export default MyPageScreen;
