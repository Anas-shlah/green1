import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReadBook from '../screens/Main/ReadBook';
import ListenBook from '../screens/Main/ListenBook';
import TabBar from './TabBar';

const Tap = createBottomTabNavigator();
const TabNavigator = props => {
  const {data} = props;
  const {content} = data;

  return (
    <Tap.Navigator tabBar={props => <TabBar {...props} />}>
      <Tap.Screen
        name="قرائة"
        component={ReadBook}
        initialParams={{icon: 'aliIcon', data: {content}}}
      />
      <Tap.Screen
        name="استماع"
        component={ListenBook}
        initialParams={{icon: 'headphoneIcon', data: 'sound'}}
      />
    </Tap.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TabNavigator;
