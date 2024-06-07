import { StyleSheet } from "react-native";


const constantStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        padding: 16,
    },
    logoText: {
        color: "white",
        // fontFamily: 'Nunito-Black',
        margin: 30,
        fontSize: 40,
        alignSelf: "center"
    },
    kButton: {
        marginTop: 16,
        backgroundColor: 'white',
        padding: 16,
        width: 360,
        borderRadius: 16,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 0,

    },
    btnText: {
        alignSelf: 'center',
        fontSize: 16,
        // fontFamily: "Nunito-Black"
    },
    whiteText: {
        color: "white",
        // fontFamily: "Nunito-Black"
    },
    lightGrayText: {
        color: "white",
        textAlign: 'center',
        // fontFamily: "Nunito-Black"
    }
});

export default constantStyles;