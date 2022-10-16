
import { Alert } from "react-native";
export function showConfirmDialog({ textVar, accept }) {
    console.log("BUG ? ");
    return Alert.alert(
        { textVar },
        [
            // The "Yes" button
            {
                text: "Yes",
                // onPress: { accept },
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
                text: "No",
            },
        ]
    );
}