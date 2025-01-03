import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 5,
        borderWidth: 2,  // Debug border
        borderColor: 'blue',
        paddingBottom: 5,
    },
    welcomeMessage: {
        fontSize: 32,
        color: "red",
        textAlign: 'center',
        marginTop: 130,
        width: '100%',
        borderWidth: 2,  // Debug border
        borderColor: 'green',
    },
    tabsContainer: {
        width: "100%",
        marginTop: 20,
    },
    tab: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginHorizontal: 4,
        borderRadius: 8,
        borderWidth: 1,
        width: 100
    },
    tabText: {

    }
});

export default styles;