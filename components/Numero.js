import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
	<TextInput
		style={styles.numero}
		value={props.num}
		onChangeText={valorDoCampo => props.atualizaValor(props.nome, valorDoCampo)}
	/>
);

const styles = StyleSheet.create({
	numero: {

		margin: 20,
		width: 150,
		height: 30,
		fontSize: 20,
		borderWidth: 1
	}
});
