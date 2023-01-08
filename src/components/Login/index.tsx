import React from "react";
//import { View, Text } from "react-native";
//import { NativeStackScreenProps } from "@react-navigation/native-stack";
//import { RootStackParamList } from "../types";
import styled from "styled-components/native";
import Input from "../Input";
import Button from "../Button";

const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #141414;
	align-items: center;
	justify-content: center;
`;

const FormContainer = styled.View`
	width: 100%;
	padding: 40px;
`;

const PasswordContainer = styled.Text`
	width: 100%;
	font-size: 12px;
	color: #ffffff;
	text-align: center;
`;

//type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = () => {
	//const { name, userId } = route.params;
	return (
		<Container>
			<FormContainer>
				<Input style={{ marginBottom: 16 }} placeholder="ID" />
				<Input
					style={{ marginBottom: 16 }}
					placeholder="PASSWORD"
					secureTextEntry={true}
				/>
				<Button
					style={{ marginBottom: 24 }}
					label="Login"
					onPress={() => {
						console.log("버튼 눌렸다!");
					}}
				/>
				<PasswordContainer
					onPress={() => {
						console.log("비밀번호 찾기");
					}}
				>
					{" "}
					비밀번호 찾기{" "}
				</PasswordContainer>
			</FormContainer>
		</Container>
	);
};

export default Login;
