// import React from 'react';

// import { StackNavigator } from 'react-navigation';
// import ScreenOne from './src/stack/ScreenOne';
// import ScreenTwo from './src/stack/ScreenTwo';
// import ScreenThree from './src/stack/ScreenThree';

// const App = StackNavigator({
// 	ScreenOne: { screen: ScreenOne },
// 	ScreenTwo: { screen: ScreenTwo },
// 	ScreenThree: { screen: ScreenThree }
// });

// export default App;

import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Home!</Text>
			</View>
		);
	}
}

class SettingsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Settings!</Text>
			</View>
		);
	}
}

export default createBottomTabNavigator(
	{
		Home: HomeScreen,
		Settings: SettingsScreen
	},
	{
		tabBarOptions: {
			activeTintColor: 'red',
			inactiveTintColor: 'black'
		}
	}
);
