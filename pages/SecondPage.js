// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { StyleSheet, ScrollView, Text, SafeAreaView, FlatList} from 'react-native';

import categorieData from '../data/categorieData';

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <FlatList
          data={categorieData}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Text onPress={() => navigation.navigate('ThirdPage')} style={styles.item}>{item.title}</Text>}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
});

export default SecondPage;
