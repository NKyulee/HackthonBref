import React, { Fragment } from 'react';
import { Text, StyleSheet} from 'react-native';

export default function Footer() {
	return (
		<Fragment>
      <Text style={styles.firstText}>
        Bref 2021
      </Text>
      <Text style={styles.secondText}>
        Tout droit réservé
      </Text>
    </Fragment>
	)
}

const styles = StyleSheet.create({
  firstText: { 
    fontSize: 18, 
    textAlign: 'center', 
    color: 'grey' 
  },
  secondText : { 
    fontSize: 16, 
    textAlign: 'center', 
    color: 'grey' 
  }
});

