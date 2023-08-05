import React, {useState} from "react";
import {Text, View, StyleSheet, Image, TextInput, Button} from "react-native";
import logo from './../../assets/logo.png';
import {AuthContext, IAuthProvider} from "../providers/AuthProvider";


const Registration = (props: any) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dummyData = {name: "hello", password: "1234", email: "hello@gmail.com"};

    const handleNameInput = (name: string) => setName(name);
    const handlePassInput = (password: string) => setPassword(password);
    const handleEmailInput = (email: string) => setEmail(email);

    const handleOnSubmit = (registrationData : IAuthProvider) => {
        if (name === dummyData.name && password === dummyData.password && email === dummyData.email)
            registrationData.setIsLoggedIn(true);
        else
            console.log("invalid info");
    };



    return(
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.mainContainer}>
                        <Image source={logo} style={styles.imageStyles}/>
                        <View style={styles.inputContainer}>
                            <TextInput placeholder='name' value={name} onChangeText={handleNameInput} style={styles.inputStyles}/>
                            <TextInput placeholder='password' value={password} onChangeText={handlePassInput} style={styles.inputStyles}/>
                            <TextInput placeholder='email' value={email} onChangeText={handleEmailInput} style={styles.inputStyles}/>
                        </View>
                        <View>
                            <Button title="Submit" onPress={() => handleOnSubmit(auth as IAuthProvider)}/>
                        </View>
                    </View>
                )
            }
        </AuthContext.Consumer>

    );
}


const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyles: {
        height: 100,
        width: 100,
        margin: 40
    },
    inputContainer: {
        display: 'flex',
        margin: 10
    },
    inputStyles: {
        width: 200,
        height: 60,
        marginTop: 20,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 25
    }
})

export default Registration;