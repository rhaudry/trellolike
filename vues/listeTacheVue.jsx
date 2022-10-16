import { useContext, useEffect, useState } from "react";
import { SafeAreaView, View, Button, Text } from "react-native";
import { getListState, getMesTaches } from "../api/database";
import { ModalComponent } from "../components/modalComponent";
import { Tache } from "../components/tache";
import { TodoContext } from "../context";
import { styles } from "../styles";


export function ListeTacheVue({ route, navigation }) {
    const { user, taches, settaches } = useContext(TodoContext);
    const [listTask, setListTask] = useState();
    console.log("TEST : ", route.name);
    useEffect(() => {
        getMesTaches(user.uid).then(data => {
            settaches(data);
        })

    }, []);



    return (
        <SafeAreaView style={styles.safe}>
            <View>
                <Text>{route.name}</Text>
                {Object.entries(taches).map((entry, index) => {
                    const [key, value] = entry;
                    return (< Tache key={index} nom={key} desc={value.desc} />)
                })}

            </View>

            <Button
                title="+"
                onPress={() => {
                    // Navigate using the `navigation` prop that you received
                    navigation.navigate('newTache');
                }}
            />
        </SafeAreaView>
    )
}