import React, { useState } from "react";
import styled from "styled-components/native";
import signup from "../../apis/signup";
import Button from "../Button";
import Input from "../Input";
import { Text } from "react-native";

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

	const [nickMsg, setNickMsg] = useState("");
	const [nameMsg, setNameMsg] = useState("");
	const [pwMsg, setPwMsg] = useState("");

	const onChangeNick = (text: string) => {
		if (text.length < 2 || text.length > 5) {
			setNickMsg("2~5글자로 입력");
		} else {
			setNickMsg("");
		}
		setNickname(text);
	};

	const onChangeName = (text: string) => {
		if (text.length < 2 || text.length > 5) {
			setNameMsg("2~5글자로 입력");
		} else {
			setNameMsg("");
		}
		setUsername(text);
	};

	const onChangePw = (text: string) => {
		const passwordRegex =
			/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,25}$/;
		if (!passwordRegex.test(text)) {
			setPwMsg("숫자, 영문자, 특수문자 조합으로 6자 이상 입력");
		} else {
			setPwMsg("");
		}
		setPassword(text);
	};

	return (
		<Container>
			<FormContainer>
				<Input
					style={{ marginBottom: 8 }}
					placeholder="NickName"
					value={nickname}
					onChangeText={onChangeNick}
				/>
				<Text style={{ color: "white", marginBottom: 8 }}>{nickMsg}</Text>
				<Input
					style={{ marginBottom: 8 }}
					placeholder="ID"
					value={username}
					onChangeText={onChangeName}
				/>
				<Text style={{ color: "white", marginBottom: 8 }}>{nameMsg}</Text>
				<Input
					style={{ marginBottom: 8 }}
					placeholder="PASSWORD"
					secureTextEntry={true}
					value={password}
					onChangeText={onChangePw}
				/>
				<Text style={{ color: "white", marginBottom: 8 }}>{pwMsg}</Text>
				<Button
					style={{ marginBottom: 24 }}
					label="SignUp"
					onPress={() => {
						signup(nickname, username, password);
						//console.log(nickname, username, password);
						console.log("회원가입을 해보쟈");
					}}
				/>
			</FormContainer>
		</Container>
	);
};

export default SignUp;
