import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from '../../screens/Main/Main';
import Profile from '../../screens/Main/Profile';

const Tab = createBottomTabNavigator();

const TabNavigatorApp = ({route}) => {
  const {setuser, User} = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 35},
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{headerShown: false, tabBarShowLabel: false}}
        initialParams={{icon: 'headphoneIcon', data: 'sound'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false, tabBarShowLabel: false}}
        initialParams={{
          icon: 'headphoneIcon',
          data: 'sound',
          setuser: setuser,
          User: User,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigatorApp;

const styles = StyleSheet.create({});
