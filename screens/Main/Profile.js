import React, {useState, useEffect, useContext, createContext} from 'react';
import {View, StyleSheet, TextInput, ScrollView, Text} from 'react-native';
import {UserContext} from '../../Context/UserContext';

const Profile = ({route}) => {
  const {setuser, User} = route.params;

  return (
    <View>
      <TextInput
        style={styles.input}
        value={User}
        placeholder="Enter your username"
        onChangeText={val => {
          setuser(val);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    fontSize: 20,
  },
});

export default Profile;
