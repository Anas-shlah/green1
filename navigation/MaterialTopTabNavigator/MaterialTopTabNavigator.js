import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Drawer from '../DrawerNavigator/Drawer';
import TabtopBar from './TabtopBar';

const Tabs = createMaterialTopTabNavigator();

const TopTabNavigator = props => {
  //const {content} = route.params.data;
  //console.log(content);

  return (
    <Tabs.Navigator tabtopBar={props => <TabtopBar {...props} />}>
      <Tabs.Screen name="Drawer" component={Drawer} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default TopTabNavigator;

/*
<Drawers.Navigator>
              <Drawers.Screen name={con.title} component={Drawer} />
            </Drawers.Navigator>

*/
