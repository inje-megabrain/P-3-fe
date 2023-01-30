import React from "react";
import { View, Text } from "react-native";
//import { TouchableOpacity } from "react-native";
//import { useNavigation } from "@react-navigation/native";
// import Button from "../components/Button";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../types/RootStackParamList";
// import AsyncStorage from "@react-native-async-storage/async-storage";

//type Props = NativeStackScreenProps<RootStackParamList, "HomeNavigator">;

// const HomeScreen = ({ navigation }: Props) => {
const HomeScreen = () => {
	//const navigation = useNavigation();
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>P-3 Project {"\n"}</Text>
			{/* <TouchableOpacity
				onPress={() => navigation.navigate("Login", { name: route.name })}
			>
				<Text>로그인</Text>
			</TouchableOpacity> */}
		</View>
	);
};

export default HomeScreen;
