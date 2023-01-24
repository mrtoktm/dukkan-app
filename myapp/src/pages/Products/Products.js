import React from "react";
import { FlatList } from "react-native";
import config from 'react-native-config';
import { useDispatch } from "react-redux";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";

import ProductCard from '../../components/ProductCard';
import useFetch from "../../hooks/useFetch/useFetch";


const Products = ({navigation}) => {
    const dispatch = useDispatch();
    const {loading, data, error} = useFetch(config.API_URL);

    const handleProductSelect = id => {
        navigation.navigate('DetailPage', {id});
    };

    const renderProduct = ({ item }) => (
       <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
    );

    if (loading){
        return <Loading />;
    }

    if (error){
        return <Error />
    }

    return (
            <FlatList
            data={data}
            renderItem={renderProduct} />
    )
}

export default Products;
