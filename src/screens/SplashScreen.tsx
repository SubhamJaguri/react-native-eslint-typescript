import { StyleSheet} from 'react-native';
import {
	Center,
	Image
  } from 'native-base';
import React from 'react';
import { FOOODIE_NAMEIMAGE, SPLASH_IMAGE } from '../constants/images';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
	return (
		<>
			<LinearGradient colors={['#C70923', '#E02D41', '#C70923']} style={{flex:1}}>
				<Center flex={1}>
					<Image source={SPLASH_IMAGE} style={styles.logo} alt={'Logo Image'} />
					<Image source={FOOODIE_NAMEIMAGE} style={styles.logoName} alt={'Logo Name'} />
				</Center>
			</LinearGradient>
		</>	
	);
};
export default SplashScreen;

const styles = StyleSheet.create({
	logo: {
		width: '50%',
		height: '20%',
		resizeMode: 'contain',
	},
	logoName: {
		marginTop: 10,
		width: '55%',
		height: '10%',
		resizeMode: 'contain',
	},
});
