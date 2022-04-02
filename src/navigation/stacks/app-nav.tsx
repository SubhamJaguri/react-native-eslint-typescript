import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AppStackParamList = {
	LoginScreen: undefined;
	HomeScreen: undefined;
};

export type AppStackNav<RouteName extends keyof AppStackParamList> = {
	navigation: NativeStackNavigationProp<AppStackParamList, RouteName>;
	route: RouteProp<AppStackParamList, RouteName>;
};
