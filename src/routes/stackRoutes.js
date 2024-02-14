import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Detalhes from '../pages/Detalhes'
import Cursos from "../pages/Cursos";

const Stack = createNativeStackNavigator();

export default function stackRoutes(){
    return(
        <Stack.Navigator>

            <Stack.Screen
            name='Cursos'
            component={Cursos}/>

            <Stack.Screen
            name='Detalhes'
            component={Detalhes}/>

        </Stack.Navigator>
    )
}