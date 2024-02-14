import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Home from "../../src/pages/Home";
import Cursos from "../../src/pages/Cursos";
import Contato from "../../src/pages/Contato";
import StackRoutes from "../../src/routes/stackRoutes";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    backgroundColor: "#fff",
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Tela Inicial",
                    headerTintColor: "red",

                    headerStyle: {
                        backgroundColor: "green",
                    },

                    tabBarIcon: ({ color = "red", size }) => {
                        return (
                            <FontAwesome name="home" color={"red"} size={size}>
                                {" "}
                            </FontAwesome>
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Cursos"
                component={Cursos}
                options={{
                    title: "Cursos",
                    headerTintColor: "#fff",

                    headerStyle: {
                        backgroundColor: "green",
                    },

                    tabBarIcon: ({ color = "red", size }) => {
                        return (
                            <FontAwesome name="book" color={"red"} size={size}>
                                {" "}
                            </FontAwesome>
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Contato"
                component={Contato}
                options={{
                    title: "Contato",
                    headerTintColor: "#fff",

                    tabBarIcon: ({ color = "red", size }) => {
                        return (
                            <FontAwesome name="info-circle" color={"red"} size={size}>
                                {" "}
                            </FontAwesome>
                        );
                    },
                }}
            />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
