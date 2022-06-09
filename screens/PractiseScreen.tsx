//import { StyleSheet, View } from 'react-native';
//import { SafeAreaView } from "react-native";
import {WebView} from 'react-native-webview';
import {Component } from 'react';
import { Linking } from 'react-native';



const App: React.FC = () => {
  return (
      <WebView
//          style={styles.container}
          source={{ uri: 'https://boostup-app.herokuapp.com/' }}
            
    javaScriptEnabled={true}
    domStorageEnabled={true}
      />
  );
}
 
export default App;
/*
export default class App extends Component {
  render() {
    return <WebView source={{ uri: 'https://boostup-app.herokuapp.com/' }} 
    
    javaScriptEnabled={true}
    domStorageEnabled={true}
      />
  }
}
*/
/*
const ActivityIndicatorElement = () => {
  //making a view to show to while loading the webpage
  return (
    <ActivityIndicator
       color="#009688"
       size="large"
       style={styles.activityIndicatorStyle}
    />
  );
}


export default function PractiseScreen() {
  return (

  <SafeAreaView style={{ flex: 1 }}>
          <WebView 
            source={{ uri: 'https://boostup-app.herokuapp.com/' }} 
            javaScriptEnabled={true}
            domStorageEnabled={true}
  
           
          />
        </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
*/