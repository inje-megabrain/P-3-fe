import React, { useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SignParamList } from "../types/SignParamList";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: black;
`;

type Props = NativeStackScreenProps<SignParamList, "Splash">;

const SplashScreen = ({ navigation }: Props) => {
	useEffect(() => {
		setTimeout(() => {
			handleGetToken();
		}, 2000);
	}, []);

	const handleGetToken = async () => {
		const token = await AsyncStorage.getItem("AccessToken");
		console.log(token);
		if (!token) {
			console.log("if");
			navigation.replace("Login");
		} else if (token) {
			console.log("else if");
			navigation.replace("Home");
		} else {
			console.log("else");
		}
	};
	return (
		<Container>
			<Text>SplashScreen</Text>
		</Container>
	);
};

export default SplashScreen;
