import React from "react";
import { SafeAreaView, View, Image, Alert } from "react-native";
import { Formik } from "formik";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from './Login.style';
import {useDispatch, useSelector} from 'react-redux';
import usePost from "../../hooks/usePost";

const Login = ({}) => {
    const user = useSelector(state => state.user);
    const {data, loading, error, post} = usePost();
    const dispatch = useDispatch();

    function handleLogin(values) {
        post('https://fakestoreapi.com/auth/login', values);
    }

    if(error) {
        Alert.alert("Dükkan", "Bir hata oluştu!");
    }
    
    if(data) {
       if (data.status === 'Error') {
            Alert.alert("Dükkan", "Kullanıcı bulunamadı!");
        }else {
            dispatch({type: 'SET_USER', payload: {user: JSON.stringify(user)}});
        }
        console.log(data);
    } 
  
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
            <Image style={styles.logo} 
            source={require('../../asstes/login-logo.png')} /> 
            </View>
            <Formik 
            initialValues={{username: '', password: ''}} 
            onSubmit={handleLogin}>
                {({handleSubmit, handleChange, values}) => (
                <View style={styles.body_container}>
                    <Input 
                    placeholder="Kullanıcı adını giriniz..." 
                    value={values.username}
                    onType={handleChange('username')}
                    iconName="account"/>
                    <Input 
                    placeholder="Şifrenizi giriniz..." 
                    value={values.password}
                    onType={handleChange('password')}
                    iconName="key"
                    isSecure/>
                    <Button text="Giriş Yap" onPress={handleSubmit} loading={loading}/>
                </View>
                )}
            </Formik>
        </SafeAreaView>
    )
};

export default Login;