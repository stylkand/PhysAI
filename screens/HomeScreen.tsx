import { StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return (
    <View style={styles.container}>
		  <Image source = {require("../assets/images/logo/logo_demo.jpg")} style={styles.image}/>
      <ScrollView>
      <Text style={styles.title}>PhysAI</Text>
      <Text style={styles.subtitle}>Work everyday with your AI physiotherapist</Text>

      <View style={styles.separator} lightColor="#457" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle}>Your todays tasks💪🏼</Text>
      <View style={styles.middleBox} >

        <Text style={styles.TextInBox} >10     x      Pull Ups</Text>
      </View>
     <View style={styles.middleBox} >
       <Text style={styles.TextInBox} >20     x      Starfish</Text>

      </View>

      <View style={styles.middleBox} >
      <Text style={styles.TextInBox} >15     x      Squash</Text>

      </View>
</ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 25,
    color: '#1239'
  },
  TextInBox: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'rgba(45,150,223,53)',      
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image :{
		marginTop: 10,
		height: 150,
		resizeMode: "contain"
	},
  middleBox: {
    backgroundColor: "#4AA4",
    width: '90%',
    height: 80,
    borderRadius: 33,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center'
  
    },
});

