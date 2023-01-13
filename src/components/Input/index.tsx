import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
	width: 100%;
	height: 40px;
	padding-left: 16px;
	padding-right: 16px;
	border-radius: 4px;
	background-color: #333333;
`;

const InputField = styled.TextInput`
	flex: 1;
	color: #ffffff;
`;

interface Props {
	placeholder: string;
	keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
	secureTextEntry?: boolean;
	style: object;
	clearMode?: boolean;
	onChangeText?: (text: string) => void;
	value: string;
}

const Input = ({
	placeholder,
	keyboardType,
	secureTextEntry,
	style,
	clearMode,
	onChangeText,
	value,
}: Props) => {
	return (
		<Container style={style}>
			<InputField
				selectionColor="#FFFFFF"
				secureTextEntry={secureTextEntry}
				keyboardType={keyboardType ? keyboardType : "default"}
				autoCapitalize="none"
				autoCorrect={false}
				allowFontScaling={false}
				placeholderTextColor="#FFFFFF"
				placeholder={placeholder}
				clearButtonMode={clearMode ? "while-editing" : "never"}
				onChangeText={onChangeText}
				value={value}
			/>
		</Container>
	);
};

export default Input;
