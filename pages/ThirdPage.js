// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { View, SafeAreaView, FlatList, TextInput, Button, StyleSheet} from 'react-native';

import ArticleItem from '../components/ArticleItem';
import articleData from '../data/articleData';

import Filter from '../components/Filter';

const ThirdPage = ({ navigation }) => {

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
          data={articleData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ArticleItem refArticle={item}/>}
        />
			</View>
    </SafeAreaView>
  );
};

export default ThirdPage;

const styles = StyleSheet.create({
	textinput: {
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 1 
	}
})