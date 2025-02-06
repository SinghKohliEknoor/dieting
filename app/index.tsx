import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Sign_in  from '../components/sign_in';
import Welcome from '../components/welcome';
import { useState } from 'react';
import { Link } from 'expo-router';
import Counter from './lab3';

export default function App() {
  const[isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  return (
    <View style={styles.container}>
      {isSignedIn ? <Welcome username={userName} /> : <Sign_in setIsSignedIn={setIsSignedIn} userName={userName} setUserName={setUserName}/>}
      <StatusBar style="auto" />
      <View style={styles.lab}>
        <Link href='/lab3' style={styles.link}><Text>Lab 3</Text></Link>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lab:{
    flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  link:{
    height:30,
    marginBottom: 10,
    padding: 10,
    flex:0.1,
    alignSelf: 'center',
    color: 'lightblue',
    fontSize: 20,
    backgroundColor:'black',
    borderWidth: 1,
  }
});
