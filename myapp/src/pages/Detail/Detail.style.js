import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{ flex: 1},
    image:{
        width: deviceSize.width,
        height: deviceSize.height / 2,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    body_container:{
        padding: 10,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    desc:{
        fontStyle: 'italic',
        marginVertical: 5,
    },
    price:{
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'right',
    },
});