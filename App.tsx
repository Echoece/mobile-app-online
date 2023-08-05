import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {AuthProvider, AuthContext} from "./src/providers/AuthProvider";
import {NavigationContainer} from "@react-navigation/native";
import Ecommerce from "./src/screens/Ecommerce";
import Registration from "./src/screens/Registration";

const AuthStack = createStackNavigator();
const AuthStackScreens = () => {
    return(
        <AuthStack.Navigator initialRouteName="register">
            <AuthStack.Screen name="Register" component={Registration} options={{headerShown: false}}/>
        </AuthStack.Navigator>
    )
}

export default function App() {
  return (
      <AuthProvider>
        <AuthContext.Consumer>
          {
            (auth) =>
                <NavigationContainer>
                  {auth?.isLoggedIn ? <Ecommerce/> : <AuthStackScreens/>}
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
