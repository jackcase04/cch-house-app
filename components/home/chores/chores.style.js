import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    choresContainer: {
        width: "95%",
        backgroundColor: "#eaeaea",
        margin: 10,
        borderRadius: 16,
    },
    noChoreMessage: {
        fontFamily: "DMMedium",
        fontSize: 26,
        textAlign: 'center',
        width: 'auto',
        marginVertical: 10
    },
    choreMessage: {
        fontFamily: "DMMedium",
        fontSize: 26,
        textAlign: 'center',
        width: 'auto',
        marginVertical: 10
    },
    chore: {
        fontFamily: "DMRegular",
        fontSize: 20,
        textAlign: 'center',
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    remindersContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#eaeaea",
        width: "95%",
        borderRadius: 16,
        paddingBottom: 15,
    },
    messages: {
        fontFamily: "DMRegular",
        fontSize: 16,
        textAlign: 'center',
    },
    reminderMessage: {
        fontFamily: "DMMedium",
        fontSize: 22,
        textAlign: 'center',
        width: 'auto',
        marginVertical: 10
    },
    Button: {
        backgroundColor: "#FE7654",
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    Text: {
        fontFamily: "DMBold",
        fontSize: 16,
        color: "#F3F4F8",
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalContent: {
        paddingTop: 10,
        paddingBottom: 70,
        width: "90%",
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    reminderPicker: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        padding: 5,
        marginRight: 10,
    },
    reminderPickerText: {
        fontFamily: "DMRegular",
        fontSize: 20,
    },
    reminderSchedulerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    downArrow: {
        marginTop: 5,
        marginLeft: 5,
        width: 15,
        height: 15,
    },
});

export default styles;