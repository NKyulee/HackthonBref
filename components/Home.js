import * as React from 'react';
import { View, StatusBar, StyleSheet, FlatList } from 'react-native';

import Header from './Header';
import Footer from './Footer';
import ArticleItem from './ArticleItem';
import articleData from '../data/articleData';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
        <Header />
			  <View style={{flex: 3, justifyContent: 'center'}}>
        <FlatList
          data={articleData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ArticleItem refArticle={item}/>}
        />
			  </View>
        <Footer/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight || 0
  }
})
