import { StyleSheet } from "react-native";


const globalStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    bottomContainer: {
        position: 'absolute',
        alignSelf: "center",
        width: '100%',
        bottom: 40,
    },
    title: {
        margin: 30,
        fontSize: 40,
        alignSelf: "center"
    },
    subtitle: {
        margin: 30,
        fontSize: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        marginTop: 16,
        width: '80%',
        //shadowOffset: { width: 3, height: 3 },
        //shadowOpacity: 1,
        //shadowRadius: 0,
    },
});

export default globalStyles;