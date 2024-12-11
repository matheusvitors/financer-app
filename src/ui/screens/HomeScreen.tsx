import React from 'react';
import { Text, View } from 'react-native';
import Logo from '@assets/img/logo.svg'

export const HomeScreen: React.FC = () => {
    return (
		<View style={{backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Logo width={350} />
		</View>
	);
}
