import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkorange',
    },
    logo:{
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width * 0.9,
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'black',
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
    },
    body_container: {
        flex: 1,
    },
});