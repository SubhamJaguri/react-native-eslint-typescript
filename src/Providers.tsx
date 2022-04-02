import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';

const Providers: React.FC = ({children}) => {
	return (
		<NavigationContainer>
			<NativeBaseProvider>{children}</NativeBaseProvider>
		</NavigationContainer>
	);
};

export default Providers;
