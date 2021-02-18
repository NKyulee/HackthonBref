// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Image, SafeAreaView, Button} from 'react-native'
import { CheckBox } from 'react-native-elements'

const SixthPage = ({ navigation }) => {

  const [value, onChangeText] = React.useState('Commentaire');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={{uri: "http://icons.iconarchive.com/icons/arrioch/blawb/128/news-icon.png"}}
          />
          <Text style={styles.title_text}>Titre Sondage</Text>
          <Text style={styles.description_text}>
            Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. 
            Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, 
            la princesse Leia Organa dissimule les plans de l’Étoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. 
            Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. 
            Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au cœur des montagnes désertiques de Tatooine...
          </Text>
          <View>
            <View style={{flex:3, flexDirection: 'row'}}>
              <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                <Text>oui <CheckBox/></Text>
              </View>
              <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                <Text>non <CheckBox/></Text> 
              </View>
            </View>
            <View style={{flex:3, justifyContent: 'center'}}>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, maxLength: 40 }}
                onChangeText={text => onChangeText(text)}
                value={value}
              />
              <Button title='Valider' onPress={() => {}}/>
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  }
})

export default SixthPage;
