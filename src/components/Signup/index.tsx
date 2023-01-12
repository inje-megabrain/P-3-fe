import React, { useState } from "react";
import styled from "styled-components/native";
import signup from "../../apis/signup";
import Button from "../Button";
import Input from "../Input";

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

const SignUp = () => {
	const [nickname, setNickname] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onChangeNick = (text: string) => {
		setNickname(text);
	};

	const onChangeName = (text: string) => {
		setUsername(text);
	};

	const onChangePw = (text: string) => {
		setPassword(text);
	};

	return (
		<Container>
			<FormContainer>
				<Input
					style={{ marginBottom: 16 }}
					placeholder="NickName"
					value={nickname}
					onChangeText={onChangeNick}
				/>
				<Input
					style={{ marginBottom: 16 }}
					placeholder="ID"
					value={username}
					onChangeText={onChangeName}
				/>
				<Input
					style={{ marginBottom: 16 }}
					placeholder="PASSWORD"
					secureTextEntry={true}
					value={password}
					onChangeText={onChangePw}
				/>
				<Button
					style={{ marginBottom: 24 }}
					label="SignUp"
					onPress={() => {
						signup(nickname, username, password);
						console.log(nickname, username, password);
						console.log("회원가입을 해보쟈");
					}}
				/>
			</FormContainer>
		</Container>
	);
};

export default SignUp;
