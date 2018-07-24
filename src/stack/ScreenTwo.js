import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

class ScreenTwo extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: `Welcome ${navigation.state.params.screen}`
		};
	};

	render() {
		const { state, navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text style={styles.titleText}>{state.params.screen}</Text>

				<View style={styles.buttonContainer}>
					<TouchableHighlight
						onPress={() => this.props.navigation.goBack()}
						style={[styles.button, { backgroundColor: '#3b3b3b' }]}
					>
						<Text style={styles.buttonText}>Go Back</Text>
					</TouchableHighlight>

					<TouchableHighlight
						onPress={() => navigate('ScreenThree', { screen: 'Screen Three' })}
						style={[styles.button, { backgroundColor: '#4b4bff' }]}
					>
						<Text style={styles.buttonText}>Next</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		alignSelf: 'stretch',
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 5,
		height: 40,
		justifyContent: 'center'
	},
	buttonText: {
		color: 'white',
		fontSize: 22,
		alignSelf: 'center'
	}
});
export default ScreenTwo;
