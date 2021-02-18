// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

import HeaderPage from '../components/HeaderPage';
import ArticleItem from '../components/ArticleItem';
import articleData from '../data/articleData';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderPage />
			  <View style={{flex: 4, justifyContent: 'center'}}>
          <FlatList
            data={articleData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('SeventhPage')}><ArticleItem refArticle={item}/></TouchableOpacity>}
          />
			  </View>
    </SafeAreaView>
  );
};

export default FirstPage;
