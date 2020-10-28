import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../constants/Colors';

interface Props {
	onClick: () => void;
	
	title: string;
}

const Primary = ({ onClick, title }: Props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={onClick}>
				<Text style={styles.buttonText}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
}; 

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',

		
	},
	button: {
		backgroundColor: Colors.default,
		borderRadius: 10,
		alignItems: 'center',
		marginVertical: 10,
		padding: 15,
		width:'85%'
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff'
	}
	
});

export default Primary;
