import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View, Alert, SafeAreaView } from 'react-native'
import { ajoutTache, getMesTaches } from '../api/database';
import { MyBout } from '../components/bout';
import { MyInput } from '../components/input'
import { TodoContext } from '../context';
import { styles } from '../styles';

export function NewTache() {
    const [tache, settache] = useState("");
    const [desc, setDesc] = useState("");
    const { user, settaches, taches } = useContext(TodoContext);
    const handleClick = () => {
        if (tache == "") {
            Alert.alert('Vous ne pouvez ajouter une tâche sans titre')
        } else {
            ajoutTache(user.uid, tache, desc).then(() => {
                Alert.alert('Tache ajoutée')
                getMesTaches(user.uid)
                    .then(data => {
                        settaches(data);
                    })
                    .catch(err => Alert.alert(err))
            }).catch(err => Alert.alert(err))
        }
    }
    return (
        <SafeAreaView style={styles.safe}>

            <View style={styles.contConnect}>
                <MyInput label={"Nom de la tâche"} valeur={tache} etat={settache} />
                <MyInput label={"description"} valeur={desc} etat={setDesc} />
                <MyBout label="Valider" click={handleClick} />


            </View>
            <StatusBar ></StatusBar>
        </SafeAreaView>

    )
}