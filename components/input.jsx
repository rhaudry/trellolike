import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles'
export function MyInput({ label, valeur, etat, multiline }) {
    return (
        <View style={styles.contener}>
            <Text style={styles.labelInput}>{label}</Text>
            <TextInput value={valeur} onChangeText={etat} style={styles.input} multiline={multiline ? true : false} />
        </View>
    )
}