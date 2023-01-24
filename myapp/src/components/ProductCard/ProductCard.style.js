import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: 'darkorange',
        backgroundColor: 'darkgray',
        margin: 10,
        flexDirection: 'row',
    },
    image:{
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    body_container:{
        justifyContent: 'space-between',
        padding: 5,
        flex: 1,
    },
    title:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    price:{
        fontSize: 14,
        textAlign: 'right',
        fontStyle: 'italic',
    },
});