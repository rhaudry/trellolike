import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { ListeTacheVue } from '../vues/listeTacheVue';
import { getListState } from "../api/database";
import { NewTache } from '../vues/newTache';
import { styles } from '../styles';
import { Alert } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import { TodoContext } from "../context";

const Tab = createMaterialTopTabNavigator()
export function TodoRouter() {
    const [listTask, setListTask] = useState();
    const { user, taches, settaches } = useContext(TodoContext);

    // A revoir 
    // getListState(user.uid).then(data => {
    //     console.log("DATA : ", data);
    //     setListTask(data);
    // }).catch(err => Alert.alert(err))


    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#448FE4',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { paddingTop: 35, backgroundColor: '#DAFAC3' },
            swipeEnabled: false
        }}>
            <Tab.Screen name="Liste" component={ListeTacheVue} />
            <Tab.Screen name="newTache" component={NewTache} />

        </Tab.Navigator>
    )
}
