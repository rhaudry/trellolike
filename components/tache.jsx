import { TouchableOpacity, Text, View, Alert } from "react-native";
import { useContext } from "react";
import { TodoContext } from "../context";
import { styles } from "../styles";
import { deleteTask, getMesTaches } from '../api/database';
import ModalComponent from "./modalComponent";

export function Tache({ nom, desc }) {
    const { user, taches, settaches } = useContext(TodoContext);
    const handleSuppr = () => {
        deleteTask(user.uid, nom)
        Alert.alert('Tache supprimée')
        getMesTaches(user.uid)
            .then(data => {
                settaches(data);
            })
            .catch(err => Alert.alert(err))
    }
    return (
        < View style={styles.tache} >
            <View>
                {/* <Text style={styles.tacheTxt}>{nom}</Text>
                <Text style={styles.tacheTxt}>{desc}</Text>
                <TouchableOpacity onPress={handleSuppr}>
                    <Text >Supprimer</Text>
                </TouchableOpacity> */}
                {console.log("Nom: ", nom, " Desc: ", desc)}
                <ModalComponent modalTitle={nom} modalDesc={desc} />
            </View>
        </View >
    )

}