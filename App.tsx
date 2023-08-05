import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {AuthProvider, AuthContext} from "./src/providers/AuthProvider";
import {NavigationContainer} from "@react-navigation/native";
import Ecommerce from "./src/screens/Ecommerce";
import Registration from "./src/screens/Registration";

const AuthStack = createStackNavigator();

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! Some more text here ......</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/


export default function App() {
  return (
      <AuthProvider>
        <AuthContext.Consumer>
          {
            (auth) =>
                <NavigationContainer>
                  {/*{auth?.isLoggedIn ? <Ecommerce/> : <Registration/>}*/}
                  {auth?.isLoggedIn ? <Registration/>: <Ecommerce/>  }
                </NavigationContainer>
          }
        </AuthContext.Consumer>
      </AuthProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
