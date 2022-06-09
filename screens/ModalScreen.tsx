import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
	<View style={styles.container}>
	  <Text style={styles.title}>PhysAI FAQs🎈</Text>
	  <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
	  <View style={styles.middleBox}>
		<Text style={styles.infoText}>This is a demo version. We do not send your data to Xi.{"\n"}{"\n"}Have Fun!😄</Text>
	  </View>
	  <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: "#1121"
  },
  title: {
	fontSize: 20,
	fontWeight: 'bold',
  },
  middleBox: {
	backgroundColor: "#4444",
	width: 400,
	height: 322,
	borderRadius: 33,
	padding: 33,

  },
  infoText: {
	  color: '#B31',
	  fontSize: 23,
  },
  separator: {
	marginVertical: 30,
	height: 1,
	width: '80%',
  },
});
