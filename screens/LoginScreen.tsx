import { RootStackScreenProps } from '../types';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';



export default function LoginScreen({ navigation }: RootStackScreenProps<'LoginScreen'>) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [wrong, setWrong] = useState('');

	const handleClick = () => {
		// if ((email=='user') && (password=='user')){
			setWrong('');
			navigation.navigate('HomeScreen');
		// }
		// else {
		// 	setWrong('Username  and Password is wrong. (hint: user - user)')

		// }
		// return 2
	 }

	return (

		<View style={styles.container}>
		<Image source = {require("../assets/images/logo/logo_demo.jpg")} style={styles.image}/>
		<StatusBar style="auto" />
		<View style={styles.inputView}>
			<TextInput
				style={styles.TextInput}
				placeholder="username"
				placeholderTextColor="#FFF"
				onChangeText={(email) => setEmail(email)}
			/>
		</View>
 
		<View style={styles.inputView}>
			<TextInput
				style={styles.TextInput}
				placeholder="Password"
				placeholderTextColor="#FFF"
				secureTextEntry={true}
				onChangeText={(password) => setPassword(password)}
			/>
		</View>
			<TouchableOpacity>
					<Text style={styles.forgot_button}>Forgot Password?</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.loginBtn} onPress={handleClick}>
					<Text style={styles.loginText}>login</Text>
			</TouchableOpacity>
			<Text style={styles.WrongMessage}>{wrong}</Text>
			<View style={styles.containerBottom}>
					<Image source = {require("../assets/images/logo/ntuaLogoBlack.png")} style={styles.imageNtua}/>
					<Text style={styles.bottomText}>NTUA, ECE, 2022{"\n"}
													Thesis Project{"\n"}
													el17025 - Kitsos Orfanopoulos{"\n"}
													el17088 - Stylianos Kandylakis </Text>
			</View>

	</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	image :{
		marginTop: 40,
		height: 200,
		resizeMode: "contain"
	},
	inputView: {
		backgroundColor: "#22dbD6",
		borderRadius: 30,
		width: "70%",
		height: 45,
		marginBottom: 10,
		alignItems: "center",
	},
	TextInput: {
		height: 50,
		fontSize: 25,
		padding: 10,
	},
	forgot_button: {
		height: 30,
		marginBottom: 20,
		color: "#22DD",
		fontStyle: "italic"
	},
	loginBtn: {
		width:"80%",
		borderRadius:25,
		height:50,
		alignItems:"center",
		justifyContent:"center",
		marginBottom:5,
		backgroundColor:"#2DF",
	},
	loginText:{
		color: "#FFF",
		fontSize: 25
	},
	containerBottom:{
		justifyContent: 'flex-start',
		flexDirection: 'row',

	},
	WrongMessage:{
		marginBottom: 40,
		flexWrap: 'wrap',
		color: "#A33",
		fontStyle: "italic",
		fontSize: 12

	},
	imageNtua :{
		marginLeft: 50,
		marginRight: 10,
		height: 70,
		width: 70,
		resizeMode: "contain",
		opacity: 0.5
	},
	bottomText:{
		marginRight: 40,
		color: "#0007",
		fontStyle: "italic"
	}
	
});
