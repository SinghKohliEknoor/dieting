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
      <Link href='/lab3' style={styles.container}><Text>Lab 3</Text></Link>
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
});
