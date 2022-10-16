import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    contener: {
        flex: 1,
        alignItems: "center"
    },
    safe: {
        marginTop: 0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CDCFFF"
    },
    input: {
        height: 50,
        borderColor: "#000",
        borderWidth: 1,
        width: 300
    },
    labelInput: {
        fontSize: 20,
        fontWeight: "bold"
    },
    contConnect: {
        height: 200
    },
    btn: {
        height: 20,
        width: 300,
        backgroundColor: "red",
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center"
    },
    tache: {
        height: 100,
        margin: 5,
        width: 350,
        // backgroundColor: "#007bff",
        // margin: 5,
        // paddingVertical: 5
    },
    // tacheTxt: {
    //     width: 100,
    //     textAlign: "left"
    // },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2
    },
    modalView: {
        height: 400,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        height: 100,
        width: 350,
        borderRadius: 20,
        borderColor: "#C2E7DA",
        borderWidth: 2,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#DAFAC3",
    },
    buttonClose: {
        backgroundColor: "#DAFAC3",
    },
    textStyle: {
        color: "#3A5400",
        fontWeight: "normal",
        textAlign: "center"
    },
    titleStyle: {
        color: "#448FE4",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    },
    modalText: {
        marginBottom: 1,
        textAlign: "center"
    },
    routerbar: {
        paddingTop: 40,
        backgroundColor: "#CDCFFF",
        marginTop: 0,
    },
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveBackgroundColor: "red",
        indicatorStyle: { backgroundColor: '#DAFAC3', height: '100%' },
        color: 'black',
        pressOpacity: 1,

    }
})