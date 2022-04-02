import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import SplashScreen from '../../screens/SplashScreen';
import {AppStackParamList} from './app-nav';

const AppNavigatorOptions = {
	headerShown: false
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
	return (
		<Stack.Navigator initialRouteName="SplashScreen">
			<Stack.Screen
				name="SplashScreen"
				component={SplashScreen}
				options={AppNavigatorOptions}
			/>
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
