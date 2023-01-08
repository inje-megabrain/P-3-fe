import React from "react";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
	width: 100%;
	height: 40px;
	border-radius: 4px;
	justify-content: center;
	align-items: center;
	border: 1px;
	border-color: #333333;
`;

const Label = styled.Text`
	color: #ffffff;
`;

interface Props {
	label: string;
	style: object;
	onPress: () => void;
}

const Button = ({ label, style, onPress }: Props) => {
	return (
		<Btn style={style} onPress={onPress}>
			<Label>{label}</Label>
		</Btn>
	);
};

export default Button;
