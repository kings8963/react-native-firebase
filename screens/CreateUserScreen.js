import React, {useState} from 'react'
import {View,Button,TextInput, ScrollView, StyleSheet} from 'react-native';
import { Value } from 'react-native-reanimated';
import firebase from '../firebase/firebase'

const CreateUserScreen = (props) => {

    const[state,setstate] = useState({
        name: "",
        email:"",
        phone:"",
    });

    const handleChangeText =(name, value) =>{
        setstate({...state,[name]:value})
    }

    const saveNewUser = async ()=>{///funcion asincrona
        if(state.name === ''){
            alert("Por favor ingrese un nombre")
        }else{
           try {
            await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                phone: state.phone
             });
              //alert('Guardado con exito!')
           props.navigation.navigate("UsersList");
           } catch (error) {
            console.log(error); 
           }
          
        }
    };

    return(
        <ScrollView style={styles.container}>
            <View style = {styles.inputGroup}>
                <TextInput placeholder= "Name User" onChangeText = {(value)=> handleChangeText('name',value)}/>
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder= "Email User" onChangeText = {(value)=> handleChangeText('email',value)}/>
            </View>
            <View style = {styles.inputGroup}>
                <TextInput placeholder= "Phone User" onChangeText = {(value)=> handleChangeText('phone',value)}/>
            </View>

            <View>
                <Button title = "Save User" onPress = {() => saveNewUser()} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 35
    },

    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    }
})

export default CreateUserScreen