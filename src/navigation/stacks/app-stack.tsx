import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import {AppStackParamList} from './app-nav';

const AppNavigatorOptions = {
	headerShown: false
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
	return (
		<Stack.Navigator initialRouteName="LoginScreen">
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={AppNavigatorOptions}
			/>
			<Stack.Screen
				name={'HomeScreen'}
				component={HomeScreen}
				options={AppNavigatorOptions}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;
