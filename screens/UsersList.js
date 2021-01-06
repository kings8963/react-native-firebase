import React from 'react';
import {Vie, Text, View, Button} from 'react-native'
import firebase from '../firebase/firebase'
import { useState } from 'react'
import { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { useLinkProps } from '@react-navigation/native';
import {ListItem,Avatar} from 'react-native-elements';

const UsersList = (props) => {
    const[users,setUsers] = useState([])
    useEffect(()=>{
        firebase.db.collection('users').onSnapshot((querySnapshot) =>{
            const users =[];
            querySnapshot.docs.forEach(doc =>{
                const {name,email,phone} = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone,
                })
               
            });
            setUsers(users)
        });
    },[]);
    return(
      <ScrollView>
          <Button title= "Create User" 
          onPress = {()=> props.navigation.navigate("CreateUserScreen")}
          />

        {
            users.map(user => {
                return(
                    <ListItem key={user.id} bottomDivider onPress={()=>alert(user.id)}>
                        <ListItem.Chevron/>
                        <Avatar
                            size="medium"
                            rounded
                            icon={{name: 'user', color: 'black', type: 'font-awesome'}}
                            //onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            
                         />
                        <ListItem.Content>
                            <ListItem.Title>{user.name}</ListItem.Title>
                            <ListItem.Title>{user.email}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                )
            })
        }

      </ScrollView>
    )
}

export default UsersList