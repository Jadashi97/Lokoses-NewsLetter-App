import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";




const Stack = createNativeStackNavigator();

const RootNavigator = ()=> {
    return(
        <Stack.Navigator>
            {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
        </Stack.Navigator>
    );
};

export default RootNavigator;
