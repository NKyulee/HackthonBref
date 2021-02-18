import React from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'
import Filter from './Filter';

export default function HeaderPage() {

	const [value, onChangeText] = React.useState('Recherche');

	return (
		<View style={{ flex: 2 }}>
			<View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={styles.titleText}>Les news du {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
			</View>
			<View style={{ flex: 4, flexDirection: 'row' }}>
				<View style={{ flex: 3 }}>
					<Filter />
				</View>
				<View style={{ flex: 3, justifyContent: 'center' }}>
					<TextInput
						style={styles.textinput}
						onChangeText={text => onChangeText(text)}
						value={value}
					/>
					<Button title='Valider' onPress={() => { }} />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	textinput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1
	},
	titleText: {
		fontSize: 20,
		fontWeight: "bold",
		// fontFamily: "Cochin"
	}
})


