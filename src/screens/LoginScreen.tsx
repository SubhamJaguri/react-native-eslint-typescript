import {Box, Button} from 'native-base';
import React from 'react';
import {AppStackNav} from '../navigation/stacks/app-nav';

const LoginScreen: React.FC<AppStackNav<'LoginScreen'>> = ({navigation}) => {
	return (
		<Box>
			Login screen
			<Button onPress={() => navigation.navigate('HomeScreen')}>
				Go to Home screen
			</Button>
		</Box>
	);
};

export default LoginScreen;
