import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Footer() {

	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.baseText}>Bref 2021</Text>
      <Text>Tout droit réservé</Text>
    </View>
	)
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  }
});

