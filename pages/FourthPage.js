// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { View, SafeAreaView, FlatList, TextInput, Button, StyleSheet, Text} from 'react-native';

import sondageData from '../data/sondageData';
import Filter from '../components/Filter';

const FourthPage = ({ navigation }) => {

  const [value, onChangeText] = React.useState('Recherche');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex: 2}}>
        <View style={{flex:1, flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <Filter />
          </View>
          <View style={{flex: 3, justifyContent: 'center'}}>
            <TextInput
              style={styles.textinput}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <Button title='Valider' onPress={() => {}}/>
          </View>
        </View> 
      </View>
			<View style={{flex: 4, justifyContent: 'center'}}>
        <FlatList
          data={sondageData}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Text onPress={() => navigation.navigate('SixthPage')} style={styles.item}>{item.title}</Text>}
        />
			</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	textinput: {
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 1 
	},
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
})

export default FourthPage;


