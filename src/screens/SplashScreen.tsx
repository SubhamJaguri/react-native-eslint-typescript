import { StyleSheet} from 'react-native';
import {
	Center,
	NativeBaseProvider,
	Image
  } from 'native-base';
import React from 'react';
import { FOOODIE_NAMEIMAGE, SPLASH_IMAGE } from '../constants/images';

const SplashScreen = () => {
	return (
		<>
			<NativeBaseProvider>
				<Center flex={1} bg="coolGray.700">
					<Image source={SPLASH_IMAGE} style={styles.logo} />
					<Image source={FOOODIE_NAMEIMAGE} style={styles.fooodie} />
				</Center>
			</NativeBaseProvider>
		</>
	);
};
export default SplashScreen;

const styles = StyleSheet.create({
	logo: {
		width: '35%',
		height: '19%',
		resizeMode: 'contain',
	},
	fooodie: {
		marginTop: 10,
		width: '52%',
		height: '9%',
		resizeMode: 'contain',
	},
});
