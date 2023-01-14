import React, { useState } from "react";
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import styled from "styled-components/native";
import Input from "../Input";
import Button from "../Button";
import authState, { IAuthTypes } from "../../recoil/auth";
import { useRecoilState } from "recoil";
import login from "../../apis/login";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: Props) => {
	//const { name, userId } = route.params;

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [nameMsg, setNameMsg] = useState("");
	const [pwMsg, setPwMsg] = useState("");

	const [auth, setAuth] = useRecoilState<IAuthTypes[]>(authState);

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
					label="Login"
					onPress={() => {
						setAuth([{ email: username, password: password }]);
						login(password, username).then((v: any) => {
							if (v.status == 200) {
								//console.log(v.data.token);
								AsyncStorage.setItem("AccessToken", v.data.token); // 토큰 저장
								navigation.navigate("Home");
							}
						});
						console.log("로그인!");
					}}
				/>
				<PasswordContainer
					onPress={() => {
						console.log("비밀번호 찾기");
						console.log(auth);
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
