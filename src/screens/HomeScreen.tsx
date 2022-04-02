import {Button, Center} from 'native-base';
import React from 'react';
import {AppStackNav} from '../navigation/stacks/app-nav';

const HomeScreen: React.FC<AppStackNav<'HomeScreen'>> = ({navigation}) => {
	return (
		<Center height={'100%'}>
			Home Screen
			<Button size="sm" variant="subtle" colorScheme="secondary">
				SECONDARY
			</Button>
			<Button onPress={() => navigation.goBack()}>Go Back</Button>
		</Center>
	);
};

export default HomeScreen;
