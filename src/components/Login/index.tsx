import React from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ route }: Props) => {
	const { name, userId } = route.params;
	return (
		<View>
			<Text>
				This is {userId} {"'"}s Login Screen! {name}
			</Text>
		</View>
	);
};

export default Login;
