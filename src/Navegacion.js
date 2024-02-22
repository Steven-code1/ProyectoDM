import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from "@react-navigation/native";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Ingreso from "./screens/Ingreso";
import MiAprendizaje from "./screens/MiAprendizaje";

const Stack = createNativeStackNavigator()

const Navegacion = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Ingreso"
                    component={Ingreso}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />


                <Stack.Screen
                    name="MiAprendizaje"
                    component={MiAprendizaje}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Navegacion;

