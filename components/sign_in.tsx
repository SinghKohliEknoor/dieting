import { View,Text, TextInput,StyleSheet,Button } from 'react-native';
import React,{useEffect, useState} from 'react';
import credentials from '../credentials.json';
import { Link } from 'expo-router';


type Sign_inProps = {setIsSignedIn: (isSignedIn: boolean) => void, userName: string, setUserName: (userName: string) => void};

const Sign_in: React.FC<Sign_inProps> = ({setIsSignedIn,userName,setUserName}) => {
    
    const [password, setPassword] = useState<string>('');

    // useEffect(() => {
    //     console.log('Username:', userName);
    //     console.log('Password:', password);
    // }, [userName, password]);

    const handleSignIn = () => {
        const user = credentials.users.find((user) => user.username === userName && user.password === password);
        if(!user){
            alert('Invalid username or password');
        }
        else{
            setIsSignedIn(true);
        }
        // alert(`Username:   ${userName}   Password:  ${password}`);
        
    };
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <TextInput style={styles.input} placeholder="UserName" value={userName} onChangeText={setUserName}/>
            <TextInput style={styles.input} placeholder="password" value={password} onChangeText={setPassword} secureTextEntry={true}/>
            <Button title="Sign in" onPress={handleSignIn}/>
            <Link href="/recoverPassword" style={styles.link}><Text style={styles.forgotPassword}>Forgot password?</Text></Link>
        </View>
    );
}
const styles = StyleSheet.create({container: {flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    }, 
    input: {
        height: 40,
        margin: 6,
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    link:{
        margin: 10,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    forgotPassword:{
        fontSize: 12,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default Sign_in;