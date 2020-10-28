import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {View, Text} from 'react-native';

export interface RoundedIconProps {
	name: string;
	size: number;
	color: string;
	backgroundColor: string;
	iconRatio: number;
}

const RoundedIcon = ({ name, size, color, backgroundColor, iconRatio }: RoundedIconProps) => {
	const iconSize = size * iconRatio;

	return (
		<View
		style={{
			height: size,
			width: size,
			marginHorizontal:10,
			justifyContent:"center",
			alignItems:"center",
			...{ backgroundColor },
		borderRadius: size / 2 ,
		}}
		>
			<Text
				style={{
					width: iconSize,
					height: iconSize,
					color: color
				}}
			
			>
				<Icon {...{ name }} size={iconSize} style={{ textAlign: 'center' }} />
			</Text>
		</View>
	);
};

RoundedIcon.defaultProps = {
	iconRatio: 0.7
};

export default RoundedIcon;
