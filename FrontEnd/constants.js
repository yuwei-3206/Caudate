import { StyleSheet } from "react-native";


const constantStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'black',
    },
    logoText: {
        color: "white",
        fontFamily: 'Nunito-Black',
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
    },
    btnText: {
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: "Nunito-Black"
    },
    whiteText: {
        color: "white",
        fontFamily: "Nunito-Black"
    },
    lightGrayText: {
        color: "#939393",
        textAlign:'center',
        fontFamily: "Nunito-Black"
    }
});

export default constantStyles;