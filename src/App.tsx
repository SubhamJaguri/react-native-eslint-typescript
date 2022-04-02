import React from 'react';
import AppStack from './navigation/stacks/app-stack';
import Providers from './Providers';
const App = () => (
	<Providers>
		<AppStack />
	</Providers>
);

export default App;
