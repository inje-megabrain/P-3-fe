import React from "react";
import { View, Text } from "react-native";
//import { TouchableOpacity } from "react-native";
import Button from "../Button";
//import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation, route }: Props) => {
	//const navigation = useNavigation();
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			{/* <TouchableOpacity
				onPress={() => navigation.navigate("Login", { name: route.name })}
			>
				<Text>로그인</Text>
			</TouchableOpacity> */}
			<Button
				label="Login"
				style={{ backgroundColor: "pink", width: "50%" }}
				onPress={() =>
					navigation.navigate("Login", { name: route.name, userId: "User" })
				}
			></Button>
		</View>
	);
};

export default Home;
