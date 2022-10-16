import React, { useState, useContext } from "react";
import { styles } from '../styles';
import { Alert, Modal, Text, Pressable, View } from "react-native";
import { ajoutTache, getMesTaches, deleteTask } from '../api/database';
import { TodoContext } from '../context';
import { MyInput } from "./input";
import { MyBout } from "./bout";
import GestureRecognizer, {
    swipeDirections,
} from 'react-native-swipe-gestures';
import { showConfirmDialog } from './confirm';


export function ModalComponent({ modalTitle, modalDesc }) {
    const { user, settaches, taches } = useContext(TodoContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState(modalTitle);
    const [desc, setDesc] = useState(modalDesc);
    const handleDelete = () => {
        deleteTask(user.uid, title)
        Alert.alert('Tache supprimée')
        getMesTaches(user.uid)
            .then(data => {
                settaches(data);
            })
            .catch(err => Alert.alert(err))
    }


    const onSwipe = (gestureName, gestureState) => {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        console.log(gestureName);
        if (gestureName === SWIPE_LEFT) {
            Alert.alert(
                "Supprimer ?", "Voulez vous vraiment supprimer ???",
                [
                    {
                        text: "Oui, bien sûr !",
                        onPress: () => handleDelete(),
                    },
                    {
                        text: "Hmmm j'hésite encore...",
                    },
                ]
            );
        }
    };

    const handleClick = () => {
        if (title == "") {
            Alert.alert('Vous ne pouvez ajouter une tâche sans titre')
        } else {
            ajoutTache(user.uid, title, desc).then(() => {
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
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <MyInput label={"Titre"} valeur={title} etat={setTitle} />
                        <MyInput label={"Description"} valeur={desc} etat={setDesc} multiline={true} />
                        <MyBout label="Valider" click={handleClick} />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <GestureRecognizer onSwipe={onSwipe}>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    {console.log("text de la modal : ", modalTitle, modalDesc)}
                    <Text style={styles.titleStyle}>{modalTitle}</Text>
                    <Text style={styles.textStyle}>{modalDesc}</Text>
                </Pressable>
            </GestureRecognizer>
        </View >
    );
};

export default ModalComponent;