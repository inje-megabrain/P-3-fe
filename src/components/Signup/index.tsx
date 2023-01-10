import React from "react";
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
	return (
		<Container>
			<FormContainer>
				<Input style={{ marginBottom: 16 }} placeholder="NickName" />
				<Input style={{ marginBottom: 16 }} placeholder="ID" />
				<Input
					style={{ marginBottom: 16 }}
					placeholder="PASSWORD"
					secureTextEntry={true}
				/>
				<Button
					style={{ marginBottom: 24 }}
					label="SignUp"
					onPress={() => {
						signup("닉네임", "이름", "123123");
						console.log("회원가입을 해보쟈");
					}}
				/>
			</FormContainer>
		</Container>
	);
};

export default SignUp;
