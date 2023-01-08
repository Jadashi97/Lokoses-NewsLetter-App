import * as React from "react";
import { StyleSheet } from "react-native";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";




const Stack = createNativeStackNavigator();

const RootNavigator = ()=> {
    return(
        <Stack.Navigator 
            initialRouteName="Welcome"
            screenOptions={{headerStyle: {backgroundColor: '#FBDABB'} }}
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Subscribe" component={SubscribeScreen}/>
        </Stack.Navigator>
    );
};

export default RootNavigator;
