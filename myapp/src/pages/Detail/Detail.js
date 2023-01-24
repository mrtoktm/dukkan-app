import React from "react";
import { View, Text, Image, ScrollView} from "react-native";
import config from "react-native-config";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from './Detail.style'

const Detail = ({route}) => {
    const {id} = route.params;
    const {loading, data, error} = useFetch(`${config.API_URL}/${id}`);
    console.log(id);

    if (loading){
        return <Loading />;
    }

    if (error){
        return <Error />;
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.body_container}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
            <Text style={styles.price}>{data.price} TL</Text>
        </View>
        </ScrollView>
    )
}

export default Detail;